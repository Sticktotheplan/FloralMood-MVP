# Architecture Technique - FloralMood MVP

**Version:** 1.0
**Date:** 6 février 2026
**Statut:** Architecture Approuvée

---

## 🎯 VUE D'ENSEMBLE

FloralMood est une plateforme SaaS permettant aux fleuristes de générer des moodboards personnalisés pour leurs clients en utilisant l'IA générative, tout en capturant leur style unique via l'analyse de portfolio.

### Stack Technique Recommandé (MVP)

**Frontend:**
- React + TypeScript
- Tailwind CSS
- React Hook Form
- Axios

**Backend:**
- Node.js + Express (ou Next.js API Routes)
- PostgreSQL (base de données)
- Supabase (alternative simplifiée pour MVP)

**AI Services:**
- OpenAI GPT-4 Vision (portfolio analysis)
- OpenAI GPT-4 / Claude Sonnet 4.5 (meta-prompt generation)
- OpenAI DALL-E 3 (image generation)

**Infrastructure:**
- Vercel (frontend + API hosting)
- Supabase (database + storage)
- Cloudinary (image CDN)

---

## 🏗️ ARCHITECTURE SYSTÈME

### Architecture Globale

```
┌──────────────────────────────────────────────────────────────────┐
│                          FRONTEND                                 │
│                      (React + TypeScript)                         │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────┐  ┌──────────────────┐  ┌─────────────────┐ │
│  │  Florist Portal │  │  Client Facing   │  │  Admin Panel    │ │
│  │                 │  │  Moodboard View  │  │                 │ │
│  │ - Portfolio     │  │                  │  │ - Analytics     │ │
│  │   Upload        │  │ - Public Link    │  │ - User Mgmt     │ │
│  │ - Client Brief  │  │ - Interactive    │  │ - Billing       │ │
│  │ - Review/Edit   │  │   Gallery        │  │                 │ │
│  └─────────────────┘  └──────────────────┘  └─────────────────┘ │
│                                                                   │
└────────────────────────────┬──────────────────────────────────────┘
                             │
                             │ HTTPS / REST API
                             ↓
┌──────────────────────────────────────────────────────────────────┐
│                       API LAYER                                   │
│                   (Node.js / Express)                             │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │              CORE SERVICES                                  │  │
│  ├────────────────────────────────────────────────────────────┤  │
│  │                                                             │  │
│  │  ┌──────────────────┐      ┌─────────────────────────┐    │  │
│  │  │  Auth Service    │      │  Portfolio Service      │    │  │
│  │  │                  │      │                         │    │  │
│  │  │ - Login/Signup   │      │ - Upload Images         │    │  │
│  │  │ - JWT Tokens     │      │ - Trigger GPT-4 Vision  │    │  │
│  │  │ - Permissions    │      │ - Store Profile         │    │  │
│  │  └──────────────────┘      └─────────────────────────┘    │  │
│  │                                                             │  │
│  │  ┌──────────────────────────────────────────────────────┐  │  │
│  │  │         Moodboard Generation Service                 │  │  │
│  │  │                                                       │  │  │
│  │  │  1. Receive Client Brief                             │  │  │
│  │  │  2. Load Portfolio Profile                           │  │  │
│  │  │  3. Seasonal Validation                              │  │  │
│  │  │  4. Meta-Prompt Generation (GPT-4/Claude)            │  │  │
│  │  │  5. Image Generation (DALL-E 3)                      │  │  │
│  │  │  6. Store & Return Moodboard                         │  │  │
│  │  │                                                       │  │  │
│  │  └──────────────────────────────────────────────────────┘  │  │
│  │                                                             │  │
│  │  ┌──────────────────┐      ┌─────────────────────────┐    │  │
│  │  │  Email Service   │      │  Billing Service        │    │  │
│  │  │                  │      │                         │    │  │
│  │  │ - SendGrid       │      │ - Stripe Integration    │    │  │
│  │  │ - Notifications  │      │ - Subscription Mgmt     │    │  │
│  │  └──────────────────┘      └─────────────────────────┘    │  │
│  │                                                             │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                   │
└────────────────────────────┬──────────────────────────────────────┘
                             │
                             ↓
┌──────────────────────────────────────────────────────────────────┐
│                    DATA LAYER                                     │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐     │
│  │  PostgreSQL Database (Supabase)                         │     │
│  │                                                          │     │
│  │  Tables:                                                 │     │
│  │  - users                                                 │     │
│  │  - florists                                              │     │
│  │  - florist_style_profile                                 │     │
│  │  - seasonal_flowers                                      │     │
│  │  - validated_combinations                                │     │
│  │  - moodboards                                            │     │
│  │  - moodboard_images                                      │     │
│  │  - generated_prompts                                     │     │
│  │  - subscriptions                                         │     │
│  │                                                          │     │
│  └──────────────────────────────────────────────────────────┘     │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │  Object Storage (Cloudinary / Supabase Storage)          │    │
│  │                                                           │    │
│  │  - Portfolio Images                                      │    │
│  │  - Generated AI Images                                   │    │
│  │  - User Uploads                                          │    │
│  │                                                           │    │
│  └───────────────────────────────────────────────────────────┘   │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                   EXTERNAL SERVICES                               │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────┐  ┌─────────┐ │
│  │   OpenAI    │  │  Stripe      │  │ SendGrid   │  │ Vercel  │ │
│  │             │  │              │  │            │  │         │ │
│  │ - GPT-4     │  │ - Payments   │  │ - Emails   │  │ - Host  │ │
│  │ - DALL-E 3  │  │ - Webhooks   │  │ - Templates│  │ - CDN   │ │
│  └─────────────┘  └──────────────┘  └────────────┘  └─────────┘ │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

---

## 📊 SCHÉMA BASE DE DONNÉES

Voir le fichier `seasonal_flowers_schema.sql` pour le schéma SQL complet.

### Tables Principales

- `users` - Authentication et profils utilisateurs
- `florists` - Profils fleuristes et abonnements
- `florist_style_profile` - Analyses de portfolio (GPT-4 Vision)
- `seasonal_flowers` - Base de données complète de fleurs saisonnières
- `validated_combinations` - Combinaisons florales pré-testées
- `moodboards` - Moodboards générés
- `moodboard_images` - Images individuelles par prestation
- `generated_prompts` - Historique des prompts pour analytics
- `subscriptions` - Gestion Stripe

---

## 🔄 META-PROMPT SYSTEM ARCHITECTURE

### Workflow Complet

```
INPUT:
  - Portfolio Profile (from florist_style_profile table)
  - Client Brief (wedding date, style, colors)
  - Prestation Type (ceremony_arch, bridal_bouquet, etc.)

                            ↓

┌────────────────────────────────────────────────────────────────┐
│  STEP 1: SEASONAL VALIDATION SERVICE                           │
│                                                                 │
│  seasonal_validation.js                                         │
│  ├─ determineSeason(weddingDate) → 'summer'                    │
│  ├─ validateComposition(flowers, season)                       │
│  ├─ findSubstitutes(invalidFlowers, season)                    │
│  └─ return { validatedFlowers, substitutions }                 │
│                                                                 │
└────────────────────────────────────────────────────────────────┘

                            ↓

┌────────────────────────────────────────────────────────────────┐
│  STEP 2: PROMPT GENERATOR AGENT (GPT-4 / Claude Sonnet 4.5)   │
│                                                                 │
│  prompt_generator.js                                            │
│  ├─ loadTemplate(prestationType)                               │
│  ├─ injectPortfolioStyle(template, portfolioProfile)           │
│  ├─ applyRules(rulesDatabase, season, style)                   │
│  ├─ generatePrompt(context)                                    │
│  └─ return { prompt, negativePrompt, qualityScore }            │
│                                                                 │
│  Uses:                                                          │
│  - prompt_templates.md (template base)                         │
│  - prompt_rules_database.json (photography, composition rules) │
│                                                                 │
└────────────────────────────────────────────────────────────────┘

                            ↓

┌────────────────────────────────────────────────────────────────┐
│  STEP 3: QUALITY VALIDATOR                                     │
│                                                                 │
│  quality_validator.js                                           │
│  ├─ checkSpecificityScore(prompt) → 87%                        │
│  ├─ validateSeasonalFlowers(prompt, season) → PASS             │
│  ├─ validatePhotographyRules(prompt) → PASS                    │
│  ├─ checkForbiddenKeywords(prompt) → PASS                      │
│  └─ return { valid: true, score: 92, warnings: [] }            │
│                                                                 │
└────────────────────────────────────────────────────────────────┘

                            ↓

┌────────────────────────────────────────────────────────────────┐
│  STEP 4: IMAGE GENERATION (DALL-E 3)                           │
│                                                                 │
│  image_generator.js                                             │
│  ├─ callDallE3API(prompt, negativePrompt)                      │
│  ├─ uploadToCloudinary(imageUrl)                               │
│  ├─ saveToDatabase(image, metadata)                            │
│  └─ return { imageUrl, cost, metadata }                        │
│                                                                 │
└────────────────────────────────────────────────────────────────┘

                            ↓

OUTPUT:
  - Generated Image URL
  - Prompt Used
  - Quality Score
  - Cost Breakdown
```

Voir `meta_prompt_system.md` pour la documentation complète.

---

## 🌐 API ENDPOINTS

### Auth Endpoints

```
POST   /api/auth/signup
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me
POST   /api/auth/forgot-password
POST   /api/auth/reset-password
```

### Portfolio Endpoints

```
POST   /api/portfolio/upload          # Upload 5-15 images
GET    /api/portfolio/:florist_id     # Get portfolio profile
POST   /api/portfolio/analyze         # Trigger GPT-4 Vision analysis
PATCH  /api/portfolio/confirm         # Florist confirms analysis
```

### Moodboard Endpoints

```
POST   /api/moodboard/generate        # Generate new moodboard
GET    /api/moodboard/:id             # Get moodboard details
GET    /api/moodboard/public/:token   # Public view (client)
PATCH  /api/moodboard/:id/approve     # Florist approves
POST   /api/moodboard/:id/send        # Send to client via email
POST   /api/moodboard/:id/regenerate  # Regenerate specific image
DELETE /api/moodboard/:id             # Delete moodboard
```

### Flowers & Combinations

```
GET    /api/flowers                   # Get all seasonal flowers
GET    /api/flowers/season/:season    # Get flowers by season
GET    /api/combinations              # Get validated combinations
GET    /api/combinations/:id          # Get specific combination
```

### Billing Endpoints

```
POST   /api/billing/create-checkout   # Stripe checkout session
POST   /api/billing/webhook            # Stripe webhook handler
GET    /api/billing/subscription       # Get current subscription
POST   /api/billing/cancel             # Cancel subscription
```

---

## 🚀 DEPLOYMENT

### Infrastructure

**Frontend:**
- Vercel (auto-deploy from GitHub)
- Environment: Production, Preview, Development

**Backend:**
- Vercel Serverless Functions (or Railway/Render for dedicated backend)

**Database:**
- Supabase (PostgreSQL + Auth + Storage)
- Auto-backups enabled

**CDN:**
- Cloudinary for images
- Vercel Edge Network for assets

---

## 🔧 MCP TOOLS INTEGRATION

### Notion MCP

**Usage:**
- Documentation hub
- Feature tracking
- Validated combinations gallery

Voir `notion_setup_guide.md` pour instructions complètes.

### n8n Workflow MCP

**Usage:**
- Prototype automation workflows
- Testing API integrations
- Mock backend for frontend development

Voir `n8n_workflow_prototype.json` pour le workflow complet.

---

## ✅ MVP ARCHITECTURE CHECKLIST

**Core Features:**
- [ ] User authentication (JWT)
- [ ] Portfolio upload (5-15 images)
- [ ] GPT-4 Vision analysis
- [ ] Portfolio profile storage
- [ ] Client brief form
- [ ] Seasonal validation
- [ ] Meta-prompt generation
- [ ] DALL-E 3 image generation
- [ ] Moodboard gallery
- [ ] Public link sharing
- [ ] Email notifications
- [ ] Stripe subscription

**Database:**
- [ ] Schema implemented (SQL)
- [ ] Seasonal flowers populated (50+)
- [ ] Validated combinations imported (20)
- [ ] Indexes created
- [ ] Migrations setup

**AI Integration:**
- [ ] OpenAI API setup
- [ ] Portfolio analyzer working
- [ ] Prompt generator working
- [ ] Quality validator working
- [ ] Cost tracking

**Deployment:**
- [ ] Frontend deployed to Vercel
- [ ] Backend deployed
- [ ] Database on Supabase
- [ ] Cloudinary configured
- [ ] Environment variables set
- [ ] CI/CD pipeline

---

**Document Version:** 1.0
**Last Updated:** 2026-02-06
**Status:** Approved for Implementation
