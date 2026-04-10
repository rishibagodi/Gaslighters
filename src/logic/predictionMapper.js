/**
 * Prediction Mapper
 * ─────────────────
 * Maps a CNN model prediction (class index + probability array) to a
 * human-readable result object with disease info, severity, and care advice.
 *
 * No external dependencies – uses only the local data modules.
 */

import { DISEASE_LABELS } from '../data/diseaseLabels.js';
import { TREATMENT_DB } from '../data/treatmentDB.js';

/* ───────── Severity thresholds ───────── */

/**
 * Derive a qualitative severity level from the model's confidence score.
 *
 * | Confidence      | Severity   | Rationale                             |
 * |-----------------|------------|---------------------------------------|
 * | ≥ 0.85          | High       | Strong signal → likely advanced case  |
 * | 0.60 – 0.84     | Moderate   | Clear signal → developing infection   |
 * | 0.35 – 0.59     | Low        | Weak signal → early or minor stage    |
 * | < 0.35          | Uncertain  | Model is not confident in diagnosis   |
 *
 * Healthy predictions always return "None".
 */
function deriveSeverity(confidence, isHealthy) {
  if (isHealthy) return 'None';
  if (confidence >= 0.85) return 'High';
  if (confidence >= 0.60) return 'Moderate';
  if (confidence >= 0.35) return 'Low';
  return 'Uncertain';
}

/**
 * Map a model prediction to a structured result.
 *
 * @param {number}   index               – Predicted class index (0–37)
 * @param {number[]} probabilitiesArray   – Full softmax probability array
 *                                          (length should equal DISEASE_LABELS.length)
 * @returns {{
 *   disease:    string,
 *   confidence: number,
 *   severity:   string,
 *   treatment:  string[],
 *   prevention: string[],
 *   displayName: string,
 *   crop:        string,
 *   symptoms:    string[],
 *   topK:        {label: string, probability: number}[]
 * }}
 */
export function mapPrediction(index, probabilitiesArray) {
  /* 1. Validate index --------------------------------------------------- */
  if (index < 0 || index >= DISEASE_LABELS.length) {
    throw new RangeError(
      `Prediction index ${index} is out of range (0–${DISEASE_LABELS.length - 1}).`
    );
  }

  /* 2. Look up label & confidence -------------------------------------- */
  const label = DISEASE_LABELS[index];
  const confidence = probabilitiesArray?.[index] ?? 0;
  const isHealthy = label.toLowerCase().includes('healthy');

  /* 3. Look up treatment database -------------------------------------- */
  const entry = TREATMENT_DB[label] || {};

  const disease     = entry.displayName || label;
  const crop        = entry.crop        || label.split('___')[0].replace(/_/g, ' ');
  const symptoms    = entry.symptoms    || [];
  const treatment   = entry.treatment   || ['No treatment data available.'];
  const prevention  = entry.prevention  || ['No prevention data available.'];

  /* 4. Severity --------------------------------------------------------- */
  const severity = deriveSeverity(confidence, isHealthy);

  /* 5. Top-K predictions (useful for differential diagnosis) ------------ */
  const topK = probabilitiesArray
    ? [...probabilitiesArray]
        .map((prob, i) => ({ label: DISEASE_LABELS[i], probability: prob }))
        .sort((a, b) => b.probability - a.probability)
        .slice(0, 5)
    : [{ label, probability: confidence }];

  /* 6. Return structured result ----------------------------------------- */
  return {
    disease,
    confidence: parseFloat(confidence.toFixed(4)),
    severity,
    treatment,
    prevention,
    // Bonus context fields
    displayName: disease,
    crop,
    symptoms,
    topK,
  };
}

export default mapPrediction;
