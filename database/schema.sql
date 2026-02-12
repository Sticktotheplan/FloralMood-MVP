-- FloralMood MVP - Database Schema
-- Seasonal Flowers & Validated Combinations
-- Version: 1.0
-- Date: 2026-02-12

-- ============================================================================
-- TABLE 1: seasonal_flowers
-- Stores comprehensive flower database with seasonal availability
-- ============================================================================

CREATE TABLE IF NOT EXISTS seasonal_flowers (
  id SERIAL PRIMARY KEY,

  -- Flower Identification
  flower_name VARCHAR(100) NOT NULL UNIQUE,
  scientific_name VARCHAR(150),
  common_names TEXT[], -- Alternative names: ['Baby's Breath', 'Gypsophila']

  -- Seasonal Availability
  seasons TEXT[] NOT NULL CHECK (seasons <@ ARRAY['spring', 'summer', 'autumn', 'winter']),
  peak_months INTEGER[] CHECK (
    array_length(peak_months, 1) > 0 AND
    peak_months <@ ARRAY[1,2,3,4,5,6,7,8,9,10,11,12]
  ),
  year_round BOOLEAN DEFAULT FALSE,

  -- Classification
  role VARCHAR(50) NOT NULL CHECK (role IN ('focal', 'filler', 'foliage', 'accent', 'structural')),

  -- Visual Properties
  color_variants TEXT[] NOT NULL,
  bloom_size VARCHAR(30) CHECK (bloom_size IN ('tiny', 'small', 'medium', 'large', 'extra_large')),
  texture VARCHAR(50),

  -- Pricing & Availability
  price_tier VARCHAR(20) NOT NULL CHECK (price_tier IN ('budget', 'mid', 'premium', 'luxury')),
  availability_region VARCHAR(50) DEFAULT 'australia_wide',
  import_required BOOLEAN DEFAULT FALSE,

  -- Usage Notes
  vase_life_days INTEGER,
  fragrance_level VARCHAR(20) CHECK (fragrance_level IN ('none', 'mild', 'moderate', 'strong')),
  toxicity_warning BOOLEAN DEFAULT FALSE,

  -- Style Associations
  style_tags TEXT[],

  -- Metadata
  notes TEXT,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_seasonal_flowers_seasons ON seasonal_flowers USING GIN (seasons);
CREATE INDEX IF NOT EXISTS idx_seasonal_flowers_peak_months ON seasonal_flowers USING GIN (peak_months);
CREATE INDEX IF NOT EXISTS idx_seasonal_flowers_role ON seasonal_flowers (role);
CREATE INDEX IF NOT EXISTS idx_seasonal_flowers_price_tier ON seasonal_flowers (price_tier);
CREATE INDEX IF NOT EXISTS idx_seasonal_flowers_style_tags ON seasonal_flowers USING GIN (style_tags);

-- Sample Data Insert
INSERT INTO seasonal_flowers (
  flower_name, scientific_name, common_names, seasons, peak_months, year_round,
  role, color_variants, bloom_size, texture, price_tier, availability_region,
  vase_life_days, fragrance_level, style_tags
) VALUES
  -- FOCAL FLOWERS
  ('garden_roses', 'Rosa (Garden varieties)', ARRAY['Garden Rose', 'Cabbage Rose'],
   ARRAY['spring', 'summer', 'autumn'], ARRAY[3,4,5,6,7,8,9,10], FALSE,
   'focal', ARRAY['blush', 'white', 'ivory', 'coral', 'burgundy', 'peach'], 'large', 'layered_ruffled',
   'premium', 'australia_wide', 7, 'moderate', ARRAY['romantic', 'garden', 'classic', 'luxe']),

  ('peonies', 'Paeonia', ARRAY['Peony'],
   ARRAY['spring', 'summer'], ARRAY[4,5,6], FALSE,
   'focal', ARRAY['blush', 'white', 'coral', 'burgundy'], 'extra_large', 'lush_ruffled',
   'luxury', 'australia_wide', 5, 'mild', ARRAY['romantic', 'garden', 'luxe']),

  ('dahlias', 'Dahlia', ARRAY['Dahlia'],
   ARRAY['summer', 'autumn'], ARRAY[6,7,8,9,10], FALSE,
   'focal', ARRAY['burgundy', 'coral', 'peach', 'white', 'yellow', 'pink'], 'large', 'layered_geometric',
   'premium', 'australia_wide', 7, 'none', ARRAY['romantic', 'rustic', 'garden', 'boho']),

  ('ranunculus', 'Ranunculus asiaticus', ARRAY['Ranunculus', 'Persian Buttercup'],
   ARRAY['winter', 'spring', 'summer'], ARRAY[12,1,2,3,4,5,6], FALSE,
   'focal', ARRAY['white', 'blush', 'coral', 'burgundy', 'yellow'], 'medium', 'layered_delicate',
   'mid', 'australia_wide', 10, 'none', ARRAY['romantic', 'garden', 'classic']),

  -- FOLIAGE
  ('eucalyptus', 'Eucalyptus (mixed varieties)', ARRAY['Eucalyptus', 'Gum Leaves'],
   ARRAY['spring', 'summer', 'autumn', 'winter'], ARRAY[1,2,3,4,5,6,7,8,9,10,11,12], TRUE,
   'foliage', ARRAY['sage_green', 'silver_green', 'blue_green'], NULL, 'soft_matte',
   'mid', 'australia_wide', 14, 'moderate', ARRAY['romantic', 'modern', 'rustic', 'garden', 'boho']),

  ('silver_dollar_eucalyptus', 'Eucalyptus cinerea', ARRAY['Silver Dollar Eucalyptus'],
   ARRAY['spring', 'summer', 'autumn', 'winter'], ARRAY[1,2,3,4,5,6,7,8,9,10,11,12], TRUE,
   'foliage', ARRAY['silver', 'blue_grey'], NULL, 'metallic_matte',
   'mid', 'australia_wide', 14, 'mild', ARRAY['modern', 'luxe', 'romantic']),

  -- ACCENT FLOWERS
  ('tweedia', 'Oxypetalum coeruleum', ARRAY['Tweedia', 'Blue Star'],
   ARRAY['spring', 'summer'], ARRAY[3,4,5,6,7,8], FALSE,
   'accent', ARRAY['soft_blue', 'light_blue'], 'small', 'star_shaped_delicate',
   'mid', 'australia_wide', 7, 'none', ARRAY['romantic', 'garden', 'boho']),

  ('baby_breath', 'Gypsophila', ARRAY['Baby''s Breath', 'Gypsophila'],
   ARRAY['spring', 'summer', 'autumn', 'winter'], ARRAY[1,2,3,4,5,6,7,8,9,10,11,12], TRUE,
   'filler', ARRAY['white', 'blush'], 'tiny', 'cloud_like_delicate',
   'budget', 'australia_wide', 10, 'none', ARRAY['romantic', 'rustic', 'boho', 'classic'])
ON CONFLICT (flower_name) DO NOTHING;

-- ============================================================================
-- TABLE 2: validated_combinations
-- Stores pre-tested floral combinations that work well together
-- ============================================================================

CREATE TABLE IF NOT EXISTS validated_combinations (
  id SERIAL PRIMARY KEY,

  -- Combination Identity
  name VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,

  -- Style & Aesthetics
  style_tags TEXT[] NOT NULL,
  arrangement_style VARCHAR(50),
  color_palette TEXT[] NOT NULL,

  -- Seasonal Applicability
  seasons TEXT[] NOT NULL CHECK (seasons <@ ARRAY['spring', 'summer', 'autumn', 'winter']),

  -- Floral Composition (JSONB for flexibility)
  flowers JSONB NOT NULL,

  -- Note: Ratio validation (sum = 100) enforced at application level
  -- PostgreSQL CHECK constraints cannot use subqueries

  -- Arrangement Details
  foliage_density VARCHAR(30),
  arrangement_density VARCHAR(30),

  -- Pricing
  price_range VARCHAR(30),
  estimated_cost_per_arrangement DECIMAL(10,2),

  -- Reference Materials
  photo_reference_url TEXT,
  inspiration_source TEXT,

  -- Usage Recommendations
  best_for_prestations TEXT[],
  venue_types TEXT[],

  -- Metadata
  created_by VARCHAR(100),
  popularity_score INTEGER DEFAULT 0,
  success_rate DECIMAL(3,2) DEFAULT 1.00,

  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_validated_combinations_seasons ON validated_combinations USING GIN (seasons);
CREATE INDEX IF NOT EXISTS idx_validated_combinations_style_tags ON validated_combinations USING GIN (style_tags);
CREATE INDEX IF NOT EXISTS idx_validated_combinations_prestations ON validated_combinations USING GIN (best_for_prestations);
CREATE INDEX IF NOT EXISTS idx_validated_combinations_flowers ON validated_combinations USING GIN (flowers);

-- ============================================================================
-- TABLE 3: florist_style_profile
-- Stores analyzed portfolio data for each florist
-- ============================================================================

CREATE TABLE IF NOT EXISTS florist_style_profile (
  id SERIAL PRIMARY KEY,
  florist_id VARCHAR(100) NOT NULL UNIQUE,

  -- Portfolio Analysis Results (from GPT-4 Vision)
  portfolio_analysis JSONB NOT NULL,
  portfolio_image_urls TEXT[],
  portfolio_image_count INTEGER,

  -- Style Summary
  primary_style_tags TEXT[],
  arrangement_style_preference VARCHAR(50),
  color_palette_hex TEXT[],

  -- Analysis Metadata
  analyzed_at TIMESTAMP,
  analysis_version VARCHAR(20),
  analysis_confidence DECIMAL(3,2),

  -- Florist Confirmation
  florist_confirmed BOOLEAN DEFAULT FALSE,
  florist_adjustments JSONB,

  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_florist_style_profile_florist_id ON florist_style_profile (florist_id);

-- ============================================================================
-- TABLE 4: generated_prompts
-- Stores generated prompts for analytics and fine-tuning
-- ============================================================================

CREATE TABLE IF NOT EXISTS generated_prompts (
  id SERIAL PRIMARY KEY,

  -- Context
  florist_id VARCHAR(100) NOT NULL,
  moodboard_id VARCHAR(100),
  prestation_type VARCHAR(50) NOT NULL,

  -- Input Data
  client_brief JSONB,
  portfolio_profile_used JSONB,

  -- Generated Prompt
  prompt_text TEXT NOT NULL,
  negative_prompt TEXT NOT NULL,

  -- Metadata
  generation_model VARCHAR(50),
  rules_version VARCHAR(20),
  template_version VARCHAR(20),

  -- Quality Metrics
  quality_score INTEGER,
  specificity_score INTEGER,

  -- Image Generation
  image_model VARCHAR(50),
  image_url TEXT,
  image_generation_cost DECIMAL(10,4),

  -- Florist Feedback
  florist_approved BOOLEAN,
  florist_rating INTEGER CHECK (florist_rating BETWEEN 1 AND 5),
  florist_feedback TEXT,
  regeneration_requested BOOLEAN DEFAULT FALSE,

  -- Usage
  used_in_final_moodboard BOOLEAN DEFAULT FALSE,

  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_generated_prompts_florist_id ON generated_prompts (florist_id);
CREATE INDEX IF NOT EXISTS idx_generated_prompts_prestation_type ON generated_prompts (prestation_type);
CREATE INDEX IF NOT EXISTS idx_generated_prompts_florist_approved ON generated_prompts (florist_approved);
CREATE INDEX IF NOT EXISTS idx_generated_prompts_created_at ON generated_prompts (created_at);

-- ============================================================================
-- HELPER FUNCTIONS
-- ============================================================================

-- Function: Get flowers available for a specific season
CREATE OR REPLACE FUNCTION get_seasonal_flowers(season_name TEXT)
RETURNS TABLE (
  flower_name VARCHAR(100),
  role VARCHAR(50),
  color_variants TEXT[],
  price_tier VARCHAR(20)
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    sf.flower_name,
    sf.role,
    sf.color_variants,
    sf.price_tier
  FROM seasonal_flowers sf
  WHERE season_name = ANY(sf.seasons)
  ORDER BY
    CASE sf.role
      WHEN 'focal' THEN 1
      WHEN 'filler' THEN 2
      WHEN 'accent' THEN 3
      WHEN 'foliage' THEN 4
      WHEN 'structural' THEN 5
    END,
    sf.flower_name;
END;
$$ LANGUAGE plpgsql;

-- Function: Get flowers available for a specific month
CREATE OR REPLACE FUNCTION get_flowers_for_month(month_number INTEGER)
RETURNS TABLE (
  flower_name VARCHAR(100),
  role VARCHAR(50),
  seasons TEXT[],
  price_tier VARCHAR(20)
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    sf.flower_name,
    sf.role,
    sf.seasons,
    sf.price_tier
  FROM seasonal_flowers sf
  WHERE month_number = ANY(sf.peak_months) OR sf.year_round = TRUE
  ORDER BY sf.role, sf.flower_name;
END;
$$ LANGUAGE plpgsql;

-- Function: Get validated combinations for style and season
CREATE OR REPLACE FUNCTION get_combinations_for_style_season(
  style_tag TEXT,
  season_name TEXT
)
RETURNS TABLE (
  id INTEGER,
  name VARCHAR(100),
  color_palette TEXT[],
  flowers JSONB,
  price_range VARCHAR(30)
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    vc.id,
    vc.name,
    vc.color_palette,
    vc.flowers,
    vc.price_range
  FROM validated_combinations vc
  WHERE
    style_tag = ANY(vc.style_tags)
    AND season_name = ANY(vc.seasons)
  ORDER BY vc.popularity_score DESC, vc.success_rate DESC
  LIMIT 10;
END;
$$ LANGUAGE plpgsql;

-- Function: Validate flower availability for season
CREATE OR REPLACE FUNCTION validate_flower_for_season(
  flower_name_input VARCHAR(100),
  season_name TEXT
)
RETURNS BOOLEAN AS $$
DECLARE
  is_available BOOLEAN;
BEGIN
  SELECT EXISTS (
    SELECT 1 FROM seasonal_flowers sf
    WHERE sf.flower_name = flower_name_input
    AND (season_name = ANY(sf.seasons) OR sf.year_round = TRUE)
  ) INTO is_available;

  RETURN is_available;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- TRIGGERS
-- ============================================================================

-- Validate flowers ratio sum = 100
CREATE OR REPLACE FUNCTION validate_flowers_ratio()
RETURNS TRIGGER AS $$
DECLARE
  ratio_sum INTEGER;
BEGIN
  -- Calculate sum of all ratios in flowers JSONB array
  SELECT SUM((value->>'ratio')::int)
  INTO ratio_sum
  FROM jsonb_array_elements(NEW.flowers);

  -- Check if sum equals 100
  IF ratio_sum != 100 THEN
    RAISE EXCEPTION 'Flowers ratios must sum to 100, got %', ratio_sum;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER validate_combination_ratios
  BEFORE INSERT OR UPDATE ON validated_combinations
  FOR EACH ROW
  EXECUTE FUNCTION validate_flowers_ratio();

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_seasonal_flowers_updated_at
  BEFORE UPDATE ON seasonal_flowers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_validated_combinations_updated_at
  BEFORE UPDATE ON validated_combinations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_florist_style_profile_updated_at
  BEFORE UPDATE ON florist_style_profile
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- END OF SCHEMA
-- ============================================================================
