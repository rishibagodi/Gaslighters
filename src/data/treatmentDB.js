/**
 * Disease Treatment Database
 * ──────────────────────────
 * Comprehensive treatment, prevention, and severity data for all
 * 65 disease classes (38 PlantVillage + 27 additional).
 *
 * Each entry:
 *   displayName  – Human-readable disease name
 *   crop         – Affected crop
 *   severity     – Typical disease severity: None | Low | Moderate | High | Critical
 *   symptoms     – Observable symptoms (array)
 *   treatment    – Curative / management actions (array)
 *   prevention   – Preventive best-practices (array)
 */

export const TREATMENT_DB = {

  /* ═══════════════════════════════════════════════════════
     PlantVillage 38 Classes (indices 0–37)
     ═══════════════════════════════════════════════════════ */

  /* ───────── Apple ───────── */

  'Apple___Apple_scab': {
    displayName: 'Apple Scab',
    crop: 'Apple',
    severity: 'Moderate',
    symptoms: [
      'Olive-green to dark brown lesions on leaves',
      'Velvety or scabby spots on fruit surface',
      'Premature leaf drop',
    ],
    treatment: [
      'Apply captan or myclobutanil fungicide at early bloom',
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
    severity: 'High',
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
    severity: 'Moderate',
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
    severity: 'None',
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
    severity: 'None',
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
    severity: 'Moderate',
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
    severity: 'None',
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
    severity: 'High',
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
    severity: 'Moderate',
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
    severity: 'High',
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
    severity: 'None',
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
    severity: 'High',
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
    severity: 'Critical',
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
    severity: 'Moderate',
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
    severity: 'None',
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
    severity: 'Critical',
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
    severity: 'Moderate',
    symptoms: [
      'Small, dark, water-soaked lesions on leaves',
      'Lesions may tear out, giving a "shot-hole" appearance',
      'Sunken, cracked spots on fruit',
    ],
    treatment: [
      'Apply copper sprays at leaf fall and before bud break',
      'Oxytetracycline sprays during bloom in severe cases',
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
    severity: 'None',
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
    severity: 'High',
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
    severity: 'None',
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
    severity: 'Moderate',
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
    severity: 'Critical',
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
    severity: 'None',
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
    severity: 'None',
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
    severity: 'None',
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
    severity: 'Moderate',
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
    severity: 'Moderate',
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
    severity: 'None',
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
    severity: 'High',
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
    severity: 'Moderate',
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
      'Practise 3-year rotation away from solanaceous crops',
    ],
  },

  'Tomato___Late_blight': {
    displayName: 'Tomato Late Blight',
    crop: 'Tomato',
    severity: 'Critical',
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
    severity: 'Moderate',
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
    severity: 'Moderate',
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
    severity: 'Moderate',
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
    severity: 'Moderate',
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
    severity: 'Critical',
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
    severity: 'High',
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
    severity: 'None',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Rotate crops every 2–3 years',
      'Stake and prune for good airflow',
      'Monitor regularly for early pest and disease signs',
    ],
  },

  /* ═══════════════════════════════════════════════════════
     Additional Crops (indices 38–64)
     ═══════════════════════════════════════════════════════ */

  /* ───────── Rice ───────── */

  'Rice___Bacterial_Leaf_Blight': {
    displayName: 'Bacterial Leaf Blight',
    crop: 'Rice',
    severity: 'High',
    symptoms: [
      'Water-soaked to yellowish stripes on leaf blades starting from tips',
      'Leaves turn greyish-white and dry out (kresek phase in seedlings)',
      'Milky or opaque dew drops on young lesions in the morning',
    ],
    treatment: [
      'Apply copper-based bactericides as foliar spray',
      'Drain standing water from heavily infected fields',
      'Apply balanced potassium fertiliser to strengthen plant defences',
    ],
    prevention: [
      'Use BLB-resistant varieties (e.g., IR64, IRBB60)',
      'Avoid excessive nitrogen fertilisation',
      'Practise clean culture – remove crop residues and weed hosts',
    ],
  },

  'Rice___Brown_Spot': {
    displayName: 'Brown Spot',
    crop: 'Rice',
    severity: 'Moderate',
    symptoms: [
      'Small, circular to oval brown spots with grey centres on leaves',
      'Spots may also occur on leaf sheaths, glumes, and grains',
      'Seedlings may show dark brown lesions ("seedling blight")',
    ],
    treatment: [
      'Apply propiconazole or carbendazim fungicide at boot stage',
      'Foliar application of potassium and zinc to correct deficiency',
    ],
    prevention: [
      'Use certified healthy seed treated with fungicide (e.g., thiram)',
      'Correct soil nutrient deficiencies (especially potassium and silicon)',
      'Maintain proper spacing to allow airflow',
    ],
  },

  'Rice___Healthy': {
    displayName: 'Healthy Rice',
    crop: 'Rice',
    severity: 'None',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Follow recommended planting density and fertilisation schedule',
      'Practise alternate wetting and drying (AWD) irrigation',
      'Scout regularly at tillering and booting stages',
    ],
  },

  'Rice___Leaf_Blast': {
    displayName: 'Leaf Blast',
    crop: 'Rice',
    severity: 'Critical',
    symptoms: [
      'Diamond-shaped or spindle-shaped lesions with grey centres and brown margins',
      'Lesions on leaf nodes can kill entire tillers (node blast)',
      'Neck blast causes panicle breakage and empty grains',
    ],
    treatment: [
      'Apply tricyclazole or isoprothiolane fungicide at first symptom',
      'Follow up with a second spray at heading stage',
      'Drain fields and avoid water stress during critical stages',
    ],
    prevention: [
      'Plant blast-resistant varieties adapted to the region',
      'Avoid excess nitrogen – split applications recommended',
      'Maintain adequate silicon nutrition through straw recycling or silicate fertiliser',
    ],
  },

  'Rice___Leaf_Scald': {
    displayName: 'Leaf Scald',
    crop: 'Rice',
    severity: 'Moderate',
    symptoms: [
      'Oblong, light-brown lesions with dark brown margins starting from leaf tips',
      'Zonate bands of alternating light and dark brown',
      'Severely affected leaves appear scorched and dry',
    ],
    treatment: [
      'Apply carbendazim or azoxystrobin at early infection',
      'Remove heavily infected leaves to reduce spore load',
    ],
    prevention: [
      'Use tolerant varieties where available',
      'Avoid dense planting that creates humid micro-climate',
      'Ensure balanced fertilisation – avoid excess N',
    ],
  },

  'Rice___Sheath_Blight': {
    displayName: 'Sheath Blight',
    crop: 'Rice',
    severity: 'High',
    symptoms: [
      'Oval, greenish-grey water-soaked lesions on leaf sheaths near waterline',
      'Lesions enlarge with irregular grey-white centres and brown borders',
      'In severe cases, lesions reach flag leaf causing lodging',
    ],
    treatment: [
      'Apply validamycin or hexaconazole at mid-tillering',
      'Reduce standing water depth during tillering stage',
    ],
    prevention: [
      'Use moderate seeding rate – avoid thick stands',
      'Destroy sclerotia by deep ploughing after harvest',
      'Apply potash and silicon to improve culm strength',
    ],
  },

  /* ───────── Sunflower ───────── */

  'Sunflower___Downy_Mildew': {
    displayName: 'Sunflower Downy Mildew',
    crop: 'Sunflower',
    severity: 'High',
    symptoms: [
      'Chlorotic, stunted seedlings with thickened stems',
      'White, cottony fungal growth on leaf undersides',
      'Systemic infection causes dwarfed, malformed heads',
    ],
    treatment: [
      'Apply metalaxyl or mefenoxam as seed treatment or foliar spray',
      'Remove and destroy systemically infected plants',
    ],
    prevention: [
      'Use metalaxyl-treated seed',
      'Plant downy-mildew-resistant hybrids',
      'Practise 4+ year crop rotation to reduce soil inoculum',
    ],
  },

  'Sunflower___Healthy': {
    displayName: 'Healthy Sunflower',
    crop: 'Sunflower',
    severity: 'None',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Rotate with cereals or grasses (4-year minimum)',
      'Scout for head moth and stem weevil at flowering',
      'Maintain balanced boron and nitrogen nutrition',
    ],
  },

  'Sunflower___Gray_Mold': {
    displayName: 'Gray Mold (Botrytis Head Rot)',
    crop: 'Sunflower',
    severity: 'High',
    symptoms: [
      'Soft, water-soaked rot on the back of the head',
      'Dense grey, fuzzy Botrytis sporulation on infected tissue',
      'Seeds become shrivelled and discoloured',
    ],
    treatment: [
      'Apply iprodione or boscalid fungicide during mid-bloom',
      'Harvest promptly when mature to limit head exposure',
    ],
    prevention: [
      'Use hybrids with upright or semi-drooping head posture',
      'Avoid excessive irrigation during flowering',
      'Ensure adequate row spacing for air circulation',
    ],
  },

  'Sunflower___Leaf_Scars': {
    displayName: 'Sunflower Leaf Scars (Alternaria)',
    crop: 'Sunflower',
    severity: 'Moderate',
    symptoms: [
      'Dark brown to black circular or angular lesions on leaves',
      'Concentric rings within lesions (target-spot appearance)',
      'Premature defoliation of lower leaves',
    ],
    treatment: [
      'Apply chlorothalonil or azoxystrobin at first sign of lesions',
      'Remove severely blighted lower leaves to reduce inoculum',
    ],
    prevention: [
      'Rotate with non-host crops for at least 2 years',
      'Manage crop residue through tillage or composting',
      'Avoid overhead irrigation to keep foliage dry',
    ],
  },

  /* ───────── Sugarcane ───────── */

  'Sugarcane___Bacterial_Blight': {
    displayName: 'Sugarcane Bacterial Blight',
    crop: 'Sugarcane',
    severity: 'High',
    symptoms: [
      'White to cream pencil-line stripes along leaf veins',
      'Stripes may exude bacterial ooze in humid conditions',
      'Affected leaves show necrosis and tip drying',
    ],
    treatment: [
      'No effective chemical control; rogue out infected stools',
      'Soak seed cane in hot water (50 °C for 2 hours) before planting',
    ],
    prevention: [
      'Use certified disease-free seed cane',
      'Plant resistant or tolerant varieties',
      'Disinfect cutting knives between seed-cane lots with 1 % bleach',
    ],
  },

  'Sugarcane___Healthy': {
    displayName: 'Healthy Sugarcane',
    crop: 'Sugarcane',
    severity: 'None',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Practise hot-water treatment of seed cane routinely',
      'De-trash at 5–6 months to improve light penetration',
      'Monitor for borer damage at internode level',
    ],
  },

  'Sugarcane___Red_Rot': {
    displayName: 'Sugarcane Red Rot',
    crop: 'Sugarcane',
    severity: 'Critical',
    symptoms: [
      'Reddening of internal stalk tissue interspersed with white patches',
      'Alcoholic or sour odour from split stalks',
      'Premature drying of the crown (top withering)',
    ],
    treatment: [
      'No effective field-level chemical cure; remove and burn infected canes',
      'Treat seed cane with carbendazim (0.1 %) soak before planting',
    ],
    prevention: [
      'Plant red-rot-resistant varieties (consult regional recommendations)',
      'Avoid ratooning susceptible varieties more than once',
      'Ensure proper drainage to prevent waterlogging',
    ],
  },

  /* ───────── Cotton ───────── */

  'Cotton___Bacterial_Blight': {
    displayName: 'Cotton Bacterial Blight (Angular Leaf Spot)',
    crop: 'Cotton',
    severity: 'High',
    symptoms: [
      'Small, angular, water-soaked lesions on leaves bounded by veins',
      'Lesions turn brown to black and may shred in wind',
      'Black cankers ("black arm") on stems and branches',
    ],
    treatment: [
      'Apply copper oxychloride sprays at first symptom',
      'Remove and destroy heavily infected plant debris after harvest',
    ],
    prevention: [
      'Use acid-delinted, fungicide-treated seed',
      'Plant resistant or tolerant cultivars',
      'Practise deep ploughing to bury infected residues',
    ],
  },

  'Cotton___Curl_Virus': {
    displayName: 'Cotton Leaf Curl Virus (CLCuV)',
    crop: 'Cotton',
    severity: 'Critical',
    symptoms: [
      'Upward or downward curling and cupping of leaves',
      'Thickening of leaf veins with enations (outgrowths) on undersides',
      'Stunted growth and reduced boll formation',
    ],
    treatment: [
      'No chemical cure for the virus; rogue out infected plants early',
      'Control whitefly vector (Bemisia tabaci) with neonicotinoids or spiromesifen',
    ],
    prevention: [
      'Plant CLCuV-resistant Bt-cotton varieties (consult local advisory)',
      'Install yellow sticky traps for early whitefly detection',
      'Avoid late planting which coincides with peak whitefly populations',
    ],
  },

  'Cotton___Fusarium_Wilt': {
    displayName: 'Cotton Fusarium Wilt',
    crop: 'Cotton',
    severity: 'High',
    symptoms: [
      'Yellowing and wilting of leaves, often one-sided on the plant',
      'Dark brown discolouration of vascular tissue visible in split stems',
      'Plants may die before boll maturity',
    ],
    treatment: [
      'No effective chemical cure once established',
      'Remove and destroy wilted plants to reduce soil inoculum',
      'Apply Trichoderma viride as a soil bio-amendment',
    ],
    prevention: [
      'Plant wilt-resistant varieties',
      'Rotate with non-host crops (cereals, grasses) for 3–5 years',
      'Avoid acidic, poorly drained soils – amend pH above 6.0',
    ],
  },

  'Cotton___Healthy': {
    displayName: 'Healthy Cotton',
    crop: 'Cotton',
    severity: 'None',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Maintain balanced NPK nutrition with split nitrogen doses',
      'Scout weekly for bollworm, aphid, and whitefly',
      'Practise integrated pest management to preserve natural enemies',
    ],
  },

  /* ───────── Wheat ───────── */

  'Wheat___Crown_And_Root_Rot': {
    displayName: 'Crown and Root Rot',
    crop: 'Wheat',
    severity: 'High',
    symptoms: [
      'Brown to dark brown discolouration of crown and sub-crown internodes',
      'Whiteheads – premature bleaching of heads before maturity',
      'Reduced tillering and stunted growth',
    ],
    treatment: [
      'Seed treatment with fludioxonil + mefenoxam before planting',
      'Apply foliar fungicide (azoxystrobin) at jointing if infection is detected',
    ],
    prevention: [
      'Rotate with broadleaf crops (pulses, canola) for at least 2 years',
      'Avoid deep seeding – plant at optimal depth (3–5 cm)',
      'Reduce crop residue through tillage to lower Fusarium inoculum',
    ],
  },

  'Wheat___Healthy': {
    displayName: 'Healthy Wheat',
    crop: 'Wheat',
    severity: 'None',
    symptoms: [],
    treatment: ['No treatment needed – plant appears healthy.'],
    prevention: [
      'Apply nitrogen in split doses (basal + top-dress at tillering)',
      'Scout for aphids carrying barley yellow dwarf virus',
      'Rotate with legumes to improve soil health',
    ],
  },

  'Wheat___Leaf_Rust': {
    displayName: 'Wheat Leaf Rust (Brown Rust)',
    crop: 'Wheat',
    severity: 'High',
    symptoms: [
      'Small, circular, orange-brown uredinia (pustules) on upper leaf surfaces',
      'Pustules scattered randomly (not in stripes)',
      'Severe infections reduce grain fill and test weight',
    ],
    treatment: [
      'Apply propiconazole or tebuconazole at flag-leaf stage',
      'A single well-timed application at first pustule gives best ROI',
    ],
    prevention: [
      'Plant varieties carrying multiple Lr resistance genes',
      'Monitor regional rust forecasts and plant early if recommended',
      'Destroy volunteer wheat and wild grass hosts near fields',
    ],
  },

  'Wheat___Loose_Smut': {
    displayName: 'Wheat Loose Smut',
    crop: 'Wheat',
    severity: 'Moderate',
    symptoms: [
      'Entire head replaced by a mass of dark, powdery spores',
      'Spores blow away leaving bare rachis',
      'Infected heads emerge slightly earlier than healthy ones',
    ],
    treatment: [
      'Seed treatment with carboxin (Vitavax) or tebuconazole before planting',
      'No effective post-emergence treatment – prevention is key',
    ],
    prevention: [
      'Use certified smut-free seed',
      'Treat all farm-saved seed with systemic fungicide',
      'Rogue out smutted heads before spore release if detected early',
    ],
  },

  /* ───────── Onion ───────── */

  'Onion___Botrytis_Blight': {
    displayName: 'Onion Botrytis Leaf Blight',
    crop: 'Onion',
    severity: 'Moderate',
    symptoms: [
      'Small, whitish, oval lesions (3–5 mm) with light-green halos on leaves',
      'Lesions may coalesce and girdle leaves causing tip dieback',
      'Grey fungal sporulation on dead tissue in humid weather',
    ],
    treatment: [
      'Apply iprodione, boscalid, or fluazinam fungicide on a 7–10 day schedule',
      'Remove severely blighted leaves to lower inoculum',
    ],
    prevention: [
      'Avoid excessive nitrogen that promotes lush, susceptible foliage',
      'Use drip irrigation to keep leaves dry',
      'Ensure adequate row spacing for ventilation',
    ],
  },

  'Onion___Botrytis_Neck_Rot': {
    displayName: 'Botrytis Neck Rot',
    crop: 'Onion',
    severity: 'High',
    symptoms: [
      'Soft, watery rot of neck area in stored onions',
      'Grey, woolly Botrytis mycelium between bulb scales',
      'Bulb eventually becomes dry and mummified',
    ],
    treatment: [
      'No effective post-harvest chemical cure',
      'Cure onions at 25–30 °C with good ventilation for 2–4 weeks before storage',
      'Sort and remove soft-necked bulbs at harvest',
    ],
    prevention: [
      'Field-spray iprodione or fludioxonil at first leaf dieback',
      'Avoid topping or damaging necks during harvest',
      'Store at 0–2 °C with 65–70 % relative humidity',
    ],
  },

  'Onion___Purple_Blotch': {
    displayName: 'Onion Purple Blotch (Alternaria porri)',
    crop: 'Onion',
    severity: 'High',
    symptoms: [
      'Large, elliptical, purplish-brown lesions with concentric rings on leaves',
      'Lesions may girdle leaves and cause tip dieback',
      'Infected bulbs develop a yellow to wine-red discolouration',
    ],
    treatment: [
      'Apply mancozeb or chlorothalonil at first symptom',
      'Rotate with tebuconazole or difenoconazole for resistance management',
    ],
    prevention: [
      'Practise 3-year rotation with non-allium crops',
      'Avoid overhead irrigation – use furrow or drip systems',
      'Apply balanced fertilisation (especially micro-nutrients like zinc)',
    ],
  },

  'Onion___Fusarium_Basal_Rot': {
    displayName: 'Fusarium Basal Rot',
    crop: 'Onion',
    severity: 'High',
    symptoms: [
      'Yellowing and dieback of older (outer) leaves progressing inward',
      'White fungal mycelium and pink discolouration on basal plate',
      'Roots are rotted and bulb base is soft and watery',
    ],
    treatment: [
      'No effective chemical cure in the field; rogue infected plants',
      'Dip transplant roots in carbendazim (0.2 %) before planting',
    ],
    prevention: [
      'Use tolerant or resistant varieties',
      'Rotate with non-allium crops for 4+ years',
      'Solarise soil in hot-summer regions to reduce Fusarium propagules',
    ],
  },

  'Onion___Translucent_Scale': {
    displayName: 'Translucent Scale',
    crop: 'Onion',
    severity: 'Moderate',
    symptoms: [
      'Individual bulb scales appear glassy or water-soaked',
      'Affected scales are soft and may exude liquid when squeezed',
      'No fungal growth present; condition is physiological or early bacterial',
    ],
    treatment: [
      'Improve curing conditions – increase air temperature and ventilation at harvest',
      'Apply calcium chloride foliar spray during bulbing to strengthen tissue',
    ],
    prevention: [
      'Avoid late irrigation near harvest that promotes watery scales',
      'Harvest at proper maturity (50–75 % top fall)',
      'Cure immediately at 25–30 °C with forced air for 2 weeks before cold storage',
    ],
  },

  'Onion___Downy_Mildew': {
    displayName: 'Onion Downy Mildew',
    crop: 'Onion',
    severity: 'High',
    symptoms: [
      'Pale green to yellowish elongated patches on leaves',
      'Greyish-violet fuzzy sporulation on leaf surface in moist mornings',
      'Leaf tips collapse and curl downward',
    ],
    treatment: [
      'Apply metalaxyl + mancozeb or fosetyl-aluminium at first symptom',
      'Repeat at 10–14 day intervals during wet weather',
    ],
    prevention: [
      'Use tolerant cultivars and avoid planting in low-lying, fog-prone fields',
      'Ensure wide row spacing and north–south row orientation for airflow',
      'Remove or deep-plough crop debris after harvest to reduce oospore survival',
    ],
  },
};

export default TREATMENT_DB;
