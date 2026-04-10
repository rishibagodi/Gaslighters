# Agri-Netra (Gaslighters)

Agri-Netra is a React + Vite web app for crop support workflows:

- Crop image disease scanning (TensorFlow.js model in-browser)
- Disease result mapping with treatment and prevention guidance
- Irrigation planning using weather data + FAO-style ET logic
- Local dashboard history persisted in `localStorage`

## Tech Stack

- React 19
- Vite 8
- TensorFlow.js (`@tensorflow/tfjs`)
- OpenWeatherMap API via server proxy (`/api/weather`)

## Quick Start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Environment Variables

Create a `.env` file in the project root (`Gaslighters/.env`):

```bash
OPENWEATHER_API_KEY=your_openweathermap_api_key
```

Notes:

- This key is read by the serverless weather proxy in `api/weather.js`.
- Do not prefix with `VITE_` (that would expose it to the browser bundle).
- During local dev, use a runtime that supports the serverless function route (for example `vercel dev`) or provide an equivalent `/api/weather` backend route.

## Irrigation Location

- The irrigation form includes a `Use My Location` action.
- It uses `navigator.geolocation.getCurrentPosition()` and stores coordinates internally.
- Latitude/longitude are sent to `planIrrigation()` automatically; users do not need to enter API keys in the UI.

## Add the TensorFlow.js Model

`useModel` loads the model from:

- `/model/model.json`

So place model artifacts under `public/model/`:

```text
public/model/
  model.json
  group1-shard1of4.bin
  group1-shard2of4.bin
  group1-shard3of4.bin
  group1-shard4of4.bin
  class_indices.json
```

`class_indices.json` is used to map predicted class indices to class names at startup.

## Build

```bash
npm run build
npm run preview
```
