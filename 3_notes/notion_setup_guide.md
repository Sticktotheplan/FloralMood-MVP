# Guide de Setup Notion - FloralMood MVP

**Version:** 1.0
**Date:** 6 février 2026

---

## 🎯 OBJECTIF

Créer un workspace Notion centralisé pour gérer toute la documentation, les combinaisons florales, les templates de prompts, et le suivi de développement du projet FloralMood.

---

## 📦 STRUCTURE DU WORKSPACE

```
FloralMood MVP Workspace
│
├── 🏠 Home (Dashboard)
├── 📚 Documentation
│   ├── Vision & Scope
│   ├── Architecture Technique
│   ├── Meta-Prompt System
│   └── API Documentation
│
├── 🌸 Floral Database
│   ├── Seasonal Flowers (Database)
│   ├── Validated Combinations (Gallery)
│   └── Substitution Rules
│
├── 📝 Prompt Engineering
│   ├── Prompt Templates (Table)
│   ├── Rules Database
│   └── Example Prompts (Gallery)
│
├── 🚀 Product Development
│   ├── Features (Kanban)
│   ├── User Stories
│   └── Technical Specs
│
├── 🐛 Issues & Bugs
├── 📊 Analytics & Metrics
└── 📖 Meeting Notes

```

---

## 🛠️ SETUP ÉTAPE PAR ÉTAPE

### Étape 1: Créer le Workspace

1. Aller sur [notion.so](https://notion.so)
2. Cliquer sur **"+ New workspace"**
3. Nommer: **"FloralMood MVP"**
4. Choisir icône: 🌸 ou 💐
5. Inviter membres de l'équipe si nécessaire

---

### Étape 2: Créer la Page Home (Dashboard)

**Template:**

```markdown
# 🌸 FloralMood MVP - Command Center

**Last Updated:** [Auto-update]
**Project Status:** 🟢 In Development

---

## 📊 Quick Stats

| Metric | Value |
|--------|-------|
| Documents | [[Count from Documentation]] |
| Validated Combinations | [[Count from Floral Database]] |
| Prompt Templates | [[Count from Templates]] |
| Open Issues | [[Count from Issues]] |
| Completed Features | [[Count from Features where Status = Done]] |

---

## 🎯 Current Sprint Focus

- [ ] Complete Meta-Prompt System Implementation
- [ ] Import Seasonal Flowers Database
- [ ] Create 20 Validated Combinations
- [ ] Setup n8n Prototype Workflow

---

## 🔗 Quick Links

→ [[Vision & Scope]]
→ [[Architecture Documentation]]
→ [[Validated Combinations Gallery]]
→ [[Prompt Templates]]
→ [[Features Kanban]]

---

## 📅 Upcoming Milestones

- **Feb 10**: Complete Round 1 (Conception)
- **Feb 17**: Finish Round 2 (Architecture Technique)
- **Mar 1**: MVP Development Start

---

## 📝 Recent Updates

[Automatically pulled from Meeting Notes]
```

**How to Create:**
1. Create new page: "Home"
2. Add icon: 🌸
3. Copy template above
4. Add linked databases (will create in next steps)

---

### Étape 3: Setup Documentation Database

**Create Database:**
1. Create new page: "Documentation"
2. Click **"Table - Inline"**
3. Name: "Documentation Hub"

**Properties:**

| Property | Type | Options/Description |
|----------|------|---------------------|
| Title | Title | Document name |
| Category | Select | Vision, Architecture, System, API, Guide |
| Status | Select | Draft, In Review, Approved, Archived |
| Owner | Person | Document owner |
| Last Updated | Last Edited Time | Auto |
| Tags | Multi-select | MVP, Technical, Business, Design |
| Related Features | Relation | Links to Features database |

**Initial Documents to Add:**

1. **Vision & Scope**
   - Import from: `3_notes/vision_et_scope.md`
   - Category: Vision
   - Status: Approved

2. **Meta-Prompt System**
   - Import from: `3_notes/meta_prompt_system.md`
   - Category: System
   - Status: Approved

3. **Architecture Technique**
   - Import from: `3_notes/architecture.md` (will create)
   - Category: Architecture
   - Status: In Review

4. **Seasonal Validation Logic**
   - Import from: `3_notes/seasonal_validation_logic.md`
   - Category: System
   - Status: Approved

5. **Prompt Templates**
   - Import from: `3_notes/prompt_templates.md`
   - Category: Guide
   - Status: Approved

**How to Import:**
1. Click **"+ New"** in database
2. Copy-paste markdown content
3. Set properties

---

### Étape 4: Setup Floral Database

#### 4A: Seasonal Flowers Database

**Create Database:**
1. Create new page: "Seasonal Flowers"
2. Click **"Table - Full page"**

**Properties:**

| Property | Type | Options/Description |
|----------|------|---------------------|
| Flower Name | Title | Primary name |
| Scientific Name | Text | Latin name |
| Seasons | Multi-select | Spring, Summer, Autumn, Winter |
| Peak Months | Multi-select | Jan, Feb, Mar, ... Dec |
| Year-Round | Checkbox | TRUE if always available |
| Role | Select | Focal, Filler, Foliage, Accent, Structural |
| Color Variants | Multi-select | Blush, White, Burgundy, etc. |
| Price Tier | Select | Budget, Mid, Premium, Luxury |
| Bloom Size | Select | Tiny, Small, Medium, Large, Extra Large |
| Vase Life (days) | Number | Average days |
| Image | Files & Media | Photo reference |

**Sample Entries:**

```
Garden Roses
- Scientific: Rosa (Garden varieties)
- Seasons: Spring, Summer, Autumn
- Peak Months: Mar, Apr, May, Jun, Jul, Aug, Sep, Oct
- Role: Focal
- Colors: Blush, White, Ivory, Coral, Burgundy
- Price Tier: Premium
- Bloom Size: Large
- Vase Life: 7 days

Eucalyptus
- Scientific: Eucalyptus (mixed)
- Seasons: All (Year-Round ✓)
- Role: Foliage
- Colors: Sage Green, Silver Green
- Price Tier: Mid
- Vase Life: 14 days

Peonies
- Scientific: Paeonia
- Seasons: Spring, Summer
- Peak Months: Apr, May, Jun
- Role: Focal
- Colors: Blush, White, Coral, Burgundy
- Price Tier: Luxury
- Bloom Size: Extra Large
- Vase Life: 5 days
```

**Views to Create:**

1. **All Flowers** (Table) - Default
2. **By Season** (Board) - Group by Seasons
3. **By Role** (Board) - Group by Role
4. **Gallery View** - Show images, sort by popularity

---

#### 4B: Validated Combinations Gallery

**Create Database:**
1. Create new page: "Validated Combinations"
2. Click **"Gallery - Full page"**

**Properties:**

| Property | Type | Options/Description |
|----------|------|---------------------|
| Name | Title | Combination name |
| Description | Text | Short description |
| Seasons | Multi-select | Spring, Summer, Autumn, Winter |
| Style Tags | Multi-select | Romantic, Modern, Rustic, etc. |
| Arrangement Style | Select | Loose Organic, Lush Full, etc. |
| Color Palette | Multi-select | Blush, Ivory, Burgundy, etc. |
| Price Range | Select | Budget, Mid, Premium, Luxury |
| Flowers (JSON) | Text | JSON of flower composition |
| Photo Reference | Files & Media | Image |
| Best For Prestations | Multi-select | Ceremony Arch, Bouquet, etc. |
| Venue Types | Multi-select | Garden, Ballroom, Beach, etc. |
| Popularity Score | Number | Usage count |
| Success Rate | Number | Florist approval % |

**Import from JSON:**
1. Open `3_notes/validated_combinations.json`
2. For each combination (1-20):
   - Click **"+ New"**
   - Fill properties from JSON
   - Upload photo reference (if available)

**Example Entry:**

```
Classic Spring Garden
- Description: Timeless spring combination featuring soft pastels
- Seasons: Spring
- Style Tags: Romantic, Garden, Classic, Soft
- Arrangement Style: Loose Organic
- Color Palette: Soft Pink, Blush, White, Lavender, Sage Green
- Price Range: Mid-Premium
- Flowers: [Paste JSON]
- Best For: Ceremony Arch, Bridal Bouquet, Centerpiece Low, Aisle Markers
- Venue Types: Garden, Outdoor, Chapel, Vineyard
- Photo Reference: [Upload image]
```

**Views to Create:**

1. **Gallery View** (Default) - Show photos
2. **By Season** (Board) - Group by Seasons
3. **By Style** (Board) - Group by Style Tags
4. **By Price** (Table) - Sort by Price Range

---

### Étape 5: Setup Prompt Engineering Hub

#### 5A: Prompt Templates Database

**Create Database:**
1. Create new page: "Prompt Templates"
2. Click **"Table - Full page"**

**Properties:**

| Property | Type | Options/Description |
|----------|------|---------------------|
| Prestation Type | Title | ceremony_arch, bridal_bouquet, etc. |
| Template | Text (long) | Full prompt template with variables |
| Variables | Multi-select | All {VARIABLES} used |
| Example Output | Text (long) | Generated prompt example |
| Negative Prompt Template | Text | Negative prompt |
| Quality Score Target | Number | Target score (80-100) |
| Last Updated | Last Edited Time | Auto |
| Status | Select | Draft, Tested, Approved |

**Import from:**
`3_notes/prompt_templates.md`

**Sample Entry:**

```
Ceremony Arch - Full Coverage
- Template: [Copy from prompt_templates.md]
- Variables: LOCATION, ARCH_STRUCTURE, STYLE, FLOWER_1_PERCENTAGE, ...
- Example Output: [Copy example from prompt_templates.md]
- Negative Prompt: no CGI, no 3D render, no perfect symmetry, ...
- Quality Score Target: 90
- Status: Approved
```

---

#### 5B: Prompt Rules Database

**Create Page:**
1. Create new page: "Prompt Rules Database"
2. Import content from `3_notes/prompt_rules_database.json`
3. Format as toggle lists or tables for easy reference

**Structure:**

```markdown
# Prompt Rules Database

## Photography Rules

### Realistic Prefixes
- Real photograph from
- Documentary photo of
- Candid shot during
[...]

### Camera Specs
- Nikon D850 natural bokeh
- Canon 5D Mark IV 50mm lens f/1.8
[...]

## Composition Rules

### Specificity Ratios
- Always use percentages for flower distribution
- Specify exact placements
[...]

## Seasonal Rules

### Spring
**Include:** tulips, peonies, ranunculus, sweet peas
**Exclude:** sunflowers, dahlias, amaranthus
**Colors:** pastels, soft pinks, lavenders

[...]
```

---

### Étape 6: Setup Features Kanban

**Create Database:**
1. Create new page: "Features"
2. Click **"Board - Full page"**
3. Group by: Status

**Properties:**

| Property | Type | Options/Description |
|----------|------|---------------------|
| Feature | Title | Feature name |
| Description | Text | Detailed description |
| Status | Select | Backlog, To Do, In Progress, Review, Done |
| Priority | Select | P0 (Critical), P1 (High), P2 (Medium), P3 (Low) |
| Round | Select | Round 1, Round 2, Round 3, Round 4 |
| Owner | Person | Assigned to |
| Effort (hours) | Number | Estimated hours |
| Related Docs | Relation | Links to Documentation |
| Tags | Multi-select | Frontend, Backend, AI, Database, Design |

**Status Columns:**
1. 📋 Backlog
2. 📝 To Do
3. 🏗️ In Progress
4. 👀 Review
5. ✅ Done

**Initial Features to Add:**

```
Round 1: Conception & Decisions
- [Done] Define vision & scope
- [Done] Meta-prompt system architecture
- [Done] Seasonal flowers database schema
- [Done] Create validated combinations
- [In Progress] Notion setup

Round 2: Architecture Technique
- [To Do] Frontend architecture design
- [To Do] Backend API design
- [To Do] Database implementation
- [To Do] AI integration architecture

Round 3: Développement MVP
- [Backlog] Portfolio upload interface
- [Backlog] Client brief form
- [Backlog] Meta-prompt agent implementation
- [Backlog] DALL-E 3 integration
[...]
```

---

### Étape 7: Setup Issues & Bugs Database

**Create Database:**
1. Create new page: "Issues & Bugs"
2. Click **"Table - Full page"**

**Properties:**

| Property | Type | Options/Description |
|----------|------|---------------------|
| Issue | Title | Issue title |
| Type | Select | Bug, Question, Enhancement, Task |
| Status | Select | Open, In Progress, Resolved, Closed |
| Priority | Select | Critical, High, Medium, Low |
| Assignee | Person | Who's working on it |
| Created | Created Time | Auto |
| Resolved | Date | Resolution date |
| Related Feature | Relation | Link to Features |

---

### Étape 8: Setup Meeting Notes

**Create Database:**
1. Create new page: "Meeting Notes"
2. Click **"Table - Full page"**

**Template for Each Meeting:**

```markdown
# [Meeting Title] - [Date]

**Attendees:** [@Name1], [@Name2]
**Duration:** X hours
**Type:** Planning / Review / Sync

---

## Agenda
1. Item 1
2. Item 2

---

## Discussion Notes

### Topic 1
[Notes]

### Topic 2
[Notes]

---

## Decisions Made
- [ ] Decision 1
- [ ] Decision 2

---

## Action Items
- [ ] [@Person] Task 1 (Due: [Date])
- [ ] [@Person] Task 2 (Due: [Date])

---

## Next Meeting
**Date:** [Date]
**Focus:** [Topics]
```

---

## 🔗 INTÉGRATION MCP TOOL

### Utiliser le Notion MCP Tool

Une fois le workspace setup, vous pouvez utiliser le Notion MCP tool pour:

**1. Créer des pages programmatiquement**
```
notion-create-pages:
  parent_id: [Database ID]
  title: "New Validated Combination"
  properties: {...}
```

**2. Fetch des données**
```
notion-fetch:
  page_id: [Page ID]
  → Returns page content
```

**3. Search dans le workspace**
```
notion-search:
  query: "meta-prompt"
  → Returns matching pages
```

**4. Update pages**
```
notion-update-page:
  page_id: [Page ID]
  properties: { Status: "Done" }
```

---

## 📊 VIEWS RECOMMANDÉES

### Home Dashboard Views

**1. Recent Documents (Table)**
- Source: Documentation Database
- Filter: None
- Sort: Last Updated (Descending)
- Limit: 5

**2. Active Features (Board)**
- Source: Features Database
- Filter: Status != Done
- Group by: Status

**3. Latest Combinations (Gallery)**
- Source: Validated Combinations
- Sort: Created (Descending)
- Limit: 6

---

## ✅ CHECKLIST DE SETUP

- [ ] Workspace créé
- [ ] Home dashboard configuré
- [ ] Documentation database setup
  - [ ] 5+ documents importés
- [ ] Floral databases créées
  - [ ] Seasonal Flowers (10+ entries)
  - [ ] Validated Combinations (20 entries)
- [ ] Prompt Engineering hub setup
  - [ ] Templates database (15+ templates)
  - [ ] Rules database (page créée)
- [ ] Features Kanban configuré
  - [ ] Round 1 features ajoutées
  - [ ] Round 2 features ajoutées
- [ ] Issues database créée
- [ ] Meeting Notes template créé
- [ ] Permissions configurées (team invited)

---

## 🚀 NEXT STEPS APRÈS SETUP

1. **Import All Documents**
   - vision_et_scope.md → Documentation
   - meta_prompt_system.md → Documentation
   - Tous les autres .md files

2. **Populate Databases**
   - Add 20 validated combinations
   - Add 50+ seasonal flowers
   - Import all 15 prompt templates

3. **Configure Automations**
   - Auto-update stats on Home
   - Notifications for new issues
   - Weekly digest emails

4. **Team Onboarding**
   - Share workspace link
   - Assign roles and permissions
   - Create onboarding guide page

---

**Document Version:** 1.0
**Estimated Setup Time:** 1-2 hours
**Last Updated:** 2026-02-06
