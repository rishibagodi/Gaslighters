/**
 * test.js – Smoke-test for all logic & storage modules
 * ─────────────────────────────────────────────────────
 * Run with:  node test.js
 *
 * Mocks localStorage and fetch so everything works in plain Node.js.
 */

/* ═══════════════════════════════════════════════════════
   1. Mock localStorage
   ═══════════════════════════════════════════════════════ */
const _store = {};
globalThis.localStorage = {
  getItem(key) {
    return _store[key] ?? null;
  },
  setItem(key, value) {
    _store[key] = String(value);
  },
  removeItem(key) {
    delete _store[key];
  },
  clear() {
    Object.keys(_store).forEach((k) => delete _store[k]);
  },
};

/* ═══════════════════════════════════════════════════════
   2. Mock crypto.randomUUID (Node 18- may not have it)
   ═══════════════════════════════════════════════════════ */
if (!globalThis.crypto) {
  globalThis.crypto = {};
}
if (!globalThis.crypto.randomUUID) {
  globalThis.crypto.randomUUID = () =>
    'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
}

/* ═══════════════════════════════════════════════════════
   3. Mock fetch (returns fake OpenWeatherMap response)
   ═══════════════════════════════════════════════════════ */
globalThis.fetch = async (url) => {
  console.log(`  [fetch mock] → ${url.slice(0, 80)}…\n`);
  return {
    ok: true,
    async json() {
      return {
        main: { temp: 32.5, humidity: 55 },
        wind: { speed: 2.8 },
        clouds: { all: 25 },
      };
    },
  };
};

/* ═══════════════════════════════════════════════════════
   4. Imports
   ═══════════════════════════════════════════════════════ */
import { calculateET0 } from './src/logic/et0Calculator.js';
import { mapPrediction } from './src/logic/predictionMapper.js';
import { saveResult, getHistory, clearHistory } from './src/storage/historyStore.js';
import { planIrrigation } from './src/logic/irrigationPlanner.js';

/* ═══════════════════════════════════════════════════════
   5. Helpers
   ═══════════════════════════════════════════════════════ */
const divider = (title) =>
  console.log(`\n${'═'.repeat(55)}\n  ${title}\n${'═'.repeat(55)}`);

/* ═══════════════════════════════════════════════════════
   6. Tests
   ═══════════════════════════════════════════════════════ */
async function runTests() {
  /* ── A. calculateET0 ───────────────────────────────── */
  divider('TEST A: calculateET0');
  const et0 = calculateET0({
    temp_c: 30,
    humidity: 50,
    wind_ms: 2.5,
    solar_rad: 750,    // W/m²
    elevation: 200,
    doy: 100,
    lat: 28.6,
  });
  console.log('  ET₀ =', et0, 'mm/day');
  console.log('  ✅  Passed –', typeof et0 === 'number' && et0 > 0 ? 'valid number' : '❌ FAIL');

  /* ── B. mapPrediction ──────────────────────────────── */
  divider('TEST B: mapPrediction (index 0)');
  // Build a fake softmax array (65 classes)
  const probabilities = new Array(65).fill(0.01);
  probabilities[0] = 0.87; // Apple Scab as top prediction
  const prediction = mapPrediction(0, probabilities);
  console.log('  Disease     :', prediction.disease);
  console.log('  Confidence  :', prediction.confidence);
  console.log('  Severity    :', prediction.severity);
  console.log('  Treatment   :', prediction.treatment);
  console.log('  Prevention  :', prediction.prevention);
  console.log('  Top-K       :', prediction.topK.map((t) => `${t.label} (${t.probability.toFixed(2)})`));
  console.log('  ✅  Passed –', prediction.disease ? 'result mapped' : '❌ FAIL');

  /* ── C. historyStore ───────────────────────────────── */
  divider('TEST C: historyStore');
  clearHistory();
  console.log('  Cleared history. Length:', getHistory().length);

  const saved = saveResult({ disease: 'Apple Scab', confidence: 0.87 });
  console.log('  Saved entry ID:', saved.id);
  console.log('  Saved timestamp:', saved.timestamp);

  saveResult({ disease: 'Tomato Early Blight', confidence: 0.72 });
  saveResult({ disease: 'Healthy Tomato', confidence: 0.95 });

  const history = getHistory();
  console.log('  History length:', history.length);
  console.log('  Latest entry  :', history[history.length - 1].disease);
  console.log('  ✅  Passed –', history.length === 3 ? 'correct count' : '❌ FAIL');

  /* ── D. planIrrigation ─────────────────────────────── */
  divider('TEST D: planIrrigation');
  try {
    const plan = await planIrrigation({
      crop: 'Tomato',
      stage: 'flowering',
      soilMoisture: 0.3,
      lat: 28.6139,
      lon: 77.209,
      elevation: 216,
    });
    console.log('  Crop          :', plan.crop);
    console.log('  Stage         :', plan.stage);
    console.log('  ET₀           :', plan.et0, 'mm/day');
    console.log('  Kc            :', plan.kc);
    console.log('  ETc           :', plan.etc, 'mm/day');
    console.log('  Water needed  :', plan.water_needed_mm, 'mm');
    console.log('  Cached weather:', plan.weather_cached);
    console.log('  Notes         :', plan.notes);
    console.log('  ✅  Passed –', plan.water_needed_mm >= 0 ? 'valid plan' : '❌ FAIL');
  } catch (err) {
    console.log('  ❌  FAIL –', err.message);
  }

  /* ── Summary ───────────────────────────────────────── */
  divider('ALL TESTS COMPLETE 🎉');
}

runTests();
