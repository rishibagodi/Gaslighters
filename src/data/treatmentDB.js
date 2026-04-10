/**
 * Treatment Database
 * ──────────────────
 * Complete entries for all 38 PlantVillage dataset classes.
 * Keys match class_indices.json labels exactly.
 */

export const TREATMENT_DB = {
    "Apple___Apple_scab": {
        displayName: "Apple Scab",
        crop: "Apple",
        symptoms: ["Olive-green or brown spots on leaves", "Scabby lesions on fruit", "Premature leaf drop", "Distorted fruit"],
        treatment: [
            "Apply fungicides containing myclobutanil or captan at bud break.",
            "Remove and destroy infected leaves and fruit immediately.",
            "Spray with copper-based fungicide every 7–10 days during wet weather."
        ],
        prevention: [
            "Plant scab-resistant apple varieties.",
            "Prune trees to improve air circulation.",
            "Rake and destroy fallen leaves in autumn.",
            "Avoid overhead irrigation."
        ]
    },

    "Apple___Black_rot": {
        displayName: "Apple Black Rot",
        crop: "Apple",
        symptoms: ["Brown rotting lesions on fruit", "Purple-bordered leaf spots", "Cankers on branches", "Mummified fruit"],
        treatment: [
            "Apply captan or thiophanate-methyl fungicide.",
            "Remove all mummified fruit from tree and ground.",
            "Prune and destroy infected branches at least 15cm below visible infection."
        ],
        prevention: [
            "Maintain tree vigor through proper fertilization.",
            "Remove dead wood regularly.",
            "Ensure good air circulation through pruning.",
            "Control fire blight and other wounds that allow entry."
        ]
    },

    "Apple___Cedar_apple_rust": {
        displayName: "Cedar Apple Rust",
        crop: "Apple",
        symptoms: ["Bright orange-yellow spots on upper leaf surface", "Tube-like structures on leaf undersides", "Distorted fruit with orange lesions"],
        treatment: [
            "Apply myclobutanil or propiconazole fungicide starting at pink bud stage.",
            "Spray every 7–10 days during spring when cedar trees release spores.",
            "Remove nearby cedar or juniper trees if possible."
        ],
        prevention: [
            "Plant rust-resistant apple varieties.",
            "Remove galls from cedar trees in late winter before they release spores.",
            "Maintain distance between apple and cedar/juniper plantings."
        ]
    },

    "Apple___healthy": {
        displayName: "Healthy Apple",
        crop: "Apple",
        symptoms: ["No disease symptoms detected"],
        treatment: ["No treatment required. Plant appears healthy."],
        prevention: [
            "Continue regular monitoring for early disease detection.",
            "Maintain proper pruning and air circulation.",
            "Follow balanced fertilization schedule.",
            "Apply preventive fungicide spray during high-risk periods."
        ]
    },

    "Blueberry___healthy": {
        displayName: "Healthy Blueberry",
        crop: "Blueberry",
        symptoms: ["No disease symptoms detected"],
        treatment: ["No treatment required. Plant appears healthy."],
        prevention: [
            "Maintain soil pH between 4.5 and 5.5.",
            "Monitor regularly for mummy berry and botrytis.",
            "Ensure good drainage and air circulation.",
            "Mulch with pine bark to maintain acidity."
        ]
    },

    "Cherry_(including_sour)___Powdery_mildew": {
        displayName: "Cherry Powdery Mildew",
        crop: "Cherry",
        symptoms: ["White powdery coating on leaves", "Distorted and curled young leaves", "Stunted shoot growth", "Premature defoliation"],
        treatment: [
            "Apply sulfur-based or potassium bicarbonate fungicide.",
            "Spray with neem oil every 7 days until symptoms disappear.",
            "Apply myclobutanil for severe infections."
        ],
        prevention: [
            "Prune to improve air circulation within the canopy.",
            "Avoid excessive nitrogen fertilization.",
            "Plant in full sun locations.",
            "Choose mildew-resistant varieties where available."
        ]
    },

    "Cherry_(including_sour)___healthy": {
        displayName: "Healthy Cherry",
        crop: "Cherry",
        symptoms: ["No disease symptoms detected"],
        treatment: ["No treatment required. Plant appears healthy."],
        prevention: [
            "Monitor for brown rot during fruit development.",
            "Maintain good air circulation through annual pruning.",
            "Avoid wetting foliage during irrigation.",
            "Remove fallen fruit promptly."
        ]
    },

    "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": {
        displayName: "Corn Gray Leaf Spot",
        crop: "Corn (Maize)",
        symptoms: ["Rectangular gray-tan lesions parallel to leaf veins", "Lesions with yellow borders", "Premature drying of leaves", "Reduced grain fill"],
        treatment: [
            "Apply strobilurin or triazole fungicide at early tasseling stage.",
            "Use foliar fungicide spray if disease pressure is high.",
            "Remove severely infected plant debris after harvest."
        ],
        prevention: [
            "Plant resistant hybrid varieties.",
            "Rotate crops — avoid planting corn after corn.",
            "Till crop residue to reduce inoculum.",
            "Ensure adequate plant spacing for air flow."
        ]
    },

    "Corn_(maize)___Common_rust_": {
        displayName: "Corn Common Rust",
        crop: "Corn (Maize)",
        symptoms: ["Small cinnamon-brown pustules on both leaf surfaces", "Pustules turn dark brown-black as they mature", "Yellow halo around pustule clusters", "Severe infection causes premature leaf death"],
        treatment: [
            "Apply triazole fungicide (propiconazole or tebuconazole) at early rust detection.",
            "Spray every 14 days if conditions favor disease spread.",
            "Focus application on upper canopy leaves."
        ],
        prevention: [
            "Plant rust-resistant corn hybrids.",
            "Early planting to avoid peak rust spore periods.",
            "Rotate with non-host crops.",
            "Monitor fields regularly during warm humid periods."
        ]
    },

    "Corn_(maize)___Northern_Leaf_Blight": {
        displayName: "Corn Northern Leaf Blight",
        crop: "Corn (Maize)",
        symptoms: ["Long elliptical gray-green lesions 2.5–15cm", "Lesions turn tan-brown with age", "Cigar-shaped lesions with wavy margins", "Severe blighting from lower leaves upward"],
        treatment: [
            "Apply strobilurin or triazole fungicide at VT/R1 growth stage.",
            "Spray if disease reaches third leaf below the ear before tasseling.",
            "Repeat application after 14–21 days in severe cases."
        ],
        prevention: [
            "Use resistant hybrids — most important control measure.",
            "Rotate crops to reduce residue-borne inoculum.",
            "Till infected crop debris.",
            "Avoid late planting dates in high-risk areas."
        ]
    },

    "Corn_(maize)___healthy": {
        displayName: "Healthy Corn",
        crop: "Corn (Maize)",
        symptoms: ["No disease symptoms detected"],
        treatment: ["No treatment required. Plant appears healthy."],
        prevention: [
            "Scout fields weekly during growing season.",
            "Maintain balanced soil fertility.",
            "Use certified disease-free seed.",
            "Rotate with soybean or other non-host crops."
        ]
    },

    "Grape___Black_rot": {
        displayName: "Grape Black Rot",
        crop: "Grape",
        symptoms: ["Circular tan-brown leaf spots with dark borders", "Black shriveled mummified berries", "Brown lesions on shoots and tendrils", "Infected berries harden and persist on vine"],
        treatment: [
            "Apply myclobutanil, mancozeb, or captan fungicide.",
            "Begin spraying at budbreak and continue every 10–14 days.",
            "Remove all mummified berries from vine and ground."
        ],
        prevention: [
            "Remove and destroy mummified fruit before budbreak.",
            "Prune to improve air circulation.",
            "Train vines to keep fruit off the ground.",
            "Apply dormant copper spray in early spring."
        ]
    },

    "Grape___Esca_(Black_Measles)": {
        displayName: "Grape Esca (Black Measles)",
        crop: "Grape",
        symptoms: ["Tiger-stripe pattern of yellow and brown on leaves", "Dark spots on berry skin giving measles appearance", "Berries crack and shrivel", "Sudden vine collapse in severe cases"],
        treatment: [
            "No fully effective chemical cure exists for Esca.",
            "Remove and destroy severely affected wood.",
            "Apply wound sealant after pruning to prevent fungal entry.",
            "Foliar micronutrient sprays may reduce symptom severity."
        ],
        prevention: [
            "Make pruning cuts during dry weather only.",
            "Apply Trichoderma-based biocontrol to pruning wounds.",
            "Use certified disease-free planting material.",
            "Avoid large pruning wounds where possible."
        ]
    },

    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": {
        displayName: "Grape Leaf Blight",
        crop: "Grape",
        symptoms: ["Irregular dark brown spots on older leaves", "Spots with yellow margins", "Premature defoliation", "Reduced photosynthesis and fruit quality"],
        treatment: [
            "Apply copper-based fungicide or mancozeb at first symptom.",
            "Spray every 10–14 days during wet conditions.",
            "Remove and destroy heavily infected leaves."
        ],
        prevention: [
            "Maintain good air circulation through canopy management.",
            "Avoid overhead irrigation.",
            "Apply preventive copper spray before rainy periods.",
            "Remove fallen leaves from vineyard floor."
        ]
    },

    "Grape___healthy": {
        displayName: "Healthy Grape",
        crop: "Grape",
        symptoms: ["No disease symptoms detected"],
        treatment: ["No treatment required. Plant appears healthy."],
        prevention: [
            "Monitor for downy and powdery mildew weekly.",
            "Maintain balanced fertilization — avoid excess nitrogen.",
            "Train canopy for good air and light penetration.",
            "Apply dormant copper spray annually."
        ]
    },

    "Orange___Haunglongbing_(Citrus_greening)": {
        displayName: "Citrus Greening (HLB)",
        crop: "Orange",
        symptoms: ["Asymmetric yellowing of leaves (blotchy mottle)", "Small lopsided bitter fruit", "Premature fruit drop", "Twig dieback and overall decline"],
        treatment: [
            "No cure exists — infected trees cannot be saved.",
            "Remove and destroy infected trees immediately to prevent spread.",
            "Apply thermotherapy (heat treatment) as an experimental measure.",
            "Nutritional sprays may temporarily improve tree health."
        ],
        prevention: [
            "Control Asian citrus psyllid vector with insecticides.",
            "Use certified disease-free nursery stock only.",
            "Inspect new trees thoroughly before planting.",
            "Establish psyllid monitoring programs in orchards."
        ]
    },

    "Peach___Bacterial_spot": {
        displayName: "Peach Bacterial Spot",
        crop: "Peach",
        symptoms: ["Small water-soaked spots on leaves turning purple-brown", "Holes in leaves giving shot-hole appearance", "Sunken dark lesions on fruit", "Twig cankers with gummy exudate"],
        treatment: [
            "Apply copper-based bactericide starting at petal fall.",
            "Spray oxytetracycline during early season.",
            "Continue applications every 7–10 days in wet weather."
        ],
        prevention: [
            "Plant resistant peach varieties.",
            "Avoid overhead irrigation.",
            "Prune to improve air circulation.",
            "Apply copper dormant spray before bud swell."
        ]
    },

    "Peach___healthy": {
        displayName: "Healthy Peach",
        crop: "Peach",
        symptoms: ["No disease symptoms detected"],
        treatment: ["No treatment required. Plant appears healthy."],
        prevention: [
            "Monitor for peach leaf curl and brown rot regularly.",
            "Apply copper fungicide at leaf fall and bud swell.",
            "Thin fruit to improve air circulation.",
            "Remove mummified fruit from tree and ground."
        ]
    },

    "Pepper_bell___Bacterial_spot": {
        displayName: "Bell Pepper Bacterial Spot",
        crop: "Bell Pepper",
        symptoms: ["Small water-soaked lesions on leaves", "Lesions turn brown with yellow halo", "Raised scabby lesions on fruit", "Severe defoliation in wet conditions"],
        treatment: [
            "Apply copper-based bactericide plus mancozeb tank mix.",
            "Spray every 5–7 days during warm wet weather.",
            "Remove and destroy heavily infected plant material."
        ],
        prevention: [
            "Use certified disease-free or treated seed.",
            "Avoid working in field when plants are wet.",
            "Rotate with non-solanaceous crops for 2–3 years.",
            "Use drip irrigation instead of overhead sprinklers."
        ]
    },

    "Pepper_bell___healthy": {
        displayName: "Healthy Bell Pepper",
        crop: "Bell Pepper",
        symptoms: ["No disease symptoms detected"],
        treatment: ["No treatment required. Plant appears healthy."],
        prevention: [
            "Monitor for bacterial spot and phytophthora blight.",
            "Maintain consistent soil moisture to prevent blossom end rot.",
            "Use mulch to reduce soil splash onto leaves.",
            "Rotate crops annually."
        ]
    },

    "Potato___Early_blight": {
        displayName: "Potato Early Blight",
        crop: "Potato",
        symptoms: ["Dark brown circular spots with concentric rings (target pattern)", "Yellow halo surrounding lesions", "Lesions on older lower leaves first", "Defoliation in severe cases"],
        treatment: [
            "Apply chlorothalonil, mancozeb, or azoxystrobin fungicide.",
            "Begin spray program before symptoms appear or at first sign.",
            "Repeat every 7–10 days during warm humid weather."
        ],
        prevention: [
            "Use certified disease-free seed potatoes.",
            "Rotate crops — avoid planting potato after tomato or pepper.",
            "Maintain adequate soil fertility especially potassium.",
            "Destroy crop debris after harvest."
        ]
    },

    "Potato___Late_blight": {
        displayName: "Potato Late Blight",
        crop: "Potato",
        symptoms: ["Water-soaked pale green lesions rapidly turning brown-black", "White fuzzy sporulation on leaf undersides in humid conditions", "Dark lesions on stems", "Rapid collapse of entire plant"],
        treatment: [
            "Apply metalaxyl or cymoxanil fungicide immediately at first sign.",
            "Spray every 5–7 days in cool wet weather.",
            "Remove and destroy infected plant material — do not compost.",
            "Harvest tubers immediately if foliage is severely affected."
        ],
        prevention: [
            "Use certified blight-free seed potatoes.",
            "Plant resistant varieties.",
            "Avoid overhead irrigation — use drip irrigation.",
            "Hill soil around plants to protect tubers."
        ]
    },

    "Potato___healthy": {
        displayName: "Healthy Potato",
        crop: "Potato",
        symptoms: ["No disease symptoms detected"],
        treatment: ["No treatment required. Plant appears healthy."],
        prevention: [
            "Scout fields twice weekly during cool wet periods.",
            "Use certified seed potatoes only.",
            "Rotate with cereal crops for at least 3 years.",
            "Maintain adequate plant spacing for air circulation."
        ]
    },

    "Raspberry___healthy": {
        displayName: "Healthy Raspberry",
        crop: "Raspberry",
        symptoms: ["No disease symptoms detected"],
        treatment: ["No treatment required. Plant appears healthy."],
        prevention: [
            "Remove and destroy old fruiting canes after harvest.",
            "Monitor for cane blight and spur blight.",
            "Maintain good air circulation through proper cane thinning.",
            "Avoid waterlogged soil conditions."
        ]
    },

    "Soybean___healthy": {
        displayName: "Healthy Soybean",
        crop: "Soybean",
        symptoms: ["No disease symptoms detected"],
        treatment: ["No treatment required. Plant appears healthy."],
        prevention: [
            "Scout for sudden death syndrome and soybean cyst nematode.",
            "Rotate with corn to reduce disease pressure.",
            "Use certified treated seed.",
            "Maintain proper soil pH and fertility."
        ]
    },

    "Squash___Powdery_mildew": {
        displayName: "Squash Powdery Mildew",
        crop: "Squash",
        symptoms: ["White powdery spots on upper leaf surfaces", "Yellowing of affected leaves", "Distorted young leaves", "Premature leaf death in severe cases"],
        treatment: [
            "Apply potassium bicarbonate or sulfur-based fungicide.",
            "Spray neem oil solution every 7 days.",
            "Apply trifloxystrobin or myclobutanil for severe infections."
        ],
        prevention: [
            "Plant resistant squash varieties.",
            "Space plants adequately for air circulation.",
            "Avoid overhead watering — water at base of plant.",
            "Apply preventive spray during warm dry weather with cool nights."
        ]
    },

    "Strawberry___Leaf_scorch": {
        displayName: "Strawberry Leaf Scorch",
        crop: "Strawberry",
        symptoms: ["Small irregular purple spots on upper leaf surface", "Spots enlarge and centers turn brown-gray", "Leaf margins appear scorched or burnt", "Severe infection causes leaf death"],
        treatment: [
            "Apply captan or myclobutanil fungicide at first symptoms.",
            "Remove and destroy heavily infected leaves.",
            "Spray every 10–14 days during wet spring weather."
        ],
        prevention: [
            "Use certified disease-free transplants.",
            "Renovate beds after harvest by mowing and thinning.",
            "Avoid overhead irrigation.",
            "Remove old leaves and plant debris from beds."
        ]
    },

    "Strawberry___healthy": {
        displayName: "Healthy Strawberry",
        crop: "Strawberry",
        symptoms: ["No disease symptoms detected"],
        treatment: ["No treatment required. Plant appears healthy."],
        prevention: [
            "Monitor for gray mold during fruiting.",
            "Maintain good air circulation through proper plant spacing.",
            "Use mulch to keep fruit off the ground.",
            "Renovate beds annually after harvest."
        ]
    },

    "Tomato___Bacterial_spot": {
        displayName: "Tomato Bacterial Spot",
        crop: "Tomato",
        symptoms: ["Small water-soaked spots on leaves and fruit", "Spots turn dark brown with yellow halo", "Raised scabby lesions on green fruit", "Defoliation exposing fruit to sunscald"],
        treatment: [
            "Apply copper bactericide plus mancozeb every 5–7 days.",
            "Remove and destroy infected plant material.",
            "Avoid working with plants when wet."
        ],
        prevention: [
            "Use certified disease-free or hot-water treated seed.",
            "Rotate with non-solanaceous crops for 2–3 years.",
            "Use drip irrigation to keep foliage dry.",
            "Disinfect tools between plants."
        ]
    },

    "Tomato___Early_blight": {
        displayName: "Tomato Early Blight",
        crop: "Tomato",
        symptoms: ["Dark brown spots with concentric target rings on older leaves", "Yellow halo around lesions", "Lesions on stems causing collar rot in seedlings", "Progressive yellowing and defoliation from bottom up"],
        treatment: [
            "Apply chlorothalonil or mancozeb fungicide every 7–10 days.",
            "Remove infected lower leaves immediately.",
            "Apply azoxystrobin for systemic control in severe cases."
        ],
        prevention: [
            "Rotate tomatoes with non-solanaceous crops for 2 years.",
            "Mulch around plants to prevent soil splash.",
            "Water at base of plant — avoid wetting foliage.",
            "Stake plants to improve air circulation."
        ]
    },

    "Tomato___Late_blight": {
        displayName: "Tomato Late Blight",
        crop: "Tomato",
        symptoms: ["Water-soaked gray-green lesions on leaves", "White fuzzy growth on leaf undersides in humid conditions", "Dark greasy-looking lesions on stems", "Rapid plant collapse in cool wet weather"],
        treatment: [
            "Apply copper-based fungicide or chlorothalonil immediately.",
            "Use metalaxyl or cymoxanil for systemic protection.",
            "Remove and bag all infected material — do not compost.",
            "Spray every 5–7 days in high-risk weather."
        ],
        prevention: [
            "Plant resistant tomato varieties.",
            "Avoid overhead irrigation.",
            "Ensure good air circulation through staking and pruning.",
            "Monitor weather forecasts — spray preventively before rain."
        ]
    },

    "Tomato___Leaf_Mold": {
        displayName: "Tomato Leaf Mold",
        crop: "Tomato",
        symptoms: ["Pale green-yellow spots on upper leaf surface", "Olive-green to brown velvety mold on leaf undersides", "Leaves curl and dry out", "Mainly affects greenhouse tomatoes"],
        treatment: [
            "Apply chlorothalonil or copper fungicide every 7 days.",
            "Improve greenhouse ventilation immediately.",
            "Remove and destroy infected leaves."
        ],
        prevention: [
            "Maintain relative humidity below 85% in greenhouse.",
            "Increase plant spacing and improve ventilation.",
            "Use drip irrigation to keep foliage dry.",
            "Plant resistant varieties for greenhouse production."
        ]
    },

    "Tomato___Septoria_leaf_spot": {
        displayName: "Tomato Septoria Leaf Spot",
        crop: "Tomato",
        symptoms: ["Small circular spots with dark brown border and gray-white center", "Tiny black dots (pycnidia) visible in spot centers", "Yellowing around spots", "Progressive defoliation from bottom of plant upward"],
        treatment: [
            "Apply chlorothalonil, mancozeb, or copper fungicide.",
            "Begin treatment at first symptom appearance.",
            "Spray every 7–10 days continuing through season."
        ],
        prevention: [
            "Rotate crops — avoid tomato after tomato for 2 years.",
            "Remove and destroy infected leaves promptly.",
            "Mulch soil surface to prevent spore splash.",
            "Stake plants to keep foliage off ground."
        ]
    },

    "Tomato___Spider_mites Two-spotted_spider_mite": {
        displayName: "Tomato Spider Mites",
        crop: "Tomato",
        symptoms: ["Tiny yellow or white stippling on upper leaf surface", "Fine webbing on undersides of leaves", "Leaves turn bronze then dry out", "Severe infestation causes complete defoliation"],
        treatment: [
            "Apply insecticidal soap or neem oil spray — cover undersides of leaves.",
            "Use abamectin or bifenazate miticide for heavy infestations.",
            "Release predatory mites (Phytoseiulus persimilis) as biological control.",
            "Spray plants with strong water jet to dislodge mites."
        ],
        prevention: [
            "Monitor undersides of leaves weekly especially in hot dry weather.",
            "Maintain adequate soil moisture — drought stresses plants and favors mites.",
            "Avoid broad-spectrum pesticides that kill natural predators.",
            "Introduce predatory mites early in season preventively."
        ]
    },

    "Tomato___Target_Spot": {
        displayName: "Tomato Target Spot",
        crop: "Tomato",
        symptoms: ["Brown circular lesions with concentric rings on leaves", "Lesions with yellow margin", "Dark brown sunken lesions on fruit", "Defoliation starting from lower leaves"],
        treatment: [
            "Apply azoxystrobin or chlorothalonil fungicide.",
            "Spray every 7–14 days during warm humid conditions.",
            "Remove infected lower leaves to slow spread."
        ],
        prevention: [
            "Stake and prune plants to improve air circulation.",
            "Avoid wetting foliage during irrigation.",
            "Rotate with non-solanaceous crops.",
            "Destroy crop debris after season ends."
        ]
    },

    "Tomato___Tomato_Yellow_Leaf_Curl_Virus": {
        displayName: "Tomato Yellow Leaf Curl Virus",
        crop: "Tomato",
        symptoms: ["Upward curling and yellowing of leaves", "Stunted plant growth", "Reduced and distorted fruit set", "Small leaves with crinkled margins"],
        treatment: [
            "No cure exists for virus-infected plants.",
            "Remove and destroy infected plants immediately to prevent spread.",
            "Control whitefly vector with imidacloprid or thiamethoxam insecticide.",
            "Apply reflective mulch to repel whiteflies."
        ],
        prevention: [
            "Plant virus-resistant tomato varieties — most important measure.",
            "Control whitefly populations from transplanting onwards.",
            "Use insect-proof nets in nurseries and greenhouses.",
            "Remove infected plants and weeds that harbor whiteflies."
        ]
    },

    "Tomato___Tomato_mosaic_virus": {
        displayName: "Tomato Mosaic Virus",
        crop: "Tomato",
        symptoms: ["Mosaic pattern of light and dark green on leaves", "Leaf distortion and curling", "Stunted plant growth", "Reduced fruit quality with internal browning"],
        treatment: [
            "No chemical cure available for virus-infected plants.",
            "Remove and destroy infected plants promptly.",
            "Disinfect all tools with 10% bleach solution between plants.",
            "Wash hands thoroughly before handling plants."
        ],
        prevention: [
            "Use certified virus-free seed and transplants.",
            "Do not smoke near tomato plants — tobacco carries the virus.",
            "Control aphid vectors with insecticidal soap.",
            "Disinfect stakes, cages, and tools between seasons."
        ]
    },

    "Tomato___healthy": {
        displayName: "Healthy Tomato",
        crop: "Tomato",
        symptoms: ["No disease symptoms detected"],
        treatment: ["No treatment required. Plant appears healthy."],
        prevention: [
            "Scout plants twice weekly for early disease signs.",
            "Maintain consistent watering to prevent blossom end rot.",
            "Stake or cage plants for air circulation.",
            "Apply preventive fungicide during prolonged wet periods."
        ]
    }
};

export default TREATMENT_DB;