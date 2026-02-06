# 🎓 LEARNING PATH - AI-First Developer/Orchestrator (5 Mois)

**Objectif:** De Beginner à AI Product Manager capable de livrer FloralMood MVP production-ready
**Durée:** 4-5 mois (170 heures, ~8h/semaine)
**Résultat:** FloralMood MVP déployé + Portfolio démontrant compétence AI Orchestration

---

## 📊 VUE D'ENSEMBLE

```
MOIS 1          MOIS 2          MOIS 3          MOIS 4          MOIS 5
─────────────────────────────────────────────────────────────────────────
Fondamentaux    Claude Code     Stack           Architecture    MVP
Conceptuels     Mastery         Reading         & Design        Production

20h             40h             30h             30h             50h

Comprendre      Orchestrer      Lire code       Concevoir       Livrer
les concepts    des agents      généré          systèmes        MVP complet

Objectif:       Objectif:       Objectif:       Objectif:       Objectif:
Vocabulaire     Diriger         Review          Architecture    Production
technique       Claude          code IA         FloralMood      deployment
```

**Total:** 170 heures sur 22 semaines

---

## 📅 TIMELINE DÉTAILLÉE

```
FÉVRIER 2026
├─ Sem 1 (6-12 Feb)   │ Setup + M1 Week 1: Architecture Web
├─ Sem 2 (13-19 Feb)  │ M1 Week 2: Architecture Web (suite)
├─ Sem 3 (20-26 Feb)  │ M1 Week 3: Database & Auth
└─ Sem 4 (27 Feb-2 Mar)│ M1 Week 4: Validation Concepts

MARS 2026
├─ Sem 1 (3-9 Mar)    │ M2 Week 1: Prompt Engineering
├─ Sem 2 (10-16 Mar)  │ M2 Week 2: Workflow & Tasks (Part 1)
├─ Sem 3 (17-23 Mar)  │ M2 Week 3: Workflow & Tasks (Part 2)
├─ Sem 4 (24-30 Mar)  │ M2 Week 4: Features FloralMood (Part 1)
└─ Sem 5 (31 Mar-6 Apr)│ M2 Week 5: Features FloralMood (Part 2) + Validation

AVRIL 2026
├─ Sem 1 (7-13 Apr)   │ M3 Week 1: React Comprehension
├─ Sem 2 (14-20 Apr)  │ M3 Week 2: Node.js + Express
├─ Sem 3 (21-27 Apr)  │ M3 Week 3: Supabase Setup
└─ Sem 4 (28 Apr-4 May)│ M3 Week 4: Code Review Practice

MAI 2026
├─ Sem 1 (5-11 May)   │ M4 Week 1: System Design Foundations
├─ Sem 2 (12-18 May)  │ M4 Week 2: System Design Practice
├─ Sem 3 (19-25 May)  │ M4 Week 3: API Design & Security
└─ Sem 4 (26 May-1 Jun)│ M4 Week 4: Scalability & ADRs

JUIN 2026
├─ Sem 1 (2-8 Jun)    │ M5 Sprint 1: Auth & Portfolio
├─ Sem 2 (9-15 Jun)   │ M5 Sprint 2: Client Brief & Validation
├─ Sem 3 (16-22 Jun)  │ M5 Sprint 3: Meta-Prompt & AI Generation
├─ Sem 4 (23-29 Jun)  │ M5 Sprint 4: Moodboard Display & Sharing
└─ Sem 5 (30 Jun-6 Jul)│ M5 Sprint 5: Billing & Polish

JUILLET 2026
└─ Sem 1 (7-13 Jul)   │ M5: Beta Testing & Launch 🚀
```

---

## 🎯 MOIS 1: FONDAMENTAUX CONCEPTUELS (20h)

**Objectif:** Comprendre les concepts techniques sans coder
**Mindset:** "Je ne code pas encore, mais je comprends comment les systèmes fonctionnent"

### Semaine 1-2: Architecture Web (10h)

#### **Lundi (2h)**
- [ ] 📖 **Lire:** [Web.dev - How the web works](https://web.dev/learn/html) (45 min)
- [ ] 🎥 **Regarder:** [Fireship - HTTP in 100 seconds](https://www.youtube.com/watch?v=iYM2zFP3Zn0) (10 min)
- [ ] ✍️ **Exercice:** Dessiner architecture client/server sur papier (30 min)
- [ ] 📝 **Quiz:** 10 questions HTTP basics (15 min)
- [ ] 🤔 **Réflexion:** Écrire 3 apprentissages clés dans notebook (20 min)

#### **Mercredi (2h)**
- [ ] 📖 **Lire:** REST API concepts - [RESTful API Tutorial](https://restfulapi.net/) (45 min)
- [ ] ✍️ **Exercice:** Concevoir 5 endpoints FloralMood sur papier (45 min)
  - POST /api/client-brief
  - POST /api/moodboards
  - GET /api/leads
  - GET /api/leads/:id
  - PATCH /api/leads/:id
- [ ] 📝 **Comparer:** Avec architecture.md endpoints (30 min)

#### **Vendredi (2h)**
- [ ] 🎥 **Regarder:** [API design patterns](https://www.youtube.com/watch?v=BRdcRFvuqsE) (30 min)
- [ ] ✍️ **Projet:** Dessiner architecture complète FloralMood (60 min)
  - Client (browser)
  - Frontend (React)
  - Backend (Node.js)
  - Database (Supabase)
  - AI Services (OpenAI, Claude)
- [ ] 📝 **Review:** Comparer avec `3_notes/architecture.md` (30 min)

#### **Dimanche (2h) - Review Semaine**
- [ ] 📖 **Relire:** Notes de la semaine
- [ ] ✍️ **Exercice:** Expliquer client/server à haute voix (sans notes)
- [ ] 🎥 **Bonus:** [Fireship - REST API explained](https://www.youtube.com/watch?v=-MTSQjw5DrM)
- [ ] 📝 **Auto-évaluation:** Quiz 20 questions (créer vous-même)

#### **Validation Semaine 1-2:**
- [ ] Peut expliquer client/server sans notes (5 min présentation)
- [ ] Peut dessiner architecture FloralMood de mémoire
- [ ] Comprend 5 endpoints REST API (GET, POST, PATCH, DELETE, PUT)

---

### Semaine 3: Database & Auth (5h)

#### **Lundi (2h)**
- [ ] 📖 **Lire:** [Database concepts](https://www.mongodb.com/basics/database) (45 min)
- [ ] 🎥 **Regarder:** [Fireship - SQL explained](https://www.youtube.com/watch?v=zsjvFFKOm3c) (10 min)
- [ ] ✍️ **Exercice:** Concevoir schéma DB FloralMood simplifié (60 min)
  - Table: florists (id, email, business_name)
  - Table: clients (id, names, wedding_date)
  - Table: moodboards (id, florist_id, client_id, images)
- [ ] 📝 **Comparer:** Avec `3_notes/seasonal_flowers_schema.sql`

#### **Mercredi (2h)**
- [ ] 📖 **Lire:** [Authentication flow](https://auth0.com/intro-to-iam/what-is-authentication) (45 min)
- [ ] 🎥 **Regarder:** [Sessions vs Tokens](https://www.youtube.com/watch?v=GhrvZ5nUWNg) (15 min)
- [ ] ✍️ **Exercice:** Dessiner auth flow FloralMood (60 min)
  - Signup → Email verification → Login → Dashboard
  - Token storage
  - Protected routes

#### **Vendredi (1h) - Quiz Final Mois 1**
- [ ] 📝 **Quiz:** 30 questions concepts (45 min)
- [ ] 📊 **Objectif:** 24/30 correct (80%)
- [ ] 🤔 **Review:** Revoir concepts non maîtrisés

#### **Validation Mois 1:**
- [ ] Quiz: 80%+ score
- [ ] Peut expliquer architecture FloralMood complète (sans notes)
- [ ] Peut dessiner diagramme système de mémoire

---

## 🤖 MOIS 2: CLAUDE CODE MASTERY (40h)

**Objectif:** Maîtriser orchestration Claude Code
**Mindset:** "Je dirige Claude pour coder, je review la qualité"

### Semaine 1: Prompt Engineering (10h)

#### **Lundi (2.5h)**
- [ ] 📖 **Lire:** [Anthropic Prompt Engineering Guide](https://www.anthropic.com/prompt-engineering) (60 min)
- [ ] 📖 **Lire:** `AI_ORCHESTRATION_GUIDE.md` - Section Prompt Engineering (30 min)
- [ ] ✍️ **Exercice:** Écrire prompt pour F1 (Client Brief Form) (60 min)
  - Utiliser template du guide
  - Inclure: Context, Specs, Constraints, Acceptance Criteria

#### **Mercredi (2.5h)**
- [ ] ✍️ **Exercice:** Écrire 4 prompts additionnels (2h)
  - F2: AI Moodboard Generation
  - F3: Florist Dashboard
  - F4: Client Moodboard Page
  - F5: Lead Management
- [ ] 📝 **Review:** Comparer avec exemples professionnels (`AI_ORCHESTRATION_GUIDE.md`)

#### **Vendredi (2.5h)**
- [ ] 📖 **Lire:** [Examples from Claude docs](https://docs.anthropic.com/examples)
- [ ] ✍️ **Practice:** Réécrire vos 5 prompts en appliquant learnings
- [ ] 📝 **Validation:** Checklist pour chaque prompt:
  - [ ] Context clair? (pourquoi cette feature?)
  - [ ] Specs techniques détaillées?
  - [ ] Contraintes listées?
  - [ ] Critères d'acceptation testables?
  - [ ] Références incluses?

#### **Dimanche (2.5h) - Feedback Loop**
- [ ] 🤔 **Auto-review:** Identifier ce qui manque dans vos prompts
- [ ] 📖 **Lire:** Prompts professionnels (GitHub, forums)
- [ ] ✍️ **Final:** Perfectionner 2 meilleurs prompts (F1, F2)

#### **Validation Semaine 1:**
- [ ] 5 prompts écrits suivant template professionnel
- [ ] Chaque prompt passe checklist (5/5 critères)

---

### Semaine 2-3: Workflow & Task System (15h)

#### **Projet: Todo App (CRUD Complet)**

**Objectif:** Créer simple CRUD app avec Claude, utiliser Plan Mode et Task System

**Features à implémenter:**
1. List todos (GET /api/todos)
2. Add todo (POST /api/todos)
3. Mark complete (PATCH /api/todos/:id)
4. Delete todo (DELETE /api/todos/:id)

#### **Lundi - Setup (2h)**
- [ ] 📖 **Lire:** `AI_ORCHESTRATION_GUIDE.md` - Section Workflow
- [ ] 🔧 **Setup:** Créer projet vide (Node.js + React)
- [ ] 📋 **Task System:**
  ```
  /task create "F1: List todos" --description "GET endpoint + display"
  /task create "F2: Add todo" --description "POST endpoint + form"
  /task create "F3: Mark complete" --description "PATCH endpoint + checkbox"
  /task create "F4: Delete todo" --description "DELETE endpoint + button"
  ```

#### **Mercredi - Feature 1 & 2 (3h)**
- [ ] 🎯 **Plan Mode:** "Enter plan mode: Implement Todo app with CRUD operations"
- [ ] 👀 **Review Plan:** Claude propose architecture
- [ ] ✅ **Approve:** "Approved, let's implement F1 and F2"
- [ ] 🔨 **Implement:** Claude code F1 (List) + F2 (Add)
- [ ] 📝 **Review Code:** Checklist sécurité/qualité
- [ ] 📋 **Update Tasks:**
  ```
  /task update task-1 --status completed
  /task update task-2 --status completed
  ```

#### **Vendredi - Feature 3 & 4 (3h)**
- [ ] 🔨 **Implement:** Claude code F3 (Complete) + F4 (Delete)
- [ ] 📝 **Review Code:** Checklist complète
- [ ] 🧪 **Test:** Manuel end-to-end
- [ ] 📋 **Update Tasks:** Mark F3, F4 completed

#### **Lundi Semaine 3 - Corrections (2h)**
- [ ] 🐛 **Identifier:** 3-5 problèmes dans code (review approfondi)
- [ ] ✍️ **Demander:** Corrections spécifiques à Claude
- [ ] ✅ **Valider:** Corrections appliquées

#### **Mercredi Semaine 3 - Polish (2h)**
- [ ] 🎨 **UI:** Améliorer design (Tailwind CSS)
- [ ] 🧪 **Test:** Edge cases (empty list, long titles, etc.)
- [ ] 📝 **Document:** README.md pour projet

#### **Vendredi Semaine 3 - Review Complet (3h)**
- [ ] 📖 **Relire:** Tout le code généré ligne par ligne
- [ ] 🤔 **Comprendre:** Expliquer chaque fonction à haute voix
- [ ] 📝 **Documenter:** Écrire rapport d'apprentissage (1 page)
  - Qu'est-ce que j'ai appris?
  - Quelles difficultés?
  - Qu'est-ce que Claude a bien fait?
  - Qu'est-ce que j'ai dû corriger?

#### **Validation Semaine 2-3:**
- [ ] Todo app fonctionne end-to-end (4 features)
- [ ] Utilisé Plan Mode au moins 1 fois
- [ ] Tasks créées et mises à jour (4 tasks completed)
- [ ] Vous pouvez expliquer 80% du code généré

---

### Semaine 4-5: 3 Features FloralMood (15h)

**Objectif:** Implémenter vraies features FloralMood avec Claude

#### **Features:**
1. **F1: User Authentication** (Supabase)
2. **F2: Portfolio Upload** (images)
3. **F3: Client Brief Form** (multi-step)

#### **Semaine 4: F1 & F2 (8h)**

**Lundi - F1: Auth (Part 1) (3h)**
- [ ] ✍️ **Prompt:** Écrire prompt détaillé F1 (Auth) (30 min)
- [ ] 🔨 **Implement:** Claude code signup/login (1.5h)
- [ ] 📝 **Review:** Security checklist (1h)
  - Passwords not stored in state?
  - Supabase Auth used correctly?
  - Protected routes working?

**Mercredi - F1: Auth (Part 2) (2h)**
- [ ] 🔨 **Complete:** Session management, protected routes
- [ ] 🧪 **Test:** Login flow end-to-end
- [ ] 📝 **Document:** ADR for auth choice (Supabase)

**Vendredi - F2: Portfolio Upload (3h)**
- [ ] ✍️ **Prompt:** Écrire prompt F2 (Portfolio Upload)
- [ ] 🔨 **Implement:** Claude code upload + storage (Supabase Storage)
- [ ] 📝 **Review:** File validation, size limits, security

#### **Semaine 5: F3 (7h)**

**Lundi - F3: Client Form (Part 1) (3h)**
- [ ] ✍️ **Prompt:** Écrire prompt F3 (multi-step form)
- [ ] 🔨 **Implement:** Steps 1-2 (basics, budget)
- [ ] 📝 **Review:** Validation logic

**Mercredi - F3 (Part 2) (2h)**
- [ ] 🔨 **Implement:** Steps 3-5 (prestations, contact)
- [ ] 🧪 **Test:** Form flow, auto-save, validation

**Vendredi - Integration & Polish (2h)**
- [ ] 🔗 **Integrate:** F1 + F2 + F3 together
- [ ] 🧪 **Test:** End-to-end user journey
- [ ] 📝 **Review Final:** Tout le code

#### **Validation Semaine 4-5:**
- [ ] 3 features fonctionnelles (F1, F2, F3)
- [ ] Security scan: 0 critical issues
- [ ] Vous comprenez 80%+ du code
- [ ] Rapport d'apprentissage écrit (2 pages)

---

## 📚 MOIS 3: STACK COMPREHENSION (30h)

**Objectif:** Comprendre le stack pour mieux diriger Claude
**Mindset:** "Je lis et comprends le code, je ne le réécris pas"

### Semaine 1: React Comprehension (8h)

#### **Lundi (2h)**
- [ ] 📖 **Lire:** [React.dev - Learn React](https://react.dev/learn) (Sections 1-3)
- [ ] 📖 **Topics:** Components, Props, State
- [ ] 🎥 **Regarder:** [Fireship - React in 100 seconds](https://www.youtube.com/watch?v=Tn6-PIqc4UM)

#### **Mercredi (3h)**
- [ ] 📖 **Analyser:** Composants React générés Mois 2
  - `ClientBriefForm/index.jsx`
  - `ClientBriefForm/Step1.jsx`
  - Identifier: props, state, hooks
- [ ] ✍️ **Exercice:** Expliquer chaque ligne à haute voix
- [ ] 📝 **Documenter:** Annoter code avec commentaires

#### **Vendredi (3h)**
- [ ] ✍️ **Mini-modification:** Modifier 1 composant simple (ex: ajouter 1 champ formulaire)
- [ ] 🔨 **Implement avec Claude:** Demander à Claude cette modification
- [ ] 📝 **Comparer:** Votre approche vs celle de Claude

#### **Validation Semaine 1:**
- [ ] Peut lire et expliquer un composant React simple
- [ ] Comprend props, state, hooks (useState, useEffect)
- [ ] A modifié 1 composant avec succès

---

### Semaine 2: Node.js + Express (8h)

#### **Lundi (2h)**
- [ ] 📖 **Lire:** [Express.js Guide](https://expressjs.com/en/starter/guide.html)
- [ ] 📖 **Topics:** Routes, Controllers, Middleware
- [ ] 🎥 **Regarder:** [Fireship - Node.js in 100 seconds](https://www.youtube.com/watch?v=ENrzD9HAZK4)

#### **Mercredi (3h)**
- [ ] 📖 **Analyser:** Code backend généré Mois 2
  - Routes (`src/api/routes/todos.js`)
  - Controllers (`src/api/controllers/todosController.js`)
  - Identifier: req, res, next, middleware
- [ ] ✍️ **Tracer:** Flow d'une requête (client → route → controller → DB → response)

#### **Vendredi (3h)**
- [ ] ✍️ **Exercice:** Ajouter 1 endpoint simple (GET /api/health)
- [ ] 🔨 **Demander à Claude:** "Add health check endpoint"
- [ ] 📝 **Comparer:** Votre tentative vs code Claude

#### **Validation Semaine 2:**
- [ ] Peut lire et expliquer un endpoint API
- [ ] Comprend routes, controllers, middleware
- [ ] Peut tracer flow d'une requête

---

### Semaine 3: Supabase Setup (7h)

#### **Lundi (2h)**
- [ ] 📖 **Lire:** [Supabase Quickstart](https://supabase.com/docs/guides/getting-started)
- [ ] 🔧 **Setup:** Créer compte Supabase
- [ ] 🔧 **Create Project:** "floralmood-mvp"

#### **Mercredi (3h)**
- [ ] 📖 **Lire:** [Supabase SQL Editor](https://supabase.com/docs/guides/database)
- [ ] 🔨 **Créer:** Tables FloralMood dans Supabase Dashboard
  - florists (id, email, business_name, created_at)
  - clients (id, florist_id, names, wedding_date)
  - moodboards (id, florist_id, client_id, images JSONB)
- [ ] 📝 **Valider:** Query test avec SQL Editor

#### **Vendredi (2h)**
- [ ] 📖 **Lire:** [Supabase Auth](https://supabase.com/docs/guides/auth)
- [ ] 🔧 **Configure:** Email auth, policies (RLS)
- [ ] 🧪 **Test:** Signup/login via Supabase Dashboard

#### **Validation Semaine 3:**
- [ ] Compte Supabase créé
- [ ] 3 tables créées avec schema correct
- [ ] Auth configuré et testé

---

### Semaine 4: Code Review Practice (7h)

#### **Lundi-Vendredi (7h) - Review Approfondi**
- [ ] 📖 **Relire:** TOUT le code généré Mois 2 (ligne par ligne)
- [ ] 📝 **Annoter:** Commentaires pour chaque fonction complexe
- [ ] 🔍 **Identifier:** 5 améliorations possibles
  - Performance
  - Sécurité
  - Lisibilité
  - Maintenabilité
- [ ] ✍️ **Demander à Claude:** Implémenter 5 améliorations
- [ ] 📝 **Document:** Rapport d'amélioration (1 page)

#### **Validation Mois 3:**
- [ ] Peut lire et comprendre 80% du code React/Node.js
- [ ] Supabase configuré avec schema FloralMood
- [ ] A identifié 5+ améliorations code (avec corrections)

---

## 🏛️ MOIS 4: ARCHITECTURE & SYSTEM DESIGN (30h)

**Objectif:** Votre expertise unique (IA ne remplace pas)
**Mindset:** "Je conçois l'architecture, Claude implémente selon mes specs"

### Semaine 1-2: System Design Foundations (15h)

#### **Semaine 1: Apprentissage (8h)**

**Lundi (3h)**
- [ ] 📖 **Lire:** [System Design Primer](https://github.com/donnemartin/system-design-primer) (Sections 1-3)
- [ ] 📖 **Topics:** Scalability, Load Balancing, Caching
- [ ] 🎥 **Regarder:** [System Design Introduction](https://www.youtube.com/watch?v=UzLMhqg3_Wc)

**Mercredi (3h)**
- [ ] 📖 **Lire:** [Web.dev Patterns](https://web.dev/patterns/)
- [ ] 📖 **Topics:** Architecture patterns (MVC, Microservices, Monolith)
- [ ] 📝 **Notes:** Avantages/Inconvénients chaque pattern

**Vendredi (2h)**
- [ ] 📖 **Lire:** [Ethan Mollick - Claude Code and What Comes Next](https://www.oneusefulthing.org/p/claude-code-and-what-comes-next)
- [ ] 🤔 **Réflexion:** Comment architecture IA-first diffère?

#### **Semaine 2: Practice (7h)**

**Lundi (3h) - Architecture FloralMood V1 (Actuelle)**
- [ ] 📖 **Lire:** `3_notes/architecture.md` complètement
- [ ] ✍️ **Dessiner:** Diagramme architecture actuelle
- [ ] 📝 **Documenter:** Décisions actuelles (frontend, backend, DB)

**Mercredi (2h) - Alternative A: Microservices**
- [ ] ✍️ **Concevoir:** Architecture microservices
  - Service 1: User management
  - Service 2: Moodboard generation
  - Service 3: Billing
- [ ] 📝 **Trade-offs:** Pros/Cons vs Monolith

**Vendredi (2h) - Alternative B: Serverless**
- [ ] ✍️ **Concevoir:** Architecture serverless
  - Vercel Functions pour backend
  - Supabase pour DB + Auth
  - OpenAI API direct calls
- [ ] 📝 **Trade-offs:** Pros/Cons vs Node.js server

#### **Validation Semaine 1-2:**
- [ ] 3 architectures conçues (Actuelle, Microservices, Serverless)
- [ ] Trade-offs documentés pour chaque
- [ ] Recommandation finale justifiée

---

### Semaine 3: API Design & Security (8h)

#### **Lundi (3h) - API Design**
- [ ] 📖 **Lire:** [RESTful API Best Practices](https://restfulapi.net/resource-naming/)
- [ ] ✍️ **Concevoir:** Specs OpenAPI pour FloralMood
  - 25+ endpoints
  - Request/Response schemas
  - Error codes
- [ ] 🔧 **Tool:** Utiliser [Swagger Editor](https://editor.swagger.io/)

#### **Mercredi (3h) - Security Strategy**
- [ ] 📖 **Lire:** [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [ ] ✍️ **Document:** Security measures FloralMood
  - Authentication: Supabase Auth (JWT)
  - Authorization: Row Level Security (RLS)
  - Input validation: Zod schemas
  - Rate limiting: 10 req/min per user
  - HTTPS: Enforced (Vercel)
- [ ] 📝 **Checklist:** 10 security controls

#### **Vendredi (2h) - Review Peer**
- [ ] 🔗 **Partager:** Specs OpenAPI sur forum Anthropic
- [ ] 📝 **Demander:** 2 reviews (peers ou mentors)
- [ ] ✅ **Objectif:** 0 critical issues identifiés

#### **Validation Semaine 3:**
- [ ] Specs OpenAPI complètes (25+ endpoints)
- [ ] Security strategy documentée (10 controls)
- [ ] Peer review obtenu (2+ personnes)

---

### Semaine 4: Scalability & ADRs (7h)

#### **Lundi (2h) - Scalability Patterns**
- [ ] 📖 **Lire:** [Scalability Patterns](https://github.com/binhnguyennus/awesome-scalability)
- [ ] 📝 **Identifier:** 5 patterns applicables FloralMood
  - Caching (Redis)
  - CDN (images)
  - Database indexing
  - Async processing (queues)
  - Horizontal scaling

#### **Mercredi (3h) - Architecture Decision Records**
- [ ] 📖 **Lire:** [ADR Template](https://github.com/joelparkerhenderson/architecture-decision-record)
- [ ] ✍️ **Écrire:** 5 ADRs pour FloralMood
  1. ADR-001: Use Supabase for Auth
  2. ADR-002: Use DALL-E 3 HD for images
  3. ADR-003: Monolith architecture (Node.js)
  4. ADR-004: Vercel for frontend hosting
  5. ADR-005: Meta-prompt system for AI

#### **Vendredi (2h) - Review Complet Architecture**
- [ ] 📖 **Relire:** Toute documentation architecture
- [ ] 📝 **Finaliser:** Architecture complète FloralMood
- [ ] ✅ **Valider:** Self-check (checklist)

#### **Validation Mois 4:**
- [ ] Architecture FloralMood complète documentée
- [ ] 3 alternatives évaluées (trade-offs)
- [ ] Specs OpenAPI créées et validées
- [ ] 5 ADRs écrits
- [ ] Security strategy complète

---

## 🚀 MOIS 5: FLORALMOOD MVP PRODUCTION (50h)

**Objectif:** MVP complet orchestré par VOUS
**Mindset:** "Je suis AI Product Manager, Claude est mon équipe de devs"

### Structure: 5 Sprints × 1 Semaine

```
Sprint 1: Auth & Portfolio (8h)
Sprint 2: Client Brief & Validation (8h)
Sprint 3: Meta-Prompt & Generation (10h)
Sprint 4: Moodboard Display & Sharing (10h)
Sprint 5: Billing & Polish (8h)
Beta Testing & Launch (6h)
```

---

### Semaine 1: Sprint 1 - Auth & Portfolio (8h)

#### **Lundi - Planning (2h)**
- [ ] 📋 **Task System:**
  ```
  /task create "F1: User authentication" --description "Supabase Auth signup/login"
  /task create "F2: Portfolio upload" --description "Image upload + storage"
  /task create "F3: GPT-4 Vision analysis" --description "Style extraction"
  ```
- [ ] ✍️ **Write Specs:** 3 detailed prompts (F1, F2, F3)
- [ ] 🎯 **Plan Mode:** "Enter plan mode: Implement Sprint 1 features"
- [ ] 📝 **Review Plan:** Approve or adjust

#### **Mercredi - Implementation (4h)**
- [ ] 🔨 **F1:** Claude implements auth (Supabase)
- [ ] 📝 **Review:** Security checklist
- [ ] 🔨 **F2:** Claude implements upload (Supabase Storage)
- [ ] 📝 **Review:** File validation
- [ ] 🔨 **F3:** Claude implements GPT-4 Vision analysis
- [ ] 📝 **Review:** Prompt quality

#### **Vendredi - Testing & Integration (2h)**
- [ ] 🧪 **Test:** End-to-end flow
  - Signup → Login → Upload portfolio → View analysis
- [ ] 🐛 **Fix:** Bugs identifiés
- [ ] 📝 **Document:** Sprint 1 rapport

#### **Validation Sprint 1:**
- [ ] F1, F2, F3 fonctionnels
- [ ] Tests end-to-end passing
- [ ] Security scan: 0 critical issues

---

### Semaine 2: Sprint 2 - Client Brief & Validation (8h)

#### **Features:**
- F4: Client brief form (5 steps)
- F5: Seasonal validation algorithm
- F6: Lead scoring 0-100

#### **Structure similaire:**
- Lundi: Planning (2h)
- Mercredi: Implementation (4h)
- Vendredi: Testing (2h)

#### **Validation Sprint 2:**
- [ ] F4, F5, F6 fonctionnels
- [ ] Form flow smooth (mobile-first)
- [ ] Validation saisonnière working

---

### Semaine 3: Sprint 3 - Meta-Prompt & Generation (10h)

#### **Features:**
- F7: Meta-prompt generation (Claude Sonnet 4.5)
- F8: DALL-E 3 HD integration (10 images)
- F9: Quality validation (score >80%)

#### **Structure:**
- Lundi: Planning (2h)
- Mercredi: Meta-prompt system (4h)
- Jeudi: DALL-E integration (2h)
- Vendredi: Testing & quality (2h)

#### **Validation Sprint 3:**
- [ ] Full generation pipeline working
- [ ] 10 images generated in <5 min
- [ ] Quality validation passing
- [ ] Cost per moodboard = $0.87 (10 images HD)

---

### Semaine 4: Sprint 4 - Moodboard Display & Sharing (10h)

#### **Features:**
- F10: Moodboard gallery (florist view)
- F11: Public link generation (client view)
- F12: Email notifications (SendGrid)
- F13: Florist approval workflow

#### **Structure:**
- Lundi: Planning (2h)
- Mercredi: Gallery + public link (4h)
- Jeudi: Email system (2h)
- Vendredi: Workflow + testing (2h)

#### **Validation Sprint 4:**
- [ ] End-to-end client journey working
- [ ] Emails delivering correctly
- [ ] Public links secure (UUID, no enumeration)

---

### Semaine 5: Sprint 5 - Billing & Polish (8h)

#### **Features:**
- F14: Stripe subscription (3 tiers)
- F15: Usage tracking & limits
- Bug fixes
- UI polish

#### **Structure:**
- Lundi: Stripe integration (3h)
- Mercredi: Usage limits (2h)
- Jeudi: Bug fixes (2h)
- Vendredi: Polish & final review (1h)

#### **Validation Sprint 5:**
- [ ] Payment flow working (test mode)
- [ ] Usage limits enforced (moodboards/month)
- [ ] All known bugs fixed

---

### Semaine 6: Beta Testing & Launch (6h)

#### **Lundi - Deploy (2h)**
- [ ] 🚀 **Deploy Frontend:** Vercel
- [ ] 🚀 **Deploy Backend:** Railway/Render
- [ ] 🔧 **Configure:** Environment variables
- [ ] 🧪 **Test:** Production environment

#### **Mercredi - Beta Testing (2h)**
- [ ] 👥 **Invite:** 5 florists beta testers (real users)
- [ ] 📝 **Collect:** Feedback + bugs
- [ ] 🐛 **Fix:** Critical bugs

#### **Vendredi - Launch 🚀 (2h)**
- [ ] ✅ **Final Check:** All features working
- [ ] 📝 **Document:** User guide (1 page)
- [ ] 🎉 **Launch:** Open to public
- [ ] 📣 **Announce:** LinkedIn, Twitter

---

## 🎓 PROFIL FINAL (Fin 5 Mois)

### Compétences Acquises

**AI Orchestration (Expert):**
- ✅ Écrire prompts détaillés (specs complètes)
- ✅ Utiliser Plan Mode, Task System
- ✅ Orchestrer multi-agents en parallèle
- ✅ MCP tools mastery (Notion, GitHub, n8n)

**Architecture Système (Intermédiaire):**
- ✅ Concevoir architecture complète
- ✅ Évaluer trade-offs techniques
- ✅ Écrire ADRs (Architecture Decision Records)
- ✅ Design API (OpenAPI specs)

**Code Review (Intermédiaire):**
- ✅ Lire et comprendre React/Node.js code
- ✅ Identifier problèmes sécurité/performance
- ✅ Demander corrections spécifiques à Claude

**Product Management (Avancé):**
- ✅ Définir vision produit
- ✅ Prioriser features (MVP vs Phase 2)
- ✅ Specs détaillées (user stories)
- ✅ Testing & QA

---

### Livrables Portfolio

**Projets:**
1. ✅ Todo App (CRUD, Mois 2)
2. ✅ FloralMood MVP (production-ready, Mois 5)

**Documentation:**
- ✅ Architecture complète (diagrammes, ADRs)
- ✅ Specs OpenAPI (25+ endpoints)
- ✅ Security strategy (10 controls)
- ✅ Rapport apprentissage (5 pages)

**Déploiement:**
- ✅ FloralMood live en production (Vercel + Railway)
- ✅ 5 beta testers utilisateurs réels

---

### Valeur Marché

**Profil "AI Product Manager":**
- Très recherché en 2026+
- Compétences futures (agents, MCP, orchestration)
- Expérience production concrète (MVP deployed)

**Compétences Transférables:**
- Orchestrer n'importe quel projet avec Claude
- Concevoir architectures scalables
- Review code IA (n'importe quel langage)
- Product management IA-first

---

## 📊 MÉTRIQUES DE SUCCÈS GLOBALES

### Mois 1: Fondamentaux
- [ ] Quiz: 80%+ score (24/30)
- [ ] Peut expliquer architecture sans notes
- [ ] Peut dessiner diagramme système

### Mois 2: Claude Code Mastery
- [ ] Todo app fonctionnelle (4 features)
- [ ] 3 features FloralMood (F1, F2, F3)
- [ ] 10+ prompts écrits (format professionnel)
- [ ] MCP tools configurés (3/3)

### Mois 3: Stack Comprehension
- [ ] Peut lire 80%+ du code React/Node.js
- [ ] Supabase configuré avec schema
- [ ] 5+ améliorations code identifiées

### Mois 4: Architecture
- [ ] 3 architectures conçues
- [ ] Specs OpenAPI complètes
- [ ] 5 ADRs écrits
- [ ] Peer review validé (2+ personnes)

### Mois 5: MVP Production
- [ ] 15 features déployées (F1-F15)
- [ ] End-to-end tests: 100% passing
- [ ] Performance: <2s load time
- [ ] Security scan: 0 critical issues
- [ ] 5 beta testers utilisé avec succès

---

## 📚 RESSOURCES COMPLÈTES

### Documentation Technique
- [React.dev Learn React](https://react.dev/learn)
- [Express.js Guide](https://expressjs.com/)
- [Supabase Documentation](https://supabase.com/docs)
- [OpenAI API Reference](https://platform.openai.com/docs)

### AI Orchestration
- [Anthropic Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- [Multi-Agent Research System](https://www.anthropic.com/engineering/multi-agent-research-system)
- [Get Shit Done (GSD)](https://github.com/glittercowboy/get-shit-done)

### System Design
- [System Design Primer](https://github.com/donnemartin/system-design-primer)
- [Web.dev Patterns](https://web.dev/patterns/)
- [Scalability Patterns](https://github.com/binhnguyennus/awesome-scalability)

### Industrie (2026)
- [Anthropic 2026 Agentic Coding Trends Report](https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf)
- [Eight trends defining software in 2026](https://claude.com/blog/eight-trends-defining-how-software-gets-built-in-2026)
- [Claude Code and What Comes Next](https://www.oneusefulthing.org/p/claude-code-and-what-comes-next)

### Communautés
- Discord: Anthropic Claude Developers
- GitHub: AI-First Learning Path discussions
- Twitter: #AIOrchestration #ClaudeCode
- Reddit: r/ClaudeAI

---

## ✅ CHECKLIST FINALE (Après 5 Mois)

### Compétences
- [ ] Orchestration Claude Code (10+ features orchestrées)
- [ ] Architecture système (3 architectures conçues)
- [ ] Code review IA (80%+ compréhension)
- [ ] MCP tools mastery (Notion, GitHub, n8n)
- [ ] Product management (specs, prioritization, testing)

### Projets
- [ ] Todo App (CRUD complet)
- [ ] FloralMood MVP (15 features, production)

### Documentation
- [ ] Architecture complète (diagrammes, ADRs)
- [ ] Specs OpenAPI (25+ endpoints)
- [ ] Security strategy (10 controls)
- [ ] Portfolio GitHub (README, screenshots)

### Déploiement
- [ ] FloralMood live (Vercel + Railway)
- [ ] 5 beta testers (feedback positif)
- [ ] Performance validated (<2s load)
- [ ] Security scan clean (0 critical)

---

**Version:** 1.0
**Dernière mise à jour:** 6 février 2026
**Durée totale:** 170 heures (22 semaines)
**Résultat:** AI Product Manager avec MVP production-ready
