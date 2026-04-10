/**
 * FAO-56 Crop Coefficients (Kc)
 * ──────────────────────────────
 * 21 crops: 14 disease-detection crops + 6 irrigation-only crops
 * + Maize alias.
 *
 * Keys:  initial  – Establishment / planting to ~10 % ground cover
 *        mid      – Full canopy / peak water demand
 *        late     – Maturity / senescence through harvest
 *
 * Source: Allen, R.G. et al. (1998) FAO Irrigation and Drainage
 *         Paper 56, Table 12.
 */

export const CROP_COEFFICIENTS = {

  /* ═══════════ Disease-Detection Crops (14) ═══════════ */

  Apple: {
    initial: 0.60,
    mid:     0.95,
    late:    0.75,
    notes: 'Deciduous orchard with ground cover (Table 12).',
  },

  Blueberry: {
    initial: 0.30,
    mid:     1.00,
    late:    0.65,
    notes: 'Estimated from FAO-56 berry/bush analogues.',
  },

  Cherry: {
    initial: 0.60,
    mid:     0.95,
    late:    0.75,
    notes: 'Deciduous stone-fruit orchard with ground cover.',
  },

  Corn: {
    initial: 0.30,
    mid:     1.20,
    late:    0.60,
    notes: 'Field (grain) maize (Table 12, "Maize, field (grain)").',
  },

  Grape: {
    initial: 0.30,
    mid:     0.85,
    late:    0.45,
    notes: 'Table or wine grapes on trellis.',
  },

  Orange: {
    initial: 0.70,
    mid:     0.65,
    late:    0.70,
    notes: 'Evergreen citrus, ~70 % canopy, no ground cover.',
  },

  Peach: {
    initial: 0.55,
    mid:     0.90,
    late:    0.65,
    notes: 'Deciduous stone fruit, no ground cover.',
  },

  Pepper: {
    initial: 0.60,
    mid:     1.05,
    late:    0.90,
    notes: 'Bell/sweet pepper, fresh market.',
  },

  Potato: {
    initial: 0.50,
    mid:     1.15,
    late:    0.75,
    notes: 'Tuber initiation to bulking is peak demand.',
  },

  Raspberry: {
    initial: 0.30,
    mid:     1.05,
    late:    0.50,
    notes: 'Estimated from FAO-56 berry analogues.',
  },

  Soybean: {
    initial: 0.40,
    mid:     1.15,
    late:    0.50,
    notes: 'Full-season variety.',
  },

  Squash: {
    initial: 0.50,
    mid:     1.00,
    late:    0.80,
    notes: 'Cucurbit family (Squash, Zucchini).',
  },

  Strawberry: {
    initial: 0.40,
    mid:     0.85,
    late:    0.75,
    notes: 'Mulched beds, drip irrigated.',
  },

  Tomato: {
    initial: 0.60,
    mid:     1.15,
    late:    0.80,
    notes: 'Staked, fresh-market tomato.',
  },

  /* ═══════════ Irrigation-Only Crops (6) ═══════════ */

  Wheat: {
    initial: 0.70,
    mid:     1.15,
    late:    0.25,
    notes: 'Winter wheat. Spring wheat Kc_late ≈ 0.25–0.40.',
  },

  Rice: {
    initial: 1.05,
    mid:     1.20,
    late:    0.90,
    notes: 'Paddy rice, continuously flooded. Kc_ini includes standing water evaporation.',
  },

  Cotton: {
    initial: 0.35,
    mid:     1.15,
    late:    0.70,
    notes: 'Kc_late varies 0.40–0.70 depending on defoliation timing.',
  },

  Sunflower: {
    initial: 0.35,
    mid:     1.05,
    late:    0.35,
    notes: 'Rapid Kc drop after seed-fill stage.',
  },

  Sugarcane: {
    initial: 0.40,
    mid:     1.25,
    late:    0.75,
    notes: 'Ratoon crop Kc may be slightly higher at initial stage.',
  },

  Onion: {
    initial: 0.70,
    mid:     1.05,
    late:    0.75,
    notes: 'Dry onion. Green onion Kc_mid ≈ 1.00.',
  },

  /* ═══════════ Alias ═══════════ */

  Maize: {
    initial: 0.30,
    mid:     1.20,
    late:    0.60,
    notes: 'Alias for Corn – same FAO-56 values.',
  },
};

export default CROP_COEFFICIENTS;
