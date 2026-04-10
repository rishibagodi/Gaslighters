/**
 * Disease Class Labels
 * ────────────────────
 * 65 classes: 38 standard PlantVillage classes (indices 0–37)
 * followed by 27 additional crop-disease classes (indices 38–64).
 *
 * Indices match the output order of the CNN classification model.
 */

export const DISEASE_LABELS = [
  /* ═══════ PlantVillage 38 (indices 0–37) ═══════ */

  // Apple (0–3)
  'Apple___Apple_scab',
  'Apple___Black_rot',
  'Apple___Cedar_apple_rust',
  'Apple___healthy',

  // Blueberry (4)
  'Blueberry___healthy',

  // Cherry (5–6)
  'Cherry_(including_sour)___Powdery_mildew',
  'Cherry_(including_sour)___healthy',

  // Corn / Maize (7–10)
  'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
  'Corn_(maize)___Common_rust_',
  'Corn_(maize)___Northern_Leaf_Blight',
  'Corn_(maize)___healthy',

  // Grape (11–14)
  'Grape___Black_rot',
  'Grape___Esca_(Black_Measles)',
  'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)',
  'Grape___healthy',

  // Orange (15)
  'Orange___Haunglongbing_(Citrus_greening)',

  // Peach (16–17)
  'Peach___Bacterial_spot',
  'Peach___healthy',

  // Pepper (18–19)
  'Pepper,_bell___Bacterial_spot',
  'Pepper,_bell___healthy',

  // Potato (20–22)
  'Potato___Early_blight',
  'Potato___Late_blight',
  'Potato___healthy',

  // Raspberry (23)
  'Raspberry___healthy',

  // Soybean (24)
  'Soybean___healthy',

  // Squash (25)
  'Squash___Powdery_mildew',

  // Strawberry (26–27)
  'Strawberry___Leaf_scorch',
  'Strawberry___healthy',

  // Tomato (28–37)
  'Tomato___Bacterial_spot',
  'Tomato___Early_blight',
  'Tomato___Late_blight',
  'Tomato___Leaf_Mold',
  'Tomato___Septoria_leaf_spot',
  'Tomato___Spider_mites Two-spotted_spider_mite',
  'Tomato___Target_Spot',
  'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
  'Tomato___Tomato_mosaic_virus',
  'Tomato___healthy',

  /* ═══════ Additional Crops (indices 38–64) ═══════ */

  // Rice (38–43)
  'Rice___Bacterial_Leaf_Blight',
  'Rice___Brown_Spot',
  'Rice___Healthy',
  'Rice___Leaf_Blast',
  'Rice___Leaf_Scald',
  'Rice___Sheath_Blight',

  // Sunflower (44–47)
  'Sunflower___Downy_Mildew',
  'Sunflower___Healthy',
  'Sunflower___Gray_Mold',
  'Sunflower___Leaf_Scars',

  // Sugarcane (48–50)
  'Sugarcane___Bacterial_Blight',
  'Sugarcane___Healthy',
  'Sugarcane___Red_Rot',

  // Cotton (51–54)
  'Cotton___Bacterial_Blight',
  'Cotton___Curl_Virus',
  'Cotton___Fusarium_Wilt',
  'Cotton___Healthy',

  // Wheat (55–58)
  'Wheat___Crown_And_Root_Rot',
  'Wheat___Healthy',
  'Wheat___Leaf_Rust',
  'Wheat___Loose_Smut',

  // Onion (59–64)
  'Onion___Botrytis_Blight',
  'Onion___Botrytis_Neck_Rot',
  'Onion___Purple_Blotch',
  'Onion___Fusarium_Basal_Rot',
  'Onion___Translucent_Scale',
  'Onion___Downy_Mildew',
];

export default DISEASE_LABELS;
