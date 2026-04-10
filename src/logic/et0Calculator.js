/**
 * FAO-56 Penman-Monteith Reference Evapotranspiration (ET₀) Calculator
 * ─────────────────────────────────────────────────────────────────────
 * Implements the standard equation from:
 *   Allen, R.G. et al. (1998) FAO Irrigation and Drainage Paper 56.
 *
 * Equation (daily time-step, grass reference):
 *
 *         0.408 Δ (Rn − G)  +  γ · [900 / (T + 273)] · u₂ · (es − ea)
 * ET₀ = ───────────────────────────────────────────────────────────────
 *                        Δ  +  γ (1 + 0.34 u₂)
 *
 * Returns ET₀ in mm/day.  No external dependencies.
 */

/* ───────── helper constants ───────── */
const STEFAN_BOLTZMANN = 4.903e-9; // MJ / m² / day / K⁴
const SOLAR_CONSTANT = 0.0820;     // MJ / m² / min
const ALBEDO = 0.23;               // grass reference crop

/* ───────── internal helpers ───────── */

/**
 * Saturation vapour pressure (kPa) at temperature T (°C).
 * FAO-56 Eq. 11
 */
function eSat(T) {
  return 0.6108 * Math.exp((17.27 * T) / (T + 237.3));
}

/**
 * Slope of the saturation vapour-pressure curve (kPa / °C).
 * FAO-56 Eq. 13
 */
function delta(T) {
  return (4098 * eSat(T)) / Math.pow(T + 237.3, 2);
}

/**
 * Atmospheric pressure (kPa) from elevation (m).
 * FAO-56 Eq. 7
 */
function atmPressure(elevation) {
  return 101.3 * Math.pow((293 - 0.0065 * elevation) / 293, 5.26);
}

/**
 * Psychrometric constant γ (kPa / °C).
 * FAO-56 Eq. 8
 */
function psychrometricConstant(pressure) {
  return 0.000665 * pressure;
}

/**
 * Inverse relative distance Earth–Sun (dimensionless).
 * FAO-56 Eq. 23
 */
function invRelDistEarthSun(doy) {
  return 1 + 0.033 * Math.cos((2 * Math.PI * doy) / 365);
}

/**
 * Solar declination (radians).
 * FAO-56 Eq. 24
 */
function solarDeclination(doy) {
  return 0.409 * Math.sin((2 * Math.PI * doy) / 365 - 1.39);
}

/**
 * Sunset hour angle (radians).
 * FAO-56 Eq. 25
 */
function sunsetHourAngle(latRad, declination) {
  const x = -Math.tan(latRad) * Math.tan(declination);
  // Clamp to [-1, 1] for polar edge cases
  return Math.acos(Math.max(-1, Math.min(1, x)));
}

/**
 * Extraterrestrial radiation Ra (MJ / m² / day).
 * FAO-56 Eq. 21
 */
function extraterrestrialRadiation(latRad, doy) {
  const dr = invRelDistEarthSun(doy);
  const dec = solarDeclination(doy);
  const ws = sunsetHourAngle(latRad, dec);

  return (
    ((24 * 60) / Math.PI) *
    SOLAR_CONSTANT *
    dr *
    (ws * Math.sin(latRad) * Math.sin(dec) +
      Math.cos(latRad) * Math.cos(dec) * Math.sin(ws))
  );
}

/**
 * Clear-sky solar radiation Rso (MJ / m² / day).
 * FAO-56 Eq. 37 (simplified)
 */
function clearSkyRadiation(elevation, Ra) {
  return (0.75 + 2e-5 * elevation) * Ra;
}

/* ────────────────────────────────────────────────────── */

/**
 * Calculate FAO-56 Penman-Monteith reference ET (ET₀).
 *
 * @param {object}  params
 * @param {number}  params.temp_c    – Mean daily temperature (°C)
 * @param {number}  params.humidity  – Relative humidity (%)
 * @param {number}  params.wind_ms   – Wind speed at 2 m height (m/s)
 * @param {number}  params.solar_rad – Incoming solar radiation (W/m²)
 * @param {number}  params.elevation – Station elevation above sea level (m)
 * @param {number}  params.doy       – Day of year (1–366)
 * @param {number} [params.lat]      – Latitude in decimal degrees (needed
 *                                     for Ra & net longwave; defaults to 0)
 * @returns {number} ET₀ in mm/day (≥ 0)
 */
export function calculateET0({
  temp_c,
  humidity,
  wind_ms,
  solar_rad,
  elevation = 0,
  doy,
  lat = 0,
}) {
  /* 1. Convert inputs --------------------------------------------------- */
  const latRad = (Math.PI / 180) * lat;

  // Convert solar radiation from W/m² (instantaneous) to MJ/m²/day
  // Standard conversion: 1 W/m² mean over 24 h = 0.0864 MJ/m²/day
  const Rs = solar_rad * 0.0864;

  /* 2. Atmospheric & vapour-pressure parameters ------------------------- */
  const P = atmPressure(elevation);                // kPa
  const gamma = psychrometricConstant(P);          // kPa/°C
  const es = eSat(temp_c);                         // kPa
  const ea = (humidity / 100) * es;                // kPa  (actual vapour pressure)
  const D = delta(temp_c);                         // kPa/°C  (slope Δ)

  /* 3. Radiation terms -------------------------------------------------- */
  const Ra = extraterrestrialRadiation(latRad, doy);
  const Rso = clearSkyRadiation(elevation, Ra);

  // Net shortwave radiation (FAO-56 Eq. 38)
  const Rns = (1 - ALBEDO) * Rs;

  // Relative shortwave radiation ratio, clamped to [0.25, 1]
  const RsOverRso = Rso > 0 ? Math.min(Rs / Rso, 1) : 0.5;

  // Net longwave radiation (FAO-56 Eq. 39)
  // Using single temperature (Tmin ≈ Tmax ≈ temp_c for daily mean input)
  const TK4 = STEFAN_BOLTZMANN * Math.pow(temp_c + 273.16, 4);
  const Rnl = TK4 * (0.34 - 0.14 * Math.sqrt(ea)) * (1.35 * RsOverRso - 0.35);

  // Net radiation (FAO-56 Eq. 40)
  const Rn = Rns - Rnl;

  // Soil heat flux G ≈ 0 for daily time step (FAO-56 §4.1)
  const G = 0;

  /* 4. FAO-56 Penman-Monteith equation (Eq. 6) ------------------------- */
  const numerator =
    0.408 * D * (Rn - G) +
    gamma * (900 / (temp_c + 273)) * wind_ms * (es - ea);

  const denominator = D + gamma * (1 + 0.34 * wind_ms);

  const ET0 = numerator / denominator;

  // ET₀ cannot be negative in physical terms
  return Math.max(0, parseFloat(ET0.toFixed(2)));
}

export default calculateET0;
