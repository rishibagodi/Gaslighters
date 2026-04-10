/**
 * Disease Treatment & Prevention Database
 * -----------------------------------------
 * Keyed by the PlantVillage class label.
 * Each entry contains:
 *   displayName  – human-friendly disease name
 *   crop         – affected crop
 *   symptoms     – observable symptoms (array)
 *   treatment    – recommended curative actions (array)
 *   prevention   – preventive best-practices (array)
 */

export const DISEASE_TREATMENTS = {
  /* ───────── Apple ───────── */
  'Apple___Apple_scab': {
    displayName: 'Apple Scab',
    crop: 'Apple',
    symptoms: [
      'Olive-green to dark brown lesions on leaves',
      'Velvety or scabby spots on fruit surface',
      'Premature leaf drop',
    ],
    treatment: [
      'Apply fungicides such as captan or myclobutanil at early bloom',
      'Remove and destroy fallen infected leaves',
      'Prune trees to improve air circulation',
    ],
    prevention: [
      'Plant scab-resistant cultivars (e.g., Liberty, Enterprise)',
      'Apply preventive fungicide sprays from green-tip through petal fall',
      'Rake and compost fallen leaves in autumn',
    ],
  },

  'Apple___Black_rot': {
    displayName: 'Black Rot',
    crop: 'Apple',
    symptoms: [
      'Circular brown lesions with concentric rings on fruit',
      'Frogeye leaf spots – tan centres with purple margins',
      'Cankers on branches and limbs',
    ],
    treatment: [
      'Prune and burn cankered branches during dormancy',
      'Apply captan or thiophanate-methyl fungicide',
      'Remove mummified fruit from tree and ground',
    ],
    prevention: [
      'Maintain good tree sanitation',
      'Ensure proper pruning for airflow',
      'Avoid wounding fruit during harvest',
    ],
  },

  'Apple___Cedar_apple_rust': {
    displayName: 'Cedar Apple Rust',
    crop: 'Apple',
    symptoms: [
      'Bright orange-yellow spots on upper leaf surface',
      'Tube-like structures (aecia) on leaf undersides',
      'Deformed or dropped fruit',
    ],
    treatment: [
      'Apply myclobutanil or mancozeb at pink-bud stage',
      'Continue fungicide applications through petal fall',
    ],
    prevention: [
      'Remove Eastern red cedar (Juniperus virginiana) within 2 miles when feasible',
      'Plant rust-resistant apple varieties',
      'Scout for galls on nearby junipers in early spring',
    ],
  },

  'Apple___healthy': {
    displayName: 'Healthy Apple',
    crop: 'Apple',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Continue regular scouting and balanced fertilisation',
      'Maintain proper irrigation schedule',
      'Prune annually to promote air circulation',
    ],
  },

  /* ───────── Blueberry ───────── */
  'Blueberry___healthy': {
    displayName: 'Healthy Blueberry',
    crop: 'Blueberry',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Maintain soil pH between 4.5–5.5',
      'Mulch to conserve moisture and suppress weeds',
      'Prune older canes to encourage new growth',
    ],
  },

  /* ───────── Cherry ───────── */
  'Cherry_(including_sour)___Powdery_mildew': {
    displayName: 'Cherry Powdery Mildew',
    crop: 'Cherry',
    symptoms: [
      'White powdery fungal growth on leaves and shoots',
      'Leaf curling and stunted shoot growth',
      'Fruit may develop a whitish coating',
    ],
    treatment: [
      'Apply sulphur-based or triazole fungicides at first sign',
      'Remove and destroy heavily infected shoots',
    ],
    prevention: [
      'Choose resistant rootstocks or cultivars',
      'Avoid excessive nitrogen fertilisation',
      'Ensure adequate spacing and pruning for airflow',
    ],
  },

  'Cherry_(including_sour)___healthy': {
    displayName: 'Healthy Cherry',
    crop: 'Cherry',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Apply dormant oil spray to suppress overwintering pests',
      'Monitor for early signs of brown rot and leaf spot',
      'Maintain balanced fertilisation and irrigation',
    ],
  },

  /* ───────── Corn (Maize) ───────── */
  'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot': {
    displayName: 'Gray Leaf Spot',
    crop: 'Corn',
    symptoms: [
      'Rectangular, pale-grey to tan lesions bounded by veins',
      'Lesions may coalesce, causing large areas of blighted tissue',
      'Lower leaves affected first, progressing upward',
    ],
    treatment: [
      'Apply foliar fungicides (strobilurins or triazoles) at tasselling',
      'Rotate away from continuous corn for at least one year',
    ],
    prevention: [
      'Plant resistant hybrids',
      'Practise crop rotation with non-host crops',
      'Reduce surface residue through tillage where appropriate',
    ],
  },

  'Corn_(maize)___Common_rust_': {
    displayName: 'Common Rust',
    crop: 'Corn',
    symptoms: [
      'Small, circular to elongated cinnamon-brown pustules on both leaf surfaces',
      'Pustules may darken to black late in season',
      'Severe infections cause premature leaf senescence',
    ],
    treatment: [
      'Apply foliar fungicide if infection is detected before tasselling',
      'Use triazole or strobilurin-based products',
    ],
    prevention: [
      'Plant rust-resistant hybrids',
      'Adjust planting date to avoid peak spore dispersal periods',
      'Scout fields regularly from V8 stage onward',
    ],
  },

  'Corn_(maize)___Northern_Leaf_Blight': {
    displayName: 'Northern Leaf Blight',
    crop: 'Corn',
    symptoms: [
      'Long, elliptical, greyish-green to tan lesions (2.5–15 cm)',
      'Lesions may have dark borders',
      'Heavy infection causes significant leaf area loss',
    ],
    treatment: [
      'Apply fungicide at tassel or early silk stage in susceptible hybrids',
      'Use products containing pyraclostrobin or propiconazole',
    ],
    prevention: [
      'Select tolerant or resistant hybrids',
      'Rotate crops to reduce inoculum in residue',
      'Till under corn debris after harvest',
    ],
  },

  'Corn_(maize)___healthy': {
    displayName: 'Healthy Corn',
    crop: 'Corn',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Rotate crops annually',
      'Maintain balanced N-P-K fertility programme',
      'Scout regularly for early pest and disease detection',
    ],
  },

  /* ───────── Grape ───────── */
  'Grape___Black_rot': {
    displayName: 'Grape Black Rot',
    crop: 'Grape',
    symptoms: [
      'Circular reddish-brown leaf spots with dark margins',
      'Fruit shrivels into hard, black mummified berries',
      'Tiny black pycnidia visible on mummies',
    ],
    treatment: [
      'Apply myclobutanil or mancozeb from shoot emergence through véraison',
      'Remove and destroy mummified fruit and infected tendrils',
    ],
    prevention: [
      'Improve canopy airflow through proper training and pruning',
      'Remove wild or abandoned grapevines nearby',
      'Begin fungicide programme at 6-inch shoot growth',
    ],
  },

  'Grape___Esca_(Black_Measles)': {
    displayName: 'Esca (Black Measles)',
    crop: 'Grape',
    symptoms: [
      'Interveinal striping or tiger-stripe pattern on leaves',
      'Dark spotting on berries',
      'Internal wood streaking and necrosis',
    ],
    treatment: [
      'No fully effective chemical cure exists',
      'Retrain a healthy shoot below the infected trunk section',
      'Apply wound protectants after pruning',
    ],
    prevention: [
      'Avoid large pruning wounds',
      'Delay pruning until late in dormant season',
      'Use biocontrol agents (e.g., Trichoderma) on pruning wounds',
    ],
  },

  'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)': {
    displayName: 'Grape Leaf Blight (Isariopsis)',
    crop: 'Grape',
    symptoms: [
      'Dark brown to black angular leaf spots',
      'Spots may coalesce leading to extensive leaf blight',
      'Premature defoliation in severe cases',
    ],
    treatment: [
      'Apply copper-based or mancozeb fungicides',
      'Remove severely affected leaves to reduce inoculum',
    ],
    prevention: [
      'Ensure good canopy management (shoot positioning, leaf removal)',
      'Avoid overhead irrigation',
      'Clean up fallen debris at end of season',
    ],
  },

  'Grape___healthy': {
    displayName: 'Healthy Grape',
    crop: 'Grape',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Maintain balanced vine nutrition',
      'Practise dormant-season sanitation pruning',
      'Monitor for early signs of downy and powdery mildew',
    ],
  },

  /* ───────── Orange ───────── */
  'Orange___Haunglongbing_(Citrus_greening)': {
    displayName: 'Citrus Greening (Huanglongbing)',
    crop: 'Orange',
    symptoms: [
      'Asymmetric blotchy mottling of leaves',
      'Lopsided, misshapen, and bitter fruit',
      'Yellow shoots (yellow dragon symptom)',
    ],
    treatment: [
      'No cure exists; remove and destroy infected trees promptly',
      'Apply systemic insecticides (e.g., imidacloprid) to suppress Asian citrus psyllid vector',
      'Nutritional therapy (enhanced foliar micro-nutrients) may prolong tree productivity',
    ],
    prevention: [
      'Use certified disease-free nursery stock',
      'Control Asian citrus psyllid populations with integrated pest management',
      'Establish buffer zones and monitor surrounding groves',
    ],
  },

  /* ───────── Peach ───────── */
  'Peach___Bacterial_spot': {
    displayName: 'Peach Bacterial Spot',
    crop: 'Peach',
    symptoms: [
      'Small, dark, water-soaked lesions on leaves',
      'Lesions may tear out, giving a "shot-hole" appearance',
      'Sunken, cracked spots on fruit',
    ],
    treatment: [
      'Apply copper sprays at leaf fall and before bud break',
      'Oxytetracycline (antibiotic) sprays during bloom in severe cases',
    ],
    prevention: [
      'Plant resistant cultivars (e.g., Contender, Intrepid)',
      'Avoid overhead irrigation to keep foliage dry',
      'Provide windbreaks to reduce rain-splash dispersal',
    ],
  },

  'Peach___healthy': {
    displayName: 'Healthy Peach',
    crop: 'Peach',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Apply dormant copper spray before bud swell',
      'Thin fruit to reduce disease pressure and improve size',
      'Monitor for peach leaf curl in early spring',
    ],
  },

  /* ───────── Pepper (Bell) ───────── */
  'Pepper,_bell___Bacterial_spot': {
    displayName: 'Pepper Bacterial Spot',
    crop: 'Pepper',
    symptoms: [
      'Small, dark, water-soaked spots on leaves and fruit',
      'Spots may coalesce, causing extensive defoliation',
      'Raised, scab-like lesions on fruit',
    ],
    treatment: [
      'Apply copper-based bactericides weekly during wet weather',
      'Remove and destroy severely infected plants',
    ],
    prevention: [
      'Use certified pathogen-free seed and transplants',
      'Rotate peppers with non-solanaceous crops for 2–3 years',
      'Avoid working in fields when foliage is wet',
    ],
  },

  'Pepper,_bell___healthy': {
    displayName: 'Healthy Pepper',
    crop: 'Pepper',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Maintain consistent watering to avoid blossom-end rot',
      'Use mulch to regulate soil temperature and moisture',
      'Scout for aphids and whiteflies regularly',
    ],
  },

  /* ───────── Potato ───────── */
  'Potato___Early_blight': {
    displayName: 'Potato Early Blight',
    crop: 'Potato',
    symptoms: [
      'Dark brown, concentric-ringed ("target") spots on lower leaves',
      'Yellowing and premature defoliation',
      'Dark, sunken lesions on tubers',
    ],
    treatment: [
      'Apply chlorothalonil or mancozeb at first symptoms',
      'Alternate with azoxystrobin or difenoconazole to manage resistance',
    ],
    prevention: [
      'Use certified disease-free seed potatoes',
      'Practise 3-year crop rotation away from solanaceous crops',
      'Hill potatoes adequately to protect tubers',
    ],
  },

  'Potato___Late_blight': {
    displayName: 'Potato Late Blight',
    crop: 'Potato',
    symptoms: [
      'Water-soaked, dark-green to brown lesions on leaves',
      'White fungal growth on leaf undersides in humid conditions',
      'Rapid plant collapse ("melting") in wet weather',
    ],
    treatment: [
      'Apply systemic fungicides (e.g., metalaxyl + mancozeb) immediately',
      'Destroy infected plant material promptly (do not compost)',
    ],
    prevention: [
      'Plant resistant varieties where available',
      'Avoid overhead irrigation; water early in the day',
      'Monitor weather forecasts and apply preventive fungicide before rain events',
    ],
  },

  'Potato___healthy': {
    displayName: 'Healthy Potato',
    crop: 'Potato',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Hill soil around stems to protect developing tubers',
      'Rotate with non-solanaceous crops',
      'Inspect seed potatoes before planting',
    ],
  },

  /* ───────── Raspberry ───────── */
  'Raspberry___healthy': {
    displayName: 'Healthy Raspberry',
    crop: 'Raspberry',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Remove spent floricanes after harvest',
      'Thin primocanes to improve air circulation',
      'Scout for signs of cane blight and spur blight',
    ],
  },

  /* ───────── Soybean ───────── */
  'Soybean___healthy': {
    displayName: 'Healthy Soybean',
    crop: 'Soybean',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Rotate with corn or small grains',
      'Test soil and inoculate seed with Bradyrhizobium where needed',
      'Scout for soybean cyst nematode and sudden death syndrome',
    ],
  },

  /* ───────── Squash ───────── */
  'Squash___Powdery_mildew': {
    displayName: 'Squash Powdery Mildew',
    crop: 'Squash',
    symptoms: [
      'White, powdery spots on upper leaf surfaces',
      'Spots spread to cover entire leaves',
      'Leaves yellow and dry out prematurely',
    ],
    treatment: [
      'Apply sulphur or potassium bicarbonate sprays at first sign',
      'Use trifloxystrobin or myclobutanil for heavy infections',
    ],
    prevention: [
      'Plant mildew-resistant varieties (e.g., PM-resistant zucchini)',
      'Space plants widely for good airflow',
      'Avoid late-evening overhead watering',
    ],
  },

  /* ───────── Strawberry ───────── */
  'Strawberry___Leaf_scorch': {
    displayName: 'Strawberry Leaf Scorch',
    crop: 'Strawberry',
    symptoms: [
      'Small, irregular purplish spots on upper leaf surfaces',
      'Spots enlarge and centres dry out, giving a scorched look',
      'Severe infection causes defoliation and weakened plants',
    ],
    treatment: [
      'Apply captan or thiram fungicide during bloom',
      'Mow and remove foliage after harvest in June-bearing types',
    ],
    prevention: [
      'Use resistant cultivars (e.g., Earliglow, Allstar)',
      'Ensure adequate plant spacing for air circulation',
      'Avoid overhead irrigation during fruiting',
    ],
  },

  'Strawberry___healthy': {
    displayName: 'Healthy Strawberry',
    crop: 'Strawberry',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Renovate beds annually for June-bearing types',
      'Mulch with straw to suppress weeds and keep fruit clean',
      'Scout for spider mites and tarnished plant bugs',
    ],
  },

  /* ───────── Tomato ───────── */
  'Tomato___Bacterial_spot': {
    displayName: 'Tomato Bacterial Spot',
    crop: 'Tomato',
    symptoms: [
      'Small, water-soaked, dark spots on leaves and fruit',
      'Spots may have yellow halos',
      'Severely infected leaves drop prematurely',
    ],
    treatment: [
      'Apply copper hydroxide + mancozeb tank mix',
      'Remove and destroy heavily infected plants',
    ],
    prevention: [
      'Use pathogen-free seed (hot-water treated)',
      'Rotate with non-solanaceous crops for 2+ years',
      'Stake and mulch to reduce soil splash',
    ],
  },

  'Tomato___Early_blight': {
    displayName: 'Tomato Early Blight',
    crop: 'Tomato',
    symptoms: [
      'Dark, concentric-ringed target spots on lower leaves',
      'Yellowing tissue surrounding lesions',
      'Stem cankers near soil line in seedlings (collar rot)',
    ],
    treatment: [
      'Apply chlorothalonil or mancozeb on a 7–10 day schedule',
      'Switch to azoxystrobin or difenoconazole if resistance is suspected',
    ],
    prevention: [
      'Mulch around plants to prevent soil-splash infection',
      'Remove lower leaves that contact the soil',
      'Practise 3 year rotation away from solanaceous crops',
    ],
  },

  'Tomato___Late_blight': {
    displayName: 'Tomato Late Blight',
    crop: 'Tomato',
    symptoms: [
      'Large, irregularly shaped water-soaked lesions on leaves',
      'White, downy fungal growth on leaf undersides',
      'Firm, dark brown lesions on fruit',
    ],
    treatment: [
      'Apply chlorothalonil or fixed-copper preventively',
      'Use systemic products (e.g., cymoxanil + mancozeb) curatively',
      'Remove and bag infected plants immediately to limit spread',
    ],
    prevention: [
      'Avoid overhead watering; use drip irrigation',
      'Destroy volunteer potato and tomato plants',
      'Monitor late-blight forecasting tools (e.g., USAblight.org)',
    ],
  },

  'Tomato___Leaf_Mold': {
    displayName: 'Tomato Leaf Mold',
    crop: 'Tomato',
    symptoms: [
      'Pale green to yellowish spots on upper leaf surfaces',
      'Olive-green to greyish-purple velvety growth on leaf undersides',
      'Affected leaves curl and wither',
    ],
    treatment: [
      'Apply chlorothalonil or copper-based fungicides',
      'Improve greenhouse ventilation (common in protected culture)',
    ],
    prevention: [
      'Increase plant spacing and prune suckers for airflow',
      'Keep relative humidity below 85 % in greenhouses',
      'Use resistant varieties (carrying Cf genes)',
    ],
  },

  'Tomato___Septoria_leaf_spot': {
    displayName: 'Septoria Leaf Spot',
    crop: 'Tomato',
    symptoms: [
      'Numerous small, circular spots with dark borders and grey centres',
      'Tiny black pycnidia visible in spot centres',
      'Starts on lower leaves and progresses upward',
    ],
    treatment: [
      'Apply mancozeb or chlorothalonil at first symptoms',
      'Remove and destroy infected lower leaves',
    ],
    prevention: [
      'Use drip irrigation to keep foliage dry',
      'Mulch to reduce soil-splash dispersal',
      'Rotate crops and remove solanaceous weed hosts',
    ],
  },

  'Tomato___Spider_mites Two-spotted_spider_mite': {
    displayName: 'Two-Spotted Spider Mite',
    crop: 'Tomato',
    symptoms: [
      'Fine stippling or bronzing on leaves',
      'Tiny webbing on leaf undersides',
      'Severe infestations cause leaf drying and drop',
    ],
    treatment: [
      'Apply miticides such as abamectin or spiromesifen',
      'Use horticultural oil or insecticidal soap for organic management',
      'Release predatory mites (Phytoseiulus persimilis) for biological control',
    ],
    prevention: [
      'Avoid excessive nitrogen and water stress',
      'Monitor undersides of leaves weekly from mid-season onward',
      'Maintain beneficial insect habitat near fields',
    ],
  },

  'Tomato___Target_Spot': {
    displayName: 'Tomato Target Spot',
    crop: 'Tomato',
    symptoms: [
      'Small, dark brown spots with concentric rings on leaves',
      'Spots may also appear on stems and fruit',
      'Premature defoliation in lower canopy',
    ],
    treatment: [
      'Apply chlorothalonil or azoxystrobin-based fungicides',
      'Remove heavily infected lower leaves',
    ],
    prevention: [
      'Practise crop rotation with non-solanaceous crops',
      'Stake plants and prune lower branches for air movement',
      'Avoid overhead irrigation',
    ],
  },

  'Tomato___Tomato_Yellow_Leaf_Curl_Virus': {
    displayName: 'Tomato Yellow Leaf Curl Virus (TYLCV)',
    crop: 'Tomato',
    symptoms: [
      'Severe upward curling and cupping of leaves',
      'Yellowing of leaf margins',
      'Stunted, bushy growth with reduced fruit set',
    ],
    treatment: [
      'No chemical cure; remove and destroy infected plants',
      'Control whitefly vector (Bemisia tabaci) with imidacloprid or cyantraniliprole',
    ],
    prevention: [
      'Use TYLCV-resistant or tolerant cultivars',
      'Install insect-proof netting in nurseries and greenhouses',
      'Use reflective silver mulch to repel whiteflies',
    ],
  },

  'Tomato___Tomato_mosaic_virus': {
    displayName: 'Tomato Mosaic Virus (ToMV)',
    crop: 'Tomato',
    symptoms: [
      'Light and dark green mosaic mottling on leaves',
      'Leaf distortion and fern-like leaf shape',
      'Uneven fruit ripening with internal browning',
    ],
    treatment: [
      'No chemical cure exists; remove and destroy infected plants',
      'Disinfect tools and hands with 10 % bleach or skim milk between plants',
    ],
    prevention: [
      'Use ToMV-resistant cultivars (carrying Tm-2² gene)',
      'Avoid tobacco product use near plants (cross-infection risk)',
      'Start with certified virus-free seed',
    ],
  },

  'Tomato___healthy': {
    displayName: 'Healthy Tomato',
    crop: 'Tomato',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Rotate crops every 2–3 years',
      'Stake and prune for good airflow',
      'Monitor regularly for early pest and disease signs',
    ],
  },
};

export default DISEASE_TREATMENTS;
