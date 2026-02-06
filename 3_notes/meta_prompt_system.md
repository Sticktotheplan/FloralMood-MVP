# Système Méta-Prompt - FloralMood MVP

**Version:** 1.0
**Date:** 6 février 2026
**Statut:** Spécification Approuvée

---

## 🎯 VISION & OBJECTIF

### Problème à Résoudre

Les IA génératives d'images (DALL-E 3, Midjourney, Stable Diffusion) produisent des résultats génériques lorsqu'on utilise des keywords simples. Pour capturer la **sophistication unique** du portfolio d'un fleuriste professionnel, nous avons besoin de prompts ultra-spécifiques qui incluent:

- Proportions exactes de fleurs/feuillage (40% roses, 30% filler, etc.)
- Combinaisons florales spécifiques et testées
- Style photographique réaliste (pas de rendu 3D/CGI)
- Validation saisonnière (pas de pivoines en hiver)
- Détails de composition (asymétrique, cascading, gaps intentionnels)

### Solution: Méta-Prompt System en 2 Étapes

```
ÉTAPE 1: META-PROMPT AGENT (GPT-4 Vision + Claude Sonnet)
         Portfolio fleuriste (5-15 photos) + Client brief
                          ↓
         Agent analyse et GÉNÈRE le prompt optimal
                          ↓
         Prompt structuré, spécifique, photographique

ÉTAPE 2: IMAGE GENERATION (DALL-E 3)
         Utilise le prompt généré par l'agent
                          ↓
         Images haute qualité, style capturé
```

### Pourquoi c'est Meilleur que Keywords Simples

**❌ Approche Naïve (Keywords):**
```
Portfolio → "romantic, blush, organic" → IA génère image GÉNÉRIQUE
```

**✅ Approche Méta-Prompt:**
```
Portfolio → Agent analyse proportions/compositions/combinaisons
         → Génère prompt ultra-spécifique
         → "Real photograph outdoor garden wedding, circular floral arch
            natural branches, 40% baby's breath density, 30% dusty mauve
            carnations clusters of 3-5 blooms, 20% pale pink garden roses
            positioned asymmetrically left-heavy, 10% eucalyptus trailing
            right side, intentional gaps showing branch structure, dappled
            afternoon sunlight, Nikon DSLR bokeh, Kodak Portra aesthetic"
```

---

## 🏗️ ARCHITECTURE SYSTÈME

### Vue d'Ensemble

```
┌────────────────────────────────────────────────────────────┐
│                   FLORIST ONBOARDING                        │
│  (One-time per florist)                                     │
├────────────────────────────────────────────────────────────┤
│                                                             │
│  Upload Portfolio (5-15 photos)                             │
│           ↓                                                 │
│  ┌──────────────────────────────┐                          │
│  │  PORTFOLIO ANALYZER          │                          │
│  │  (GPT-4 Vision API)          │                          │
│  │                              │                          │
│  │  Analyzes each image:        │                          │
│  │  - Flower ratios             │                          │
│  │  - Color palette             │                          │
│  │  - Arrangement style         │                          │
│  │  - Foliage density           │                          │
│  │  - Vessel preferences        │                          │
│  │  - Signature combinations    │                          │
│  └──────────────────────────────┘                          │
│           ↓                                                 │
│  Aggregates patterns → PORTFOLIO PROFILE (JSON)             │
│           ↓                                                 │
│  Store in DB: florist_style_profile table                   │
│                                                             │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│              PER-MOODBOARD GENERATION                       │
│  (Every time client requests moodboard)                     │
├────────────────────────────────────────────────────────────┤
│                                                             │
│  Client submits brief (wedding date, style, colors)         │
│           ↓                                                 │
│  ┌──────────────────────────────┐                          │
│  │  PROMPT GENERATOR AGENT      │                          │
│  │  (Claude Sonnet 4.5)         │                          │
│  │                              │                          │
│  │  Inputs:                     │                          │
│  │  - Portfolio Profile (DB)    │                          │
│  │  - Client Brief              │                          │
│  │  - Selected Prestations      │                          │
│  │  - Wedding Season            │                          │
│  │                              │                          │
│  │  Process:                    │                          │
│  │  1. Load base template       │                          │
│  │  2. Inject portfolio style   │                          │
│  │  3. Apply seasonal rules     │◄─── RULES ENGINE         │
│  │  4. Add photography rules    │     (JSON Database)      │
│  │  5. Generate negative prompt │                          │
│  │                              │                          │
│  └──────────────────────────────┘                          │
│           ↓                                                 │
│  ┌──────────────────────────────┐                          │
│  │  QUALITY VALIDATOR           │                          │
│  │                              │                          │
│  │  Checks:                     │                          │
│  │  - Specificity > 80%         │                          │
│  │  - Seasonal flowers valid    │                          │
│  │  - Photography rules applied │                          │
│  │  - No forbidden keywords     │                          │
│  └──────────────────────────────┘                          │
│           ↓                                                 │
│  Generated Prompt (2-3 variations per prestation)           │
│           ↓                                                 │
│  ┌──────────────────────────────┐                          │
│  │  IMAGE GENERATION API        │                          │
│  │  (DALL-E 3)                  │                          │
│  └──────────────────────────────┘                          │
│           ↓                                                 │
│  Generated Images → Florist Review                          │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

---

## 🧩 COMPOSANTS DÉTAILLÉS

### 1. Portfolio Analyzer (GPT-4 Vision)

**Responsabilité:**
Analyser les images du portfolio fleuriste et extraire des patterns structurés.

**Input:**
Array de 5-15 images (URLs ou base64)

**Process:**
```javascript
for each image in portfolio:
  analyze:
    - Identify flowers present (names)
    - Estimate visual ratios (% of composition)
    - Extract color palette (hex codes)
    - Classify arrangement style
    - Measure foliage density
    - Detect vessel type
    - Note composition patterns (asymmetric, cascading, etc.)
```

**Output Example:**
```json
{
  "florist_id": "florist_123",
  "portfolio_analysis": {
    "flower_frequency": {
      "garden_roses": 12,
      "ranunculus": 10,
      "eucalyptus": 15,
      "hellebores": 7,
      "tweedia": 5
    },
    "average_ratios": {
      "focal_flowers": 35,
      "secondary_flowers": 25,
      "foliage": 30,
      "accent_flowers": 10
    },
    "color_palette_dominant": [
      "#F5E8E1", // blush ivory
      "#D4A5A5", // dusty mauve
      "#A8B5A0", // sage green
      "#FFFFFF"  // white
    ],
    "arrangement_style": "organic_asymmetric",
    "foliage_density": "airy_30_40_percent",
    "vessel_preferences": ["terracotta", "ceramic_matte", "vintage_brass"],
    "signature_combinations": [
      {
        "flowers": ["garden_roses", "ranunculus", "eucalyptus", "hellebores"],
        "frequency": 8,
        "seasons": ["spring", "summer"]
      },
      {
        "flowers": ["dahlias", "roses", "smoke_bush", "amaranth"],
        "frequency": 4,
        "seasons": ["autumn"]
      }
    ],
    "composition_patterns": {
      "asymmetry": "high",
      "cascading": "moderate",
      "clustering": "low",
      "gap_presence": "intentional_gaps"
    }
  },
  "analyzed_at": "2026-02-06T10:30:00Z"
}
```

**Implementation Notes:**
- Use GPT-4 Vision API with structured output
- Prompt: "Analyze this floral arrangement. Identify all flowers, estimate their visual proportions, extract color palette, classify arrangement style (organic/structured/loose/tight), measure foliage density, detect vessel type. Return structured JSON."
- Cost: ~$0.01 per image, $0.10 for 10 images (one-time per florist)

---

### 2. Prompt Generator Agent (Claude Sonnet 4.5)

**Responsabilité:**
Générer des prompts ultra-spécifiques pour DALL-E 3 en combinant le Portfolio Profile, le Client Brief, et la Rules Database.

**Inputs:**
```json
{
  "portfolio_profile": { /* from Portfolio Analyzer */ },
  "client_brief": {
    "wedding_date": "2026-06-15",
    "season": "summer",
    "style_preferences": ["romantic", "garden", "soft"],
    "color_preferences": ["blush", "ivory", "sage"],
    "avoided_colors": ["bright_red", "neon"]
  },
  "prestation": {
    "type": "ceremony_arch_full",
    "size": "large",
    "location": "outdoor_garden"
  }
}
```

**Process:**
1. Load base template for prestation type
2. Inject portfolio-specific ratios and combinations
3. Validate flowers against seasonal database
4. Apply photography rules (camera, lighting, film aesthetic)
5. Add composition specifics (asymmetry, gaps, placement)
6. Generate negative prompt
7. Run through Quality Validator
8. Output 2-3 variations

**Output Example:**
```json
{
  "prompts": [
    {
      "version": "v1_primary",
      "prompt": "Real photograph from outdoor garden wedding ceremony, natural wooden circular arch decorated with loose organic floral arrangement, composition: 35% blush pink garden roses in clusters of 3-4 blooms positioned asymmetrically left-heavy, 25% ivory ranunculus scattered throughout right side, 20% sage eucalyptus trailing and filling gaps, 15% dusty mauve hellebores accent pieces lower portion, 5% blue tweedia delicate touches upper left, airy arrangement with 35% intentional gaps showing natural wood arch structure, asymmetric cascading right, summer garden setting, soft afternoon sunlight filtering through trees, shot during ceremony setup, Nikon D850 natural bokeh, Kodak Portra 400 film aesthetic, slight grain, authentic imperfections, candid documentary style",
      "negative_prompt": "no CGI, no 3D render, no perfect symmetry, no oversaturated neon colors, no AI generated look, no studio lighting, no flawless tight arrangement, no tropical flowers (orchids, anthurium), no text, no watermark",
      "quality_score": 92
    },
    {
      "version": "v2_lush_variation",
      "prompt": "Real photograph outdoor summer wedding, circular wooden ceremony arch with abundant romantic floral decoration, 40% blush garden roses tightly clustered center, 25% white ranunculus layered throughout, 20% eucalyptus garland wrapping arch, 10% dusty pink hellebores filling lower gaps, 5% soft blue tweedia accent upper right, lush full arrangement 60% flower density, symmetrical balanced composition, golden hour warm lighting, natural garden background soft bokeh, Canon 5D Mark IV 50mm f/1.8, Fuji Pro 400H color palette, professional wedding photography style",
      "negative_prompt": "no CGI, no 3D render, no artificial flowers, no studio backdrop, no oversaturated colors, no neon, no tropical flowers, no winter flowers (amaryllis, poinsettia), no text",
      "quality_score": 88
    }
  ],
  "metadata": {
    "flowers_validated": true,
    "seasonal_check": "passed",
    "substitutions_made": [],
    "generated_at": "2026-02-06T11:45:00Z"
  }
}
```

**Implementation Notes:**
- Use Claude Sonnet 4.5 with system prompt containing rules
- Cost: ~$0.015 per prompt generation
- Generate 2-3 variations for florist to choose from

---

### 3. Rules Engine (JSON Database)

**Responsabilité:**
Fournir les règles de prompt engineering pour garantir des images photographiques et réalistes.

**Structure:**
See `prompt_rules_database.json` (separate file)

**Categories de Règles:**

1. **Photography Rules**
   - Realistic prefixes ("Real photograph from", "Documentary shot of")
   - Camera specifications (Nikon D850, Canon 5D, Fuji X-T4)
   - Film aesthetics (Kodak Portra, Fuji Pro 400H)
   - Natural lighting (golden hour, dappled light, soft morning)

2. **Composition Rules**
   - Specificity requirements (use percentages, exact placements)
   - Arrangement style mappings (loose_organic → "asymmetric, airy, intentional gaps")
   - Gap/spacing descriptions

3. **Negative Prompts**
   - Avoid AI look (no CGI, no 3D render, no perfect symmetry)
   - Avoid studio setup (no white backdrop, no studio lighting)
   - Avoid unrealistic elements (no glowing flowers, no neon colors)

4. **Seasonal Rules**
   - Spring: include peonies/tulips, exclude dahlias/sunflowers
   - Summer: include roses/dahlias, exclude tulips/amaryllis
   - Autumn: include dahlias/chrysanthemums, exclude peonies
   - Winter: include hellebores/amaryllis, exclude peonies/dahlias

5. **Style Mappings**
   - romantic → soft colors, abundant flowers, flowing
   - modern → clean lines, minimalist, architectural
   - rustic → earthy tones, wildflowers, natural vessels
   - luxe → premium flowers (orchids, calla lilies), tight arrangement

**Usage:**
```javascript
const rules = require('./prompt_rules_database.json');

// Apply photography rules
const cameraSpec = randomChoice(rules.photography.camera_specs);
const filmAesthetic = randomChoice(rules.photography.film_aesthetics);
const lighting = selectLighting(rules.photography.lighting_natural, timeOfDay);

// Apply seasonal rules
const season = determineSeason(weddingDate);
const allowedFlowers = rules.seasonal_rules[season].include;
const forbiddenFlowers = rules.seasonal_rules[season].exclude;

// Validate portfolio flowers
const validFlowers = portfolioFlowers.filter(f =>
  allowedFlowers.includes(f) && !forbiddenFlowers.includes(f)
);
```

---

### 4. Quality Validator

**Responsabilité:**
Vérifier que le prompt généré respecte les standards de qualité avant envoi à DALL-E 3.

**Checks:**

1. **Specificity Score (Target: >80%)**
   ```javascript
   // Ratio of concrete nouns vs generic adjectives
   const concreteNouns = countWords(prompt, CONCRETE_NOUNS); // "roses", "eucalyptus", "Nikon D850"
   const genericAdjectives = countWords(prompt, GENERIC_ADJECTIVES); // "beautiful", "nice", "pretty"
   const specificityScore = (concreteNouns / (concreteNouns + genericAdjectives)) * 100;

   if (specificityScore < 80) {
     flag("Prompt too generic - add more concrete details");
   }
   ```

2. **Seasonal Validation**
   ```javascript
   const season = determineSeason(weddingDate);
   const forbiddenFlowers = SEASONAL_RULES[season].exclude;

   const violations = forbiddenFlowers.filter(f => prompt.includes(f));
   if (violations.length > 0) {
     flag(`Seasonal violation: ${violations.join(', ')} not available in ${season}`);
   }
   ```

3. **Photography Rules Applied**
   ```javascript
   const hasRealisticPrefix = /^(Real photograph|Documentary photo|Candid shot)/.test(prompt);
   const hasCameraSpec = CAMERA_SPECS.some(cam => prompt.includes(cam));
   const hasNaturalLighting = NATURAL_LIGHTING.some(light => prompt.includes(light));

   if (!hasRealisticPrefix || !hasCameraSpec || !hasNaturalLighting) {
     flag("Photography rules not fully applied");
   }
   ```

4. **Forbidden Keywords Check**
   ```javascript
   const forbidden = ["CGI", "3D render", "perfect", "flawless", "AI generated"];
   const violations = forbidden.filter(word => prompt.toLowerCase().includes(word.toLowerCase()));

   if (violations.length > 0) {
     flag(`Forbidden keywords in main prompt: ${violations.join(', ')}`);
   }
   ```

**Output:**
```json
{
  "valid": true,
  "quality_score": 92,
  "checks": {
    "specificity": { "score": 87, "passed": true },
    "seasonal": { "violations": [], "passed": true },
    "photography": { "passed": true },
    "forbidden_keywords": { "violations": [], "passed": true }
  },
  "warnings": [],
  "suggestions": [
    "Consider adding more foliage placement details"
  ]
}
```

---

## 📋 WORKFLOW COMPLET

### Onboarding Flow (One-time per Florist)

```
1. Florist uploads 5-15 portfolio photos
   ↓
2. Frontend sends images to Portfolio Analyzer API
   POST /api/analyze-portfolio
   {
     "florist_id": "florist_123",
     "images": ["url1", "url2", ...]
   }
   ↓
3. Portfolio Analyzer (GPT-4 Vision) analyzes each image
   - Cost: ~$0.01 per image = $0.10 total for 10 images
   ↓
4. Aggregate results into Portfolio Profile
   ↓
5. Store in database: florist_style_profile table
   ↓
6. Return summary to florist for confirmation
   "We analyzed your portfolio and identified your signature style:
    - 35% focal flowers (garden roses, peonies)
    - 30% foliage (eucalyptus, olive branches)
    - Organic asymmetric arrangements
    - Blush/ivory/sage color palette"
   ↓
7. Florist confirms or adjusts
```

### Moodboard Generation Flow (Per Client Request)

```
1. Client fills out brief form
   - Wedding date: 2026-06-15
   - Style: romantic garden
   - Colors: blush, ivory, sage
   - Prestations: ceremony arch, bridal bouquet, 4 centerpieces
   ↓
2. Frontend sends request to Moodboard Generator API
   POST /api/generate-moodboard
   {
     "florist_id": "florist_123",
     "client_brief": { ... },
     "prestations": ["ceremony_arch_full", "bridal_bouquet_cascading", ...]
   }
   ↓
3. Backend loads Portfolio Profile from DB
   ↓
4. Determine wedding season (June → summer)
   ↓
5. FOR EACH prestation:
   ↓
   a. Prompt Generator Agent receives:
      - Portfolio Profile
      - Client Brief
      - Prestation type
      - Season
   ↓
   b. Load base template for prestation
   ↓
   c. Inject portfolio style specifics
      - Use 35% garden roses (from profile)
      - Apply "organic asymmetric" style
      - Use color palette: blush/ivory/sage
   ↓
   d. Validate flowers against seasonal database
      SELECT * FROM seasonal_flowers
      WHERE 'summer' = ANY(seasons)

      ✅ Garden roses (available)
      ✅ Ranunculus (available)
      ✅ Eucalyptus (year-round)
      ❌ Peonies (spring only) → Substitute with dahlias
   ↓
   e. Apply Rules Engine
      - Photography: "Real photograph... Nikon D850... Kodak Portra"
      - Composition: "35% roses clusters of 3-4, asymmetric left-heavy"
      - Negative: "no CGI, no 3D render, no perfect symmetry"
   ↓
   f. Generate 2-3 prompt variations
   ↓
   g. Quality Validator checks each prompt
      - Specificity score: 89% ✅
      - Seasonal check: passed ✅
      - Photography rules: applied ✅
   ↓
   h. Select best prompt (highest quality score)
   ↓
6. Send prompt to DALL-E 3 API
   POST https://api.openai.com/v1/images/generations
   {
     "model": "dall-e-3",
     "prompt": "...",
     "n": 1,
     "size": "1024x1024",
     "quality": "hd"
   }
   - Cost: $0.08 per image (HD quality)
   ↓
7. Receive generated image URL
   ↓
8. Store image URL + metadata in database
   ↓
9. REPEAT for all prestations (10 images total)
   ↓
10. Compile moodboard
    ↓
11. Send to florist for review
    - Florist can regenerate individual images
    - Florist can approve and send to client
```

---

## 💰 COÛT CALCULATION

### Per Moodboard (10 prestations/images)

| Composant | Coût Unitaire | Quantité | Total |
|-----------|---------------|----------|-------|
| Portfolio Analysis (one-time) | $0.01/image | 10 images | $0.10 (one-time) |
| Meta-Prompt Generation (GPT-4) | $0.015/prompt | 10 prompts | $0.15 |
| Image Generation DALL-E 3 HD | $0.08/image | 10 images | $0.80 |
| **TOTAL per moodboard** | | | **$0.95** |

### Margin Calculation (Professional Plan)

```
Revenue: $79/mo for 40 moodboards = $1.98 per moodboard
AI Cost: $0.95 per moodboard
Margin: $1.03 per moodboard (52%)
```

**Note:** Dans le plan initial, nous avions estimé $0.55 avec DALL-E 3 standard quality. En utilisant HD quality ($0.08 vs $0.04), le coût monte à $0.95 mais la qualité est significativement meilleure. Marge de 52% reste saine.

### Cost Optimization Options

1. **Standard Quality DALL-E 3:** $0.04/image → Total $0.55/moodboard (72% margin)
2. **Batch Processing:** Generate multiple variations, florist picks best
3. **Caching:** Reuse prompts for similar briefs
4. **V1 Upgrade:** Fine-tune model with florist feedback to reduce regenerations

---

## 🎨 EXEMPLES DE PROMPTS GÉNÉRÉS

### Example 1: Ceremony Arch - Romantic Garden Summer

**Input:**
```json
{
  "portfolio_profile": {
    "flower_ratios": {"garden_roses": 35, "ranunculus": 25, "eucalyptus": 20, "hellebores": 15, "tweedia": 5},
    "arrangement_style": "organic_asymmetric",
    "color_palette": ["blush_pink", "ivory", "dusty_mauve", "sage_green"]
  },
  "client_brief": {
    "wedding_date": "2026-06-15",
    "season": "summer",
    "style": "romantic_garden",
    "colors": ["blush", "ivory", "sage"]
  },
  "prestation": "ceremony_arch_full"
}
```

**Generated Prompt:**
```
Real photograph from outdoor garden wedding ceremony, natural wooden circular arch decorated with loose organic floral arrangement, composition: 35% blush pink garden roses in clusters of 3-4 blooms positioned asymmetrically left-heavy, 25% ivory ranunculus scattered throughout right side, 20% sage eucalyptus trailing and filling gaps, 15% dusty mauve hellebores accent pieces lower portion, 5% blue tweedia delicate touches upper left, airy arrangement with 35% intentional gaps showing natural wood arch structure, asymmetric cascading right, summer garden setting, soft afternoon sunlight filtering through trees, shot during ceremony setup, Nikon D850 natural bokeh, Kodak Portra 400 film aesthetic, slight grain, authentic imperfections, candid documentary style
```

**Negative Prompt:**
```
no CGI, no 3D render, no perfect symmetry, no oversaturated neon colors, no AI generated look, no studio lighting, no flawless tight arrangement, no tropical flowers (orchids, anthurium), no winter flowers (amaryllis, poinsettia), no text, no watermark
```

**Quality Score:** 92/100

---

### Example 2: Bridal Bouquet - Luxe Modern Winter

**Input:**
```json
{
  "portfolio_profile": {
    "flower_ratios": {"calla_lilies": 40, "orchids": 30, "eucalyptus_silver": 20, "succulents": 10},
    "arrangement_style": "structured_architectural",
    "color_palette": ["white", "ivory", "silver", "deep_green"]
  },
  "client_brief": {
    "wedding_date": "2026-12-20",
    "season": "winter",
    "style": "luxe_modern",
    "colors": ["white", "silver", "deep_green"]
  },
  "prestation": "bridal_bouquet_handheld"
}
```

**Generated Prompt:**
```
Real photograph of luxury winter bridal bouquet held by bride, structured architectural composition, 40% white calla lilies arranged in sculptural spiral, 30% white phalaenopsis orchids positioned symmetrically creating clean lines, 20% silver dollar eucalyptus providing metallic sheen backdrop, 10% small green succulents accent pieces adding modern texture, tight structured arrangement with minimal gaps, long stems wrapped in ivory silk ribbon, shot indoors near window with soft natural light, shallow depth of field focusing on calla lily curves, Canon 5D Mark IV 85mm f/1.4, Fuji Pro 400H color palette, professional bridal editorial style, bride's hands visible holding bouquet at waist level, elegant manicure, lace wedding dress visible softly blurred in background
```

**Negative Prompt:**
```
no CGI, no 3D render, no artificial plastic flowers, no oversaturated colors, no studio backdrop, no seasonal mismatch flowers (peonies, dahlias, sunflowers), no messy loose arrangement, no rustic wildflowers, no text, no watermark
```

**Quality Score:** 94/100

---

### Example 3: Centerpiece - Rustic Autumn

**Input:**
```json
{
  "portfolio_profile": {
    "flower_ratios": {"dahlias": 30, "marigolds": 20, "wheat": 20, "amaranth": 15, "oak_leaves": 15},
    "arrangement_style": "loose_organic",
    "color_palette": ["rust_orange", "golden_yellow", "deep_burgundy", "bronze"]
  },
  "client_brief": {
    "wedding_date": "2026-10-10",
    "season": "autumn",
    "style": "rustic_harvest",
    "colors": ["rust", "gold", "burgundy"]
  },
  "prestation": "centerpiece_low_table"
}
```

**Generated Prompt:**
```
Real photograph of rustic autumn wedding reception centerpiece on wooden farm table, low organic arrangement in terracotta vessel, composition: 30% rust orange dahlias with dark centers clustered asymmetrically left side, 20% golden yellow marigolds scattered throughout, 20% dried wheat stalks adding height right side, 15% trailing burgundy amaranth draping over vessel edge, 15% bronze oak leaves filling gaps and adding texture, loose airy arrangement with natural imperfections, earthy color palette, arranged in matte terracotta pot with visible patina, rustic barn reception setting, warm golden hour sunlight streaming through windows, wooden farm table visible, burlap table runner partially visible, shot from slight angle, Nikon D750 50mm f/2.8, Kodak Ektar warm tones, authentic harvest aesthetic
```

**Negative Prompt:**
```
no CGI, no 3D render, no perfect symmetry, no bright neon colors, no spring flowers (tulips, peonies, sweet peas), no tropical flowers, no tight structured arrangement, no modern minimalist style, no white backdrop, no studio lighting, no text, no watermark
```

**Quality Score:** 90/100

---

## 🔄 AMÉLIORATION CONTINUE

### V1 Features (Post-MVP)

1. **Fine-tuning du Meta-Prompt Agent**
   - Collecter feedback florists (thumbs up/down sur chaque image)
   - Analyser patterns des prompts qui produisent best images
   - Fine-tune Claude avec examples réussis
   - Améliorer quality score de 92% → 96%

2. **LoRA Custom Models (STUDIO Plan)**
   - Pour clients premium ($149/mo)
   - Train LoRA model sur portfolio specific florist
   - Cost: $50-100 one-time training
   - Reduce prompt complexity, improve consistency

3. **Multi-variation A/B Testing**
   - Generate 3 variations per prestation
   - Florist quick-picks best
   - Track which prompt patterns win
   - Auto-optimize prompt templates

4. **Seasonal Flower Database Expansion**
   - Integrate Australian flower availability APIs
   - Real-time pricing data
   - Suggest cost-optimized alternatives

5. **Style Transfer Learning**
   - Analyze florist's Instagram feed
   - Extract trending styles
   - Suggest modern combinations

---

## 🚀 NEXT STEPS

1. ✅ Créer `prompt_rules_database.json` avec 50-100 règles
2. ✅ Créer `prompt_templates.md` avec templates pour 15+ prestations
3. Implémenter Portfolio Analyzer (GPT-4 Vision integration)
4. Implémenter Prompt Generator Agent (Claude Sonnet integration)
5. Implémenter Quality Validator (règles de validation)
6. Tester workflow complet avec portfolio réel
7. Mesurer quality scores et coûts réels
8. Itérer sur prompt templates basé sur résultats

---

**Document Version:** 1.0
**Last Updated:** 2026-02-06
**Owner:** Product Team FloralMood
