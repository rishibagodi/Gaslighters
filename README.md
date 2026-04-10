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
- OpenWeatherMap API (for irrigation weather inputs)

## Quick Start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Environment Variables

Create a `.env` file in the project root (`Gaslighters/.env`):

```bash
VITE_OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
```

Notes:

- Current irrigation flow accepts API key input from the form as well.
- Keeping the key in `.env` is still recommended for easier local setup and future wiring.

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
