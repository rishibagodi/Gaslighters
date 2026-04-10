/**
 * irrigationPlanner.js
 * Computes irrigation water requirements without a backend.
 *
 * Formula:  ETc = ET₀ × Kc
 *           water_needed_mm = ETc  (simplified: 1 day horizon, no rainfall)
 *
 * ET₀ is fetched from Open-Meteo (free, no API key).
 * If the fetch fails, a sensible seasonal default is used and
 * weather_cached is set to true so the UI can warn the user.
 */

/* ── Crop coefficient table (Kc) ──────────────────────── */
const KC_TABLE = {
  Tomato:  { Early: 0.60, Mid: 1.15, Late: 0.80 },
  Potato:  { Early: 0.50, Mid: 1.15, Late: 0.75 },
  Maize:   { Early: 0.30, Mid: 1.20, Late: 0.60 },
  Rice:    { Early: 1.05, Mid: 1.20, Late: 0.75 },
  Wheat:   { Early: 0.30, Mid: 1.15, Late: 0.30 },
  Cotton:  { Early: 0.45, Mid: 1.20, Late: 0.60 },
};

/* ── Seasonal ET₀ fallback (mm/day) ────────────────────── */
const SEASON_ET0 = {
  0: 3.5, 1: 3.8, 2: 4.5, 3: 5.2,  // Jan–Apr
  4: 6.0, 5: 6.5, 6: 5.8, 7: 5.2,  // May–Aug
  8: 4.8, 9: 4.2, 10: 3.8, 11: 3.5, // Sep–Dec
};

const OPEN_METEO_URL =
  'https://api.open-meteo.com/v1/forecast' +
  '?latitude=20.59&longitude=78.96' +        // India centre-point default
  '&daily=et0_fao_evapotranspiration' +
  '&forecast_days=1' +
  '&timezone=auto';

/**
 * Fetch today's ET₀ from Open-Meteo.
 * Returns { et0: number, cached: boolean }.
 */
async function fetchET0() {
  try {
    const res  = await fetch(OPEN_METEO_URL, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    const et0  = json?.daily?.et0_fao_evapotranspiration?.[0];
    if (et0 == null) throw new Error('No ET₀ in response');
    return { et0: parseFloat(et0.toFixed(2)), cached: false };
  } catch {
    const month = new Date().getMonth();
    return { et0: SEASON_ET0[month], cached: true };
  }
}

/**
 * getIrrigationPlan
 * Main entry-point called by App.jsx.
 *
 * @param {{ crop: string, stage: string, soil: string }} params
 * @returns {Promise<{
 *   crop:            string,
 *   stage:           string,
 *   soil:            string,
 *   et0:             number,
 *   kc:              number,
 *   water_needed_mm: number,
 *   weather_cached:  boolean,
 * }>}
 */
export async function getIrrigationPlan({ crop, stage, soil }) {
  const { et0, cached } = await fetchET0();

  const kc = KC_TABLE[crop]?.[stage] ?? 1.0;

  /* Soil adjustment factor */
  const soilFactor = soil === 'Sandy' ? 1.15 : soil === 'Clay' ? 0.85 : 1.0;

  const water_needed_mm = parseFloat((et0 * kc * soilFactor).toFixed(1));

  return {
    crop,
    stage,
    soil,
    et0,
    kc,
    water_needed_mm,
    weather_cached: cached,
  };
}
