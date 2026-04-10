/**
 * Weather Service
 * ────────────────
 * Fetches current weather from the OpenWeatherMap API and caches
 * the result in localStorage for 1 hour to minimise API calls.
 *
 * Returns: { temp_c, humidity, wind_ms, solar_rad, weather_cached }
 */

const CACHE_KEY = 'gaslighters_weather_cache';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

/**
 * Retrieve cached weather data from localStorage.
 * Returns the cached payload if it exists and hasn't expired, otherwise null.
 */
function getCachedWeather(lat, lon) {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;

    const cached = JSON.parse(raw);

    // Validate that the cache matches the requested coordinates (rounded to 2 dp)
    const sameLocation =
      Math.abs(cached.lat - lat) < 0.01 &&
      Math.abs(cached.lon - lon) < 0.01;

    if (!sameLocation) return null;

    // Check expiry
    if (Date.now() - cached.timestamp > CACHE_TTL_MS) return null;

    return cached.data;
  } catch {
    return null;
  }
}

/**
 * Persist weather data to localStorage with a timestamp.
 */
function setCachedWeather(lat, lon, data) {
  try {
    const entry = {
      lat,
      lon,
      timestamp: Date.now(),
      data,
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    // Storage full or unavailable – fail silently
  }
}

/**
 * Estimate solar radiation (W/m²) from cloud cover percentage.
 * OpenWeatherMap does not provide a direct solar-radiation field, so
 * we approximate using a clear-sky constant (~1000 W/m²) reduced
 * linearly by cloud cover.
 */
function estimateSolarRadiation(cloudPercent) {
  const CLEAR_SKY_RAD = 1000; // W/m² at solar noon, clear sky
  return Math.round(CLEAR_SKY_RAD * (1 - cloudPercent / 100));
}

/**
 * Fetch current weather through the app's weather proxy.
 *
 * @param {number} lat      – Latitude
 * @param {number} lon      – Longitude
 * @returns {Promise<{temp_c: number, humidity: number, wind_ms: number, solar_rad: number, weather_cached: boolean}>}
 */
export async function getWeather(lat, lon) {
  // 1. Try cache first
  const cached = getCachedWeather(lat, lon);
  if (cached) {
    return { ...cached, weather_cached: true };
  }

  // 2. Fetch from server proxy (which injects OPENWEATHER_API_KEY)
  const url =
    `/api/weather` +
    `?lat=${encodeURIComponent(lat)}` +
    `&lon=${encodeURIComponent(lon)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `OpenWeatherMap API error: ${response.status} ${response.statusText}`
    );
  }

  const json = await response.json();

  const data = {
    temp_c: json.main.temp,
    humidity: json.main.humidity,
    wind_ms: json.wind.speed,
    solar_rad: estimateSolarRadiation(json.clouds?.all ?? 0),
  };

  // 3. Cache the fresh result
  setCachedWeather(lat, lon, data);

  return { ...data, weather_cached: false };
}

export default getWeather;
