# Logique de Validation Saisonnière - FloralMood MVP

**Version:** 1.0
**Date:** 6 février 2026

---

## 🎯 OBJECTIF

La validation saisonnière garantit que toutes les fleurs utilisées dans un moodboard sont **réellement disponibles** pour la saison du mariage. Cela évite de générer des images avec des pivoines en hiver ou des amaryllis en été.

---

## 📅 DÉTERMINATION DE LA SAISON

### Mapping Date → Saison (Australie - Hémisphère Sud)

```javascript
function determineSeason(weddingDate) {
  const month = weddingDate.getMonth() + 1; // 1-12

  // Australia (Southern Hemisphere)
  if (month >= 9 && month <= 11) return 'spring';      // Sep-Nov
  if (month >= 12 || month <= 2) return 'summer';      // Dec-Feb
  if (month >= 3 && month <= 5) return 'autumn';       // Mar-May
  if (month >= 6 && month <= 8) return 'winter';       // Jun-Aug
}

// Exemples:
// 2026-06-15 (15 juin) → winter
// 2026-10-10 (10 oct) → spring
// 2026-12-20 (20 déc) → summer
// 2026-03-15 (15 mars) → autumn
```

### Seasonal Transitions (Marges)

Certaines fleurs ont des saisons de transition:

```javascript
const SEASONAL_TRANSITIONS = {
  early_spring: [8, 9],      // Août-Septembre
  late_spring: [10, 11],     // Octobre-Novembre
  early_summer: [11, 12],    // Novembre-Décembre
  late_summer: [1, 2],       // Janvier-Février
  early_autumn: [2, 3],      // Février-Mars
  late_autumn: [4, 5],       // Avril-Mai
  early_winter: [5, 6],      // Mai-Juin
  late_winter: [7, 8]        // Juillet-Août
};

// Exemple: Peonies available "spring" and "early_summer"
// → Months [9,10,11,12]
```

---

## ✅ ALGORITHME DE VALIDATION

### 1. Validation Simple (Exact Season Match)

```javascript
async function validateFlowerForSeason(flowerName, season) {
  const flower = await db.query(`
    SELECT * FROM seasonal_flowers
    WHERE flower_name = $1
  `, [flowerName]);

  if (!flower) {
    return {
      valid: false,
      reason: 'flower_not_found',
      message: `Flower "${flowerName}" not in database`
    };
  }

  // Check if flower is available year-round
  if (flower.year_round === true) {
    return {
      valid: true,
      reason: 'year_round',
      flower: flower
    };
  }

  // Check if season is in flower's available seasons
  if (flower.seasons.includes(season)) {
    return {
      valid: true,
      reason: 'seasonal_match',
      flower: flower
    };
  }

  return {
    valid: false,
    reason: 'seasonal_mismatch',
    message: `${flowerName} not available in ${season}`,
    available_seasons: flower.seasons,
    flower: flower
    };
}
```

### 2. Validation par Mois (Plus Précise)

```javascript
async function validateFlowerForMonth(flowerName, month) {
  const flower = await db.query(`
    SELECT * FROM seasonal_flowers
    WHERE flower_name = $1
  `, [flowerName]);

  if (!flower) {
    return { valid: false, reason: 'flower_not_found' };
  }

  // Year-round flowers always valid
  if (flower.year_round === true) {
    return { valid: true, reason: 'year_round', flower: flower };
  }

  // Check if month is in peak_months
  if (flower.peak_months && flower.peak_months.includes(month)) {
    return {
      valid: true,
      reason: 'peak_month',
      quality: 'peak',
      flower: flower
    };
  }

  // Check if month is within ±1 month of peak (shoulder season)
  const shoulderMonths = flower.peak_months.flatMap(m => [
    m - 1 === 0 ? 12 : m - 1,  // Previous month
    m + 1 === 13 ? 1 : m + 1    // Next month
  ]);

  if (shoulderMonths.includes(month)) {
    return {
      valid: true,
      reason: 'shoulder_season',
      quality: 'available',
      warning: 'Flower may be slightly more expensive or lower availability',
      flower: flower
    };
  }

  return {
    valid: false,
    reason: 'out_of_season',
    message: `${flowerName} not available in month ${month}`,
    peak_months: flower.peak_months,
    flower: flower
  };
}
```

### 3. Validation d'une Composition Complète

```javascript
async function validateComposition(flowers, weddingDate) {
  const season = determineSeason(weddingDate);
  const month = weddingDate.getMonth() + 1;

  const results = [];
  let allValid = true;

  for (const flowerEntry of flowers) {
    const validation = await validateFlowerForMonth(
      flowerEntry.name,
      month
    );

    results.push({
      flower: flowerEntry.name,
      ratio: flowerEntry.ratio,
      validation: validation,
      status: validation.valid ? 'OK' : 'INVALID'
    });

    if (!validation.valid) {
      allValid = false;
    }
  }

  return {
    valid: allValid,
    season: season,
    month: month,
    results: results,
    invalidCount: results.filter(r => !r.validation.valid).length
  };
}
```

---

## 🔄 LOGIQUE DE SUBSTITUTION

Lorsqu'une fleur du portfolio n'est pas disponible pour la saison, le système propose des **substitutions** basées sur des critères similaires.

### Critères de Substitution

```javascript
const SUBSTITUTION_CRITERIA = {
  visual_similarity: {
    // Similar bloom size, shape, texture
    peonies: ['garden_roses', 'ranunculus', 'dahlias'],
    tulips: ['ranunculus', 'anemones', 'lisianthus'],
    dahlias: ['garden_roses', 'ranunculus', 'chrysanthemums'],
    sunflowers: ['large_chrysanthemums', 'bold_dahlias']
  },
  role_based: {
    // Similar floral role (focal, filler, foliage)
    focal: ['garden_roses', 'peonies', 'dahlias', 'orchids'],
    filler: ['lisianthus', 'stock', 'baby_breath', 'carnations'],
    foliage: ['eucalyptus', 'olive_branches', 'ferns', 'ruscus'],
    accent: ['sweet_peas', 'tweedia', 'scabiosa', 'hellebores']
  },
  color_palette: {
    // Similar color families
    blush: ['blush_roses', 'blush_ranunculus', 'blush_dahlias'],
    burgundy: ['burgundy_roses', 'burgundy_dahlias', 'burgundy_carnations'],
    white: ['white_roses', 'white_ranunculus', 'white_lisianthus']
  }
};
```

### Algorithme de Substitution

```javascript
async function findSubstitute(originalFlower, targetSeason, targetMonth) {
  // 1. Get original flower details
  const original = await db.query(`
    SELECT * FROM seasonal_flowers WHERE flower_name = $1
  `, [originalFlower]);

  if (!original) return null;

  // 2. Query similar flowers available in target season
  const substitutes = await db.query(`
    SELECT *,
      -- Calculate similarity score
      CASE
        WHEN role = $1 THEN 3  -- Same role = high score
        ELSE 0
      END +
      CASE
        WHEN price_tier = $2 THEN 2  -- Same price = medium score
        ELSE 0
      END +
      CASE
        WHEN bloom_size = $3 THEN 2  -- Same size = medium score
        ELSE 0
      END as similarity_score
    FROM seasonal_flowers
    WHERE
      (
        $4 = ANY(seasons)           -- Available in target season
        OR year_round = TRUE
        OR $5 = ANY(peak_months)    -- Or available in target month
      )
      AND flower_name != $6         -- Not the original
      AND color_variants && $7      -- Shares color variants
    ORDER BY similarity_score DESC, price_tier ASC
    LIMIT 3
  `, [
    original.role,
    original.price_tier,
    original.bloom_size,
    targetSeason,
    targetMonth,
    originalFlower,
    original.color_variants
  ]);

  return substitutes.map(sub => ({
    name: sub.flower_name,
    reason: `Similar ${original.role} flower in ${targetSeason}`,
    similarity_score: sub.similarity_score,
    price_comparison: comparePriceTier(original.price_tier, sub.price_tier),
    color_variants: sub.color_variants
  }));
}

function comparePriceTier(original, substitute) {
  const tiers = { budget: 1, mid: 2, premium: 3, luxury: 4 };
  const diff = tiers[substitute] - tiers[original];

  if (diff === 0) return 'same_price';
  if (diff > 0) return `more_expensive_${diff}_tier`;
  if (diff < 0) return `less_expensive_${Math.abs(diff)}_tier`;
}
```

---

## 🔍 SCÉNARIOS DE VALIDATION

### Scénario 1: Toutes les Fleurs Valides ✅

**Input:**
```javascript
{
  wedding_date: "2026-10-15",  // Octobre = Spring (Australia)
  flowers: [
    { name: "garden_roses", ratio: 35 },
    { name: "ranunculus", ratio: 25 },
    { name: "eucalyptus", ratio: 30 },
    { name: "sweet_peas", ratio: 10 }
  ]
}
```

**Process:**
```
Season: spring (Octobre)

Validation:
✅ garden_roses: Available spring (peak months: 9,10,11)
✅ ranunculus: Available spring (peak months: 3,4,5,9,10,11)
✅ eucalyptus: Year-round
✅ sweet_peas: Available spring (peak months: 9,10,11)

Result: ALL VALID - No substitutions needed
```

**Output:**
```javascript
{
  valid: true,
  season: 'spring',
  month: 10,
  results: [
    { flower: 'garden_roses', status: 'OK' },
    { flower: 'ranunculus', status: 'OK' },
    { flower: 'eucalyptus', status: 'OK' },
    { flower: 'sweet_peas', status: 'OK' }
  ],
  substitutions: []
}
```

---

### Scénario 2: Une Fleur Invalide → Substitution 🔄

**Input:**
```javascript
{
  wedding_date: "2026-06-15",  // Juin = Winter (Australia)
  flowers: [
    { name: "peonies", ratio: 40 },        // ❌ Spring only
    { name: "garden_roses", ratio: 30 },   // ✅ Available
    { name: "eucalyptus", ratio: 20 },     // ✅ Year-round
    { name: "sweet_peas", ratio: 10 }      // ❌ Spring only
  ]
}
```

**Process:**
```
Season: winter (Juin)

Validation:
❌ peonies: NOT available winter (available: spring, early_summer)
   → Find substitute: garden_roses (similar lush bloom)

✅ garden_roses: Available winter (year-round availability due to imports)

✅ eucalyptus: Year-round

❌ sweet_peas: NOT available winter (available: spring)
   → Find substitute: hellebores (similar delicate accent flower)
```

**Output:**
```javascript
{
  valid: false,
  season: 'winter',
  month: 6,
  results: [
    {
      flower: 'peonies',
      status: 'INVALID',
      validation: {
        valid: false,
        reason: 'out_of_season',
        available_seasons: ['spring', 'early_summer']
      },
      suggested_substitutes: [
        {
          name: 'garden_roses',
          reason: 'Similar lush romantic focal flower',
          similarity_score: 8,
          price_comparison: 'same_price'
        },
        {
          name: 'ranunculus',
          reason: 'Similar layered petal texture',
          similarity_score: 7,
          price_comparison: 'less_expensive_1_tier'
        }
      ]
    },
    { flower: 'garden_roses', status: 'OK' },
    { flower: 'eucalyptus', status: 'OK' },
    {
      flower: 'sweet_peas',
      status: 'INVALID',
      validation: {
        valid: false,
        reason: 'out_of_season',
        available_seasons: ['spring']
      },
      suggested_substitutes: [
        {
          name: 'hellebores',
          reason: 'Similar delicate accent flower for winter',
          similarity_score: 7,
          price_comparison: 'more_expensive_1_tier'
        }
      ]
    }
  ],
  substitutions_required: 2
}
```

**Prompt Ajustement:**
```
Original Portfolio Profile:
- 40% peonies
- 30% garden roses
- 20% eucalyptus
- 10% sweet peas

Adjusted for Winter Wedding:
- 40% garden roses (substitute for peonies)
- 30% garden roses (original)
- 20% eucalyptus
- 10% hellebores (substitute for sweet peas)

Rationalized:
- 70% garden roses (combined)
- 20% eucalyptus
- 10% hellebores
```

---

### Scénario 3: Shoulder Season (Avertissement) ⚠️

**Input:**
```javascript
{
  wedding_date: "2026-11-30",  // Fin novembre = Transition spring→summer
  flowers: [
    { name: "peonies", ratio: 40 },        // Peak: Oct-Nov (last month)
    { name: "dahlias", ratio: 30 },        // Peak: Dec-Feb (starting)
    { name: "eucalyptus", ratio: 30 }
  ]
}
```

**Process:**
```
Season: late_spring / early_summer (Novembre)
Month: 11

Validation:
⚠️ peonies: SHOULDER SEASON
   Peak months: [10,11,12]
   Month 11 is last peak month
   → Valid but may be expensive / limited availability

⚠️ dahlias: SHOULDER SEASON
   Peak months: [12,1,2,6,7,8]
   Month 11 is shoulder (one month before peak)
   → Valid but early season

✅ eucalyptus: Year-round
```

**Output:**
```javascript
{
  valid: true,
  season: 'late_spring',
  month: 11,
  results: [
    {
      flower: 'peonies',
      status: 'OK',
      validation: {
        valid: true,
        reason: 'peak_month',
        quality: 'peak',
        warning: 'Late in season - limited availability possible'
      }
    },
    {
      flower: 'dahlias',
      status: 'OK',
      validation: {
        valid: true,
        reason: 'shoulder_season',
        quality: 'available',
        warning: 'Early season - may be slightly more expensive'
      }
    },
    { flower: 'eucalyptus', status: 'OK' }
  ],
  warnings: 2
}
```

---

## 🔧 INTÉGRATION DANS PROMPT GENERATOR

### Workflow Complet

```javascript
async function generatePromptWithSeasonalValidation(
  portfolioProfile,
  clientBrief,
  prestation
) {
  // 1. Extract wedding date and determine season
  const weddingDate = new Date(clientBrief.wedding_date);
  const season = determineSeason(weddingDate);
  const month = weddingDate.getMonth() + 1;

  // 2. Extract flowers from portfolio profile
  const portfolioFlowers = portfolioProfile.signature_combinations[0].flowers;

  // 3. Validate each flower
  const validation = await validateComposition(portfolioFlowers, weddingDate);

  // 4. Handle substitutions if needed
  let adjustedFlowers = [...portfolioFlowers];

  if (!validation.valid) {
    for (const result of validation.results) {
      if (result.status === 'INVALID') {
        const substitutes = await findSubstitute(
          result.flower,
          season,
          month
        );

        if (substitutes.length > 0) {
          const bestSubstitute = substitutes[0];

          // Replace in composition
          const index = adjustedFlowers.findIndex(f => f.name === result.flower);
          adjustedFlowers[index] = {
            ...adjustedFlowers[index],
            name: bestSubstitute.name,
            substituted: true,
            original: result.flower,
            reason: bestSubstitute.reason
          };
        }
      }
    }
  }

  // 5. Generate prompt with adjusted flowers
  const prompt = await generatePrompt({
    ...portfolioProfile,
    flowers: adjustedFlowers,
    seasonal_validation: validation
  }, clientBrief, prestation);

  return {
    prompt: prompt,
    validation: validation,
    substitutions: adjustedFlowers.filter(f => f.substituted)
  };
}
```

---

## 📊 REPORTING & ANALYTICS

### Florist Notification Format

```
🌸 SEASONAL VALIDATION REPORT
Wedding Date: June 15, 2026 (Winter)

❌ 2 flowers from your portfolio are not available:

1. Peonies (40% of arrangement)
   → Substituted with: Garden Roses
   Reason: Similar lush romantic bloom, available year-round
   Price: Same tier (Premium)

2. Sweet Peas (10% of arrangement)
   → Substituted with: Hellebores
   Reason: Delicate winter accent flower
   Price: Same tier (Mid-Premium)

✅ 2 flowers validated:
- Garden Roses (available)
- Eucalyptus (year-round)

Would you like to:
[ Approve substitutions ]
[ Manually select alternatives ]
[ Adjust portfolio for winter weddings ]
```

---

## 🚀 PERFORMANCE OPTIMIZATIONS

### Caching Seasonal Data

```javascript
// Cache seasonal flower lists to avoid repeated DB queries
const seasonalCache = new Map();

async function getCachedSeasonalFlowers(season) {
  const cacheKey = `season_${season}`;

  if (seasonalCache.has(cacheKey)) {
    return seasonalCache.get(cacheKey);
  }

  const flowers = await db.query(`
    SELECT * FROM seasonal_flowers
    WHERE $1 = ANY(seasons) OR year_round = TRUE
  `, [season]);

  seasonalCache.set(cacheKey, flowers);

  return flowers;
}
```

### Batch Validation

```javascript
// Validate multiple compositions at once
async function batchValidateCompositions(compositions, weddingDate) {
  const allFlowerNames = [
    ...new Set(
      compositions.flatMap(c => c.flowers.map(f => f.name))
    )
  ];

  // Single query for all flowers
  const flowersData = await db.query(`
    SELECT * FROM seasonal_flowers WHERE flower_name = ANY($1)
  `, [allFlowerNames]);

  const flowersMap = new Map(
    flowersData.map(f => [f.flower_name, f])
  );

  // Validate each composition using cached data
  return compositions.map(comp =>
    validateCompositionWithCache(comp, weddingDate, flowersMap)
  );
}
```

---

**Document Version:** 1.0
**Last Updated:** 2026-02-06
