/**
 * Irrigation Planner
 * ──────────────────
 * Combines weather data, FAO-56 ET₀, and crop coefficients to
 * calculate daily crop water demand adjusted for current soil moisture.
 *
 * Pipeline:  getWeather → calculateET0 → lookup Kc → water_needed_mm
 */

import { getWeather } from './weatherService.js';
import { calculateET0 } from './et0Calculator.js';
import { CROP_COEFFICIENTS } from '../data/cropCoefficients.js';

/* ───────── Stage → Kc key mapping ───────── */

const STAGE_KC_MAP = {
  initial:    'initial',
  mid:        'mid',
  end:        'late',
  late:       'late',
  // Convenience aliases
  ini:        'initial',
  early:      'initial',
  seedling:   'initial',
  vegetative: 'mid',
  flowering:  'mid',
  peak:       'mid',
  mature:     'late',
  harvest:    'late',
};

/**
 * Resolve the Kc value for a given crop and growth stage.
 *
 * @param {string} crop  – Crop name (must match a key in CROP_COEFFICIENTS)
 * @param {string} stage – Growth stage keyword (see STAGE_KC_MAP)
 * @returns {{ kc: number, kcKey: string }}
 */
function resolveKc(crop, stage) {
  const entry = CROP_COEFFICIENTS[crop];
  if (!entry) {
    throw new Error(
      `Unknown crop "${crop}". Available: ${Object.keys(CROP_COEFFICIENTS).join(', ')}`
    );
  }

  const kcKey = STAGE_KC_MAP[stage.toLowerCase()] || 'mid';
  const kc = entry[kcKey] ?? entry.mid;

  return { kc, kcKey };
}

/**
 * Get the current day-of-year (1–366).
 */
function currentDOY() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 86_400_000; // ms
  return Math.floor(diff / oneDay);
}

/**
 * Plan daily irrigation requirement.
 *
 * @param {object}  params
 * @param {string}  params.crop         – Crop name (e.g. "Tomato", "Corn")
 * @param {string}  params.stage        – Growth stage keyword (e.g. "mid", "flowering")
 * @param {number}  params.soilMoisture – Current soil moisture as fraction (0–1),
 *                                        where 1 = field capacity. Used to offset
 *                                        the irrigation demand.
 * @param {number}  params.lat          – Latitude (decimal degrees)
 * @param {number}  params.lon          – Longitude (decimal degrees)
 * @param {number} [params.elevation=0] – Station elevation (m) for ET₀ accuracy
 * @returns {Promise<{
 *   crop:             string,
 *   stage:            string,
 *   et0:              number,
 *   kc:               number,
 *   etc:              number,
 *   water_needed_mm:  number,
 *   weather_cached:   boolean,
 *   weather:          object,
 *   notes:            string
 * }>}
 */
export async function planIrrigation({
  crop,
  stage,
  soilMoisture = 0,
  lat,
  lon,
  elevation = 0,
}) {
  /* 1. Fetch current weather ------------------------------------------- */
  const weather = await getWeather(lat, lon);

  /* 2. Calculate reference ET₀ ----------------------------------------- */
  const doy = currentDOY();

  const et0 = calculateET0({
    temp_c:    weather.temp_c,
    humidity:  weather.humidity,
    wind_ms:   weather.wind_ms,
    solar_rad: weather.solar_rad,
    elevation,
    doy,
    lat,
  });

  /* 3. Look up crop coefficient Kc ------------------------------------- */
  const { kc } = resolveKc(crop, stage);

  /* 4. Crop evapotranspiration ETc = ET₀ × Kc -------------------------- */
  const etc = parseFloat((et0 * kc).toFixed(2));

  /* 5. Water needed, offset by available soil moisture ------------------ */
  //   soilMoisture is expressed as a fraction of field capacity (0–1).
  //   We assume the effective root-zone depth contribution equals
  //   soilMoisture × ETc (i.e., the soil can supply that fraction of demand).
  const clampedMoisture = Math.max(0, Math.min(1, soilMoisture));
  const soilContribution = parseFloat((clampedMoisture * etc).toFixed(2));
  const waterNeeded = parseFloat(Math.max(0, etc - soilContribution).toFixed(2));

  /* 6. Compose advisory note ------------------------------------------- */
  let notes = '';
  if (waterNeeded === 0) {
    notes = 'Soil moisture is sufficient — no irrigation needed today.';
  } else if (waterNeeded < 2) {
    notes = 'Light irrigation recommended.';
  } else if (waterNeeded < 5) {
    notes = 'Moderate irrigation recommended.';
  } else {
    notes = 'Heavy irrigation recommended — consider split applications.';
  }

  /* 7. Return result ---------------------------------------------------- */
  return {
    crop,
    stage,
    et0,
    kc,
    etc,
    water_needed_mm: waterNeeded,
    weather_cached: weather.weather_cached,
    weather: {
      temp_c:    weather.temp_c,
      humidity:  weather.humidity,
      wind_ms:   weather.wind_ms,
      solar_rad: weather.solar_rad,
    },
    notes,
  };
}

export default planIrrigation;
