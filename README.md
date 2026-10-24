# Agri-Netra

## What it is
Agri-Netra is a web app for farmers. You upload or capture a crop leaf photo, run disease detection with an on-device TensorFlow.js model, and get irrigation recommendations using the FAO-56 Penman-Monteith ET0 formula with live weather data.

Disease detection works fully offline after the model is loaded once.

## Tech
Built with React 19, Vite, TailwindCSS, TensorFlow.js, OpenWeatherMap API, and Recharts.

No backend server is required for the current setup.

## Getting started
```bash
git clone <your-repo-url>
cd Gaslighters
npm install
```

Add your OpenWeatherMap API key directly in `src/logic/weatherService.js` where the weather fetch URL is built.

Put model files in `public/model/`:

```text
model.json
group1-shard1of4.bin
group1-shard2of4.bin
group1-shard3of4.bin
group1-shard4of4.bin
class_indices.json
```

```bash
npm run dev
```

## Model files
Model files are not in this repo because of size limits.

Download them from `github.com/Rishit-dagli/Greenathon-Plant-AI` and place them in `public/model/`.

## How it works
Disease detection pipeline: an image is preprocessed into a model-ready tensor, then passed to the TensorFlow.js model in the browser. Scores are mapped to class labels and treatment/prevention info, and low-confidence scans are rejected with a retry message.

Irrigation calculation: the app fetches current weather, computes ET0 with the FAO-56 Penman-Monteith method, then applies crop coefficient (Kc) by growth stage. Soil moisture level is used to reduce net irrigation depth before showing the final recommendation.

Offline capability: once model files are downloaded by the browser, disease inference runs locally with no network calls. Irrigation still needs internet because weather data is live.

Scan history in localStorage: successful scan results are saved locally and shown on the dashboard. No cloud sync is used, so data stays on the device/browser.

