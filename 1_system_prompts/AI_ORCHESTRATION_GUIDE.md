# 🎯 AI ORCHESTRATION GUIDE - Claude Code Mastery

**Objectif:** Maîtriser l'orchestration de Claude Code pour construire FloralMood MVP
**Niveau:** Beginner → Intermediate AI Product Manager
**Durée:** Mois 2 (40h) + Pratique continue Mois 3-5

---

## 📖 TABLE DES MATIÈRES

1. [Philosophie AI-First](#philosophie-ai-first)
2. [Prompt Engineering pour Code](#prompt-engineering-pour-code)
3. [Review de Code IA](#review-de-code-ia)
4. [Workflow Claude Code](#workflow-claude-code)
5. [MCP Tools Usage](#mcp-tools-usage)
6. [Multi-Agent Workflows](#multi-agent-workflows)
7. [Best Practices](#best-practices)
8. [Exemples Pratiques](#exemples-pratiques)

---

## 🎨 PHILOSOPHIE AI-FIRST

### Votre Nouveau Rôle: AI Product Manager

**Ce que vous FAITES:**
- ✅ Définir la vision et les exigences
- ✅ Concevoir l'architecture système
- ✅ Écrire des specs claires et détaillées
- ✅ Diriger Claude Code avec des prompts efficaces
- ✅ Review le code généré (qualité, sécurité, performance)
- ✅ Décider des trade-offs techniques
- ✅ Tester et valider les features
- ✅ Orchestrer plusieurs agents IA en parallèle

**Ce que vous NE FAITES PAS:**
- ❌ Écrire du code ligne par ligne
- ❌ Debug syntaxe JavaScript/TypeScript
- ❌ Implémenter algorithmes manuellement
- ❌ Configurer webpack/build tools
- ❌ Écrire tests unitaires manuellement

**Mindset Shift:**
```
Traditionnel:  "Comment je code cette feature?"
AI-First:      "Comment je décris cette feature à Claude pour qu'il la code parfaitement?"

Traditionnel:  "Je ne sais pas coder → Je ne peux pas construire"
AI-First:      "Je comprends le système → Je peux orchestrer Claude pour construire"
```

---

## ✍️ PROMPT ENGINEERING POUR CODE

### 1. Anatomie d'un Bon Prompt

**Structure Recommandée:**

```markdown
# [TITRE CLAIR DE LA TÂCHE]

## Contexte
[1-2 phrases expliquant pourquoi cette feature est nécessaire]

## Objectif
[Résultat attendu en 1 phrase précise]

## Spécifications Techniques
- **Input:** [Qu'est-ce qui arrive dans cette feature?]
- **Processing:** [Que doit faire le système?]
- **Output:** [Quel est le résultat final?]

## Contraintes
- [Liste des contraintes: sécurité, performance, compatibilité]

## Critères d'Acceptation
- [ ] Critère testable 1
- [ ] Critère testable 2
- [ ] Critère testable 3

## Références
[Liens vers docs, fichiers existants, exemples]
```

---

### 2. Exemples de Prompts Efficaces

#### ❌ **BAD: Prompt Vague**
```
"Crée un formulaire pour les clients"
```

**Problème:** Trop vague, Claude doit deviner tout.

#### ✅ **GOOD: Prompt Détaillé**
```markdown
# Feature: Client Brief Form (F1)

## Contexte
Les clients doivent soumettre leur brief de mariage pour que le fleuriste génère un moodboard personnalisé.

## Objectif
Créer un formulaire multi-étapes (5 steps) mobile-first avec validation temps réel.

## Spécifications Techniques

### Step 1: Wedding Basics
**Fields:**
- Couple names (2 text inputs, required)
- Wedding date (date picker, future dates only, required)
- Venue (city/state dropdown, required)
- Guest count (number input, min 10, max 500, required)

**Validation:**
- Names: 2-50 characters each
- Date: Must be >= today + 30 days
- Guest count: Display warning if <50 or >300

### Step 2: Budget & Style
[... detailed spec ...]

## Contraintes
- Mobile-first: Touch-friendly (min 44px tap targets)
- Accessibility: ARIA labels, keyboard navigation
- Performance: <100ms field validation
- Security: Honeypot field + rate limiting (10 submissions/IP/hour)

## Critères d'Acceptation
- [ ] All 5 steps display correctly on mobile (375px width)
- [ ] Real-time validation shows errors below fields
- [ ] Cannot proceed to next step if current step invalid
- [ ] Form data persists in localStorage (auto-save every 30s)
- [ ] Submission sends webhook to n8n with all data

## Références
- Design: `4_prototypes/client-form-wireframe.html`
- API: `3_notes/architecture.md` (webhook endpoint)
- Similar form: https://typeform.com/templates/wedding-inquiry
```

---

#### ❌ **BAD: Prompt Sans Contexte**
```
"Ajoute l'authentification"
```

#### ✅ **GOOD: Prompt Avec Contexte**
```markdown
# Feature: Florist Authentication (F1 - Auth Module)

## Contexte
Les fleuristes doivent se connecter pour accéder à leur dashboard et gérer leurs leads. Nous utilisons Supabase Auth pour gérer les sessions.

## Objectif
Implémenter login/signup avec email/password + session management + protected routes.

## Spécifications Techniques

### Signup Flow
1. Form: email, password (min 8 chars), business name
2. Supabase: `auth.signUp()` avec metadata `{ business_name: "..." }`
3. Create profile: Insert into `florists` table
4. Email verification: Supabase sends email (config déjà fait)
5. Redirect: `/onboarding` (after verification)

### Login Flow
1. Form: email, password
2. Supabase: `auth.signInWithPassword()`
3. Check profile: Verify `florists` table entry exists
4. Redirect: `/dashboard` (or `/onboarding` if incomplete)

### Session Management
- Store session: Supabase handles JWT automatically
- Protected routes: HOC `<RequireAuth>` component
- Auto-refresh: Supabase SDK handles (default 1h)
- Logout: Clear session + redirect `/login`

## Contraintes
- **Security:**
  - NEVER store passwords in state/localStorage
  - Use Supabase Auth ONLY (no custom JWT)
  - HTTPS only (Vercel enforces)
- **UX:**
  - Show loading state during auth
  - Clear error messages (email not found, wrong password, etc.)
  - Remember me: Supabase session persistence

## Critères d'Acceptation
- [ ] Signup creates user in Supabase + `florists` table
- [ ] Login redirects to dashboard
- [ ] Protected routes redirect to login if not authenticated
- [ ] Logout clears session
- [ ] Error messages display correctly (wrong password, email exists, etc.)

## Références
- Supabase docs: https://supabase.com/docs/guides/auth
- Example: `src/auth/SupabaseAuthExample.jsx` (if exists)
- Architecture: `3_notes/architecture.md` (Auth section)
```

---

### 3. Prompts par Type de Tâche

#### **Type 1: Nouvelle Feature**
**Template:**
```markdown
# Feature: [Feature Name] (F[Number])

## User Story
As a [user type], I want [goal], so that [benefit].

## Contexte
[Why this feature? How it fits in the system?]

## Spécifications
[Detailed technical spec]

## UI/UX
[Wireframe, layout description, interaction patterns]

## Contraintes
[Technical, security, performance constraints]

## Critères d'Acceptation
- [ ] [Testable criteria]
```

#### **Type 2: Bug Fix**
**Template:**
```markdown
# Bug Fix: [Brief description]

## Symptom
[What's the user-visible problem?]

## Expected Behavior
[What should happen?]

## Current Behavior
[What actually happens?]

## Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Observe issue]

## Suspected Cause
[Your hypothesis if any]

## Fix Requirements
- [ ] [Requirement 1]
- [ ] [Requirement 2]
```

#### **Type 3: Refactoring**
**Template:**
```markdown
# Refactoring: [Component/Module Name]

## Current State
[Why is the code problematic? Complexity, duplication, performance?]

## Goal
[What's the target state?]

## Constraints
- ✅ MUST: Maintain existing functionality (no breaking changes)
- ✅ MUST: Add tests before refactoring
- ⚠️ AVOID: Over-abstraction

## Approach
[Suggested refactoring strategy]
```

---

## 🔍 REVIEW DE CODE IA

### Votre Checklist de Review

Quand Claude génère du code, vous devez **TOUJOURS** vérifier ces points:

#### 1. **Functionality (Fonctionnalité)**
- [ ] Le code fait-il exactement ce qui était demandé?
- [ ] Tous les critères d'acceptation sont-ils satisfaits?
- [ ] Les edge cases sont-ils gérés? (inputs vides, null, undefined)

#### 2. **Security (Sécurité)**
- [ ] ❌ **XSS:** Jamais `dangerouslySetInnerHTML` sans sanitization
- [ ] ❌ **SQL Injection:** Parameterized queries only (Supabase RPC)
- [ ] ❌ **Auth Bypass:** Routes protégées avec auth check
- [ ] ❌ **Sensitive Data:** Jamais de secrets hardcodés (use .env)
- [ ] ❌ **CORS:** API endpoints ne sont pas ouverts à tous (`*`)

**Exemples de Code Dangereux:**

```javascript
// ❌ BAD: XSS vulnerability
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ GOOD: Safe rendering
<div>{userInput}</div>

// ❌ BAD: SQL injection (if using raw SQL)
db.query(`SELECT * FROM users WHERE email = '${email}'`)

// ✅ GOOD: Parameterized query
db.query('SELECT * FROM users WHERE email = $1', [email])

// ❌ BAD: Secrets hardcoded
const apiKey = "sk_live_abc123"

// ✅ GOOD: Environment variable
const apiKey = process.env.OPENAI_API_KEY
```

#### 3. **Performance (Performance)**
- [ ] **N+1 Queries:** Éviter boucles avec queries DB (use batch)
- [ ] **Large Lists:** Pagination implémentée? (>100 items)
- [ ] **Images:** Lazy loading? Optimized sizes?
- [ ] **API Calls:** Debouncing sur search/autocomplete?

**Exemples:**

```javascript
// ❌ BAD: N+1 query problem
leads.forEach(async lead => {
  const florist = await getFlorist(lead.floristId) // 100 queries!
})

// ✅ GOOD: Batch query
const floristIds = leads.map(l => l.floristId)
const florists = await getFloristsByIds(floristIds) // 1 query

// ❌ BAD: No debouncing on search
<input onChange={(e) => searchAPI(e.target.value)} />

// ✅ GOOD: Debounced search
<input onChange={debounce((e) => searchAPI(e.target.value), 300)} />
```

#### 4. **Code Quality (Qualité du Code)**
- [ ] **Naming:** Variables/functions ont des noms clairs?
- [ ] **DRY:** Pas de duplication évidente?
- [ ] **Comments:** Code complexe est documenté?
- [ ] **Error Handling:** Try/catch sur operations async?

#### 5. **Testing (Tests)**
- [ ] Tests unitaires pour logique métier critique?
- [ ] Tests d'intégration pour API endpoints?
- [ ] Tests E2E pour user flows critiques?

---

### Comment Demander des Corrections

#### ❌ **BAD: Vague**
```
"Ce code a l'air dangereux, corrige-le"
```

#### ✅ **GOOD: Spécifique**
```markdown
# Correction Required: Security Issue in User Input Handling

## File: `src/components/ClientBriefForm.jsx` Line 45

## Issue
The code uses `dangerouslySetInnerHTML` to render user input, creating an XSS vulnerability.

**Current Code:**
```javascript
<div dangerouslySetInnerHTML={{ __html: formData.specialRequests }} />
```

## Fix Required
1. Remove `dangerouslySetInnerHTML`
2. Use safe text rendering: `<div>{formData.specialRequests}</div>`
3. If HTML formatting is needed, use a sanitization library (e.g., DOMPurify)

## Test
- [ ] Verify that script tags in input don't execute
- [ ] Test with input: `<script>alert('XSS')</script>`
```

---

## 🔄 WORKFLOW CLAUDE CODE

### Plan Mode

**Quand l'utiliser:**
- Features complexes (>3 fichiers modifiés)
- Décisions architecturales à valider
- Vous n'êtes pas sûr de l'approche

**Comment l'utiliser:**

1. **Démarrer Plan Mode:**
   ```
   "Enter plan mode: I need to add user authentication with Supabase"
   ```

2. **Claude va:**
   - Explorer le codebase
   - Analyser l'architecture existante
   - Proposer un plan d'implémentation
   - Identifier les fichiers à modifier
   - Estimer la complexité

3. **Vous validez:**
   - Review le plan
   - Poser des questions
   - Demander des alternatives si needed
   - Approuver ou demander ajustements

4. **Exit Plan Mode:**
   ```
   "Approved, let's implement"
   ```

**Exemple de Plan Mode:**

```
User: "Enter plan mode: Implement F2 (AI Moodboard Generation)"

Claude: [Enters plan mode, explores codebase]

## PLAN: AI Moodboard Generation (F2)

### Files to Create
1. `src/services/aiMoodboardGenerator.js` - Core generation logic
2. `src/services/openaiClient.js` - OpenAI API wrapper
3. `src/api/routes/moodboards.js` - API endpoints

### Files to Modify
1. `src/api/webhooks/formSubmission.js` - Add generation trigger
2. `src/database/schema.sql` - Add `moodboards` table

### Architecture Decisions
- **API Choice:** OpenAI DALL-E 3 HD ($0.08/image)
- **Async Processing:** Use Bull queue (Redis)
- **Storage:** Cloudinary for images
- **Retry Logic:** 3 attempts with exponential backoff

### Implementation Steps
1. Setup OpenAI client with API key (env var)
2. Create moodboard generation service
3. Implement prompt builder (use meta-prompt system)
4. Add image storage (Cloudinary integration)
5. Create API endpoints (POST /api/moodboards)
6. Add webhook trigger
7. Implement notification system

### Estimated Complexity
- Files: 5 new, 2 modified
- Time: ~3-4 hours (Claude coding)
- Your review time: ~30 min

### Risks
- API rate limits (mitigate: queue system)
- Cost overruns (mitigate: budget tracking)

Ready to proceed? Approve or request changes.
```

---

### Task System

**Quand l'utiliser:**
- Tracking progress sur features multiples
- Sessions de travail longues (>2h)
- Quand vous orchestrez plusieurs features en parallèle

**Commands:**

```bash
# Créer une task
/task create "Implement user authentication" --description "Add Supabase auth with login/signup"

# Lister toutes les tasks
/task list

# Mettre à jour status
/task update <task-id> --status in_progress
/task update <task-id> --status completed

# Voir détails
/task get <task-id>
```

**Exemple Workflow avec Tasks:**

```
# Milestone 5: FloralMood MVP Production

Session Start:
> /task create "F1: Client Brief Form" --description "5-step form with validation"
> /task create "F2: AI Moodboard Generation" --description "DALL-E 3 integration"
> /task create "F3: Florist Dashboard" --description "Leads table + detail view"

Work on F1:
> /task update task-1 --status in_progress
[... Claude implements F1 ...]
> /task update task-1 --status completed

Work on F2:
> /task update task-2 --status in_progress
[... work continues ...]
```

---

### Agents: Multi-Agent Workflows

**Quand l'utiliser:**
- Tâches parallèles indépendantes
- Recherche + implémentation simultanée
- Accélérer développement

**Exemple:**

```
"Launch 3 agents in parallel:
1. Agent 1: Implement F1 (Client Brief Form)
2. Agent 2: Implement F3 (Florist Dashboard)
3. Agent 3: Setup Supabase database schema"
```

Claude va:
- Créer 3 agents indépendants
- Chacun travaille sur sa task
- Vous notifie quand chacun termine
- Vous review tous les résultats

---

## 🔧 MCP TOOLS USAGE

### Notion MCP

**Use Cases:**
- **Documentation:** Sync tous les .md files vers Notion
- **Knowledge Base:** Query docs pendant coding
- **Feature Tracking:** Update feature status

**Commands:**

```bash
# Sync documentation to Notion
notion-mcp sync-docs ./3_notes/*.md

# Query during work
"Check Notion for meta-prompt system architecture"

# Update feature status
notion-mcp update-page "F1: Client Brief Form" --status "In Progress"
```

---

### GitHub MCP

**Use Cases:**
- **Issues:** Créer issues pour bugs
- **PRs:** Review pull requests
- **Releases:** Track versions

**Commands:**

```bash
# Créer issue
gh issue create --title "Bug: Form validation not working on mobile" --body "..."

# List PRs
gh pr list

# Merge PR
gh pr merge 123
```

---

### n8n MCP

**Use Cases:**
- **Prototyping:** Test workflows rapidement
- **API Testing:** Mock endpoints
- **Automation:** Deploy hooks

**Commands:**

```bash
# Import workflow
n8n import n8n_workflow_prototype.json

# Test workflow
n8n execute workflow-id --test-mode

# Deploy
n8n activate workflow-id
```

---

## 🎯 BEST PRACTICES

### 1. Commencer Simple

**Principe:** Toujours MVP d'abord, optimiser après.

```
❌ BAD: "Implement F2 with full error handling, retry logic, monitoring, caching"
✅ GOOD: "Implement F2 basic flow: form → AI → display. We'll add error handling after."
```

---

### 2. Itérer Rapidement

**Approche:**
1. Implémentation basique (Claude)
2. Test manuel (vous)
3. Identifier problèmes
4. Corrections (Claude)
5. Repeat

```
Cycle 1: Basic form → Test → "Submit button doesn't disable" → Fix
Cycle 2: Validation → Test → "Error messages unclear" → Improve
Cycle 3: Polish → Test → "Perfect" → Ship
```

---

### 3. Valider Avant d'Optimiser

```
Ordre correct:
1. ✅ Feature works (functionally correct)
2. ✅ Feature is secure (no vulnerabilities)
3. ✅ Feature is tested (manual + automated)
4. ⏭️ Feature is optimized (performance tuning)

❌ BAD: Optimiser avant que ça marche
✅ GOOD: D'abord ça marche, ensuite on optimise
```

---

### 4. Documenter Décisions

**Pour chaque feature, notez:**
- Pourquoi cette approche? (alternatives considérées)
- Quels trade-offs? (performance vs simplicité, etc.)
- Quelles dépendances? (libraries, services)

**Format: Architecture Decision Record (ADR)**

```markdown
# ADR 001: Use Supabase for Authentication

## Status
Accepted

## Context
Need user authentication for florist dashboard. Options: custom JWT, Auth0, Supabase Auth, Firebase Auth.

## Decision
Use Supabase Auth.

## Rationale
- ✅ Already using Supabase for DB (integration simple)
- ✅ Handles session management automatically
- ✅ Free tier sufficient for MVP
- ✅ Email verification built-in
- ❌ Auth0 more features but complex for MVP

## Consequences
- Positive: Fast implementation, less code to maintain
- Negative: Vendor lock-in (but acceptable for MVP)
```

---

## 📚 EXEMPLES PRATIQUES

### Exemple 1: Implémenter F1 (Client Brief Form)

**Your Prompt:**

```markdown
# Implement F1: Client Brief Form

## Context
This is the entry point for wedding clients to submit their floral brief. The form feeds into the AI moodboard generation system (F2).

## Requirements

### Technical Specs
- **Framework:** React 18 + Tailwind CSS
- **Validation:** Real-time with error messages
- **Storage:** Auto-save to localStorage every 30s
- **Submission:** POST to `/api/webhooks/client-brief`

### UI Specs
- 5 steps (see `3_notes/vision_et_scope.md` F1 section)
- Mobile-first (375px width minimum)
- Progress indicator (Step 1 of 5)
- Navigation: [Back] [Continue] buttons

### Validation Rules
**Step 1:**
- Names: Required, 2-50 chars each
- Date: Required, >= today + 30 days
- Venue: Required dropdown
- Guest count: Required, 10-500

**Step 2:**
- Budget: Required (slider selection)
- Style: Required (min 1 selected)
- Colors: Optional (text or color picker)

[... Steps 3-5 specs ...]

### API Contract
**POST /api/webhooks/client-brief**
```json
{
  "florist_slug": "sarah-blooms",
  "couple_names": ["Emma", "Lucas"],
  "wedding_date": "2026-06-15",
  "venue_city": "Sydney",
  "venue_state": "NSW",
  "guest_count": 120,
  "budget_range": "$10-15K",
  "style_preferences": ["romantic", "garden"],
  "color_palette": "blush, ivory, sage",
  "ceremony_prestations": [...],
  "reception_prestations": [...],
  "email": "emma@email.com",
  "phone": "+61412345678",
  "special_requests": "Prefer local flowers"
}
```

## Acceptance Criteria
- [ ] All 5 steps display correctly on mobile
- [ ] Validation works real-time (error below field)
- [ ] Cannot proceed if step invalid
- [ ] Auto-save to localStorage works
- [ ] Successful submission shows confirmation page
- [ ] Failed submission shows error + retry

## Files to Create
- `src/components/ClientBriefForm/index.jsx` - Main form component
- `src/components/ClientBriefForm/Step1.jsx` - Wedding basics
- `src/components/ClientBriefForm/Step2.jsx` - Budget & style
- `src/components/ClientBriefForm/Step3.jsx` - Ceremony prestations
- `src/components/ClientBriefForm/Step4.jsx` - Reception prestations
- `src/components/ClientBriefForm/Step5.jsx` - Contact & notes
- `src/components/ClientBriefForm/FormProgress.jsx` - Progress bar
- `src/services/formStorage.js` - LocalStorage helper
- `src/services/api.js` - API submission

## References
- Design: `4_prototypes/client-form-wireframe.html`
- Full spec: `3_notes/vision_et_scope.md` (F1 section)
- Similar: Typeform multi-step pattern
```

**Claude's Response:**
```
I'll implement the client brief form following the specifications. Let me break this down into tasks:

[Claude creates files, implements form, adds validation, etc.]

✅ Created 9 files
✅ Implemented all 5 steps
✅ Added real-time validation
✅ Auto-save functionality working
✅ API integration complete

Ready for your review. Please test on mobile (375px width) and verify:
1. Step navigation works
2. Validation displays correctly
3. Form submission succeeds
```

**Your Review:**
1. Test manually on mobile
2. Check validation rules
3. Verify API payload matches contract
4. Test edge cases (empty fields, invalid date, etc.)
5. Request corrections if needed

---

### Exemple 2: Review de Code avec Corrections

**Claude Generated Code:**
```javascript
// src/services/aiMoodboardGenerator.js
export async function generateMoodboard(brief) {
  const prompt = `Wedding moodboard for ${brief.style_preferences.join(', ')} style`

  const images = []
  for (let i = 0; i < 10; i++) {
    const response = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    })
    images.push(response.data[0].url)
  }

  return images
}
```

**Your Review:**

```markdown
# Code Review: AI Moodboard Generator

## Issues Found

### 1. ❌ CRITICAL: Sequential API Calls (Performance)
**Problem:** Loop calls OpenAI API 10 times sequentially. This takes ~50-100 seconds (5-10s per image).

**Fix Required:**
```javascript
// Instead of loop, use Promise.all for parallel execution
const imagePromises = Array(10).fill(null).map(() =>
  openai.images.generate({
    prompt: prompt,
    n: 1,
    size: "1024x1024"
  })
)
const responses = await Promise.all(imagePromises)
const images = responses.map(r => r.data[0].url)
```

**Expected Result:** 10 images in ~10-15 seconds (parallel)

---

### 2. ❌ IMPORTANT: Prompt Too Generic
**Problem:** Prompt only uses style preferences, doesn't include:
- Florist's portfolio style keywords
- Client color palette
- Seasonal flowers
- Specific prestations

**Fix Required:**
Use the meta-prompt system from `3_notes/meta_prompt_system.md`:
1. Fetch florist style profile
2. Apply prompt rules from database
3. Include seasonal validation
4. Build structured prompt per prestation

---

### 3. ❌ IMPORTANT: No Error Handling
**Problem:** If one image fails, entire function crashes.

**Fix Required:**
```javascript
const imagePromises = Array(10).fill(null).map(async () => {
  try {
    const response = await openai.images.generate(...)
    return { success: true, url: response.data[0].url }
  } catch (error) {
    console.error('Image generation failed:', error)
    return { success: false, error: error.message }
  }
})

const results = await Promise.all(imagePromises)
const images = results.filter(r => r.success).map(r => r.url)

if (images.length < 8) {
  throw new Error(`Only ${images.length}/10 images generated successfully`)
}
```

---

### 4. ⚠️ MINOR: API Key Not Validated
**Problem:** No check if OpenAI API key exists.

**Fix Required:**
```javascript
if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY environment variable not set')
}
```

---

## Corrections Summary
Priority:
1. 🔴 HIGH: Parallel execution (performance critical)
2. 🔴 HIGH: Use meta-prompt system (quality critical)
3. 🟡 MEDIUM: Error handling (reliability)
4. 🟢 LOW: API key validation (nice to have)

Please implement corrections in this order.
```

**Claude Implements Corrections:**
```
✅ Fixed parallel execution (Promise.all)
✅ Integrated meta-prompt system
✅ Added error handling with retry logic
✅ Added API key validation

Updated file: src/services/aiMoodboardGenerator.js
New performance: ~10-15s for 10 images (was ~60s)

Please review again.
```

---

## 🎓 PROGRESSION LEARNING

### Mois 2 - Semaine 1: Fondamentaux Prompt Engineering
**Objectif:** Écrire prompts clairs et détaillés

**Exercices:**
1. Lire: [Anthropic Prompt Engineering Guide](https://www.anthropic.com/prompt-engineering)
2. Écrire 5 prompts pour features FloralMood (F1, F2, F3, F4, F5)
3. Comparer avec exemples professionnels (ce guide)
4. Feedback: Identifier ce qui manque dans vos prompts

**Validation:**
- [ ] Prompts incluent: Context, Specs, Constraints, Acceptance Criteria
- [ ] Prompts sont testables (critères clairs)

---

### Mois 2 - Semaine 2: Workflow & Task System
**Objectif:** Utiliser Plan Mode et Task System efficacement

**Exercices:**
1. Créer simple CRUD app avec Claude (Todo list)
2. Utiliser Plan Mode pour architecture
3. Utiliser Task System pour tracking
4. Review code généré

**Features à implémenter:**
- Feature 1: List todos (GET /api/todos)
- Feature 2: Add todo (POST /api/todos)
- Feature 3: Mark complete (PATCH /api/todos/:id)
- Feature 4: Delete todo (DELETE /api/todos/:id)

**Validation:**
- [ ] App fonctionne end-to-end
- [ ] Vous avez utilisé Plan Mode au moins 1 fois
- [ ] Tasks créées et mises à jour correctement

---

### Mois 2 - Semaine 3-4: Code Review Practice
**Objectif:** Review code IA avec checklist sécurité/performance

**Exercices:**
1. Implémenter 3 features FloralMood avec Claude:
   - F1: User authentication (Supabase)
   - F2: Portfolio upload (images)
   - F3: Client brief form

2. Pour chaque feature, faire review complète:
   - Functionality ✅/❌
   - Security ✅/❌
   - Performance ✅/❌
   - Code quality ✅/❌

3. Demander corrections si needed

**Validation:**
- [ ] 3 features fonctionnelles
- [ ] Vous avez identifié au moins 2 problèmes par feature
- [ ] Corrections appliquées et validées

---

### Mois 2 - Semaine 5: MCP Tools Integration
**Objectif:** Utiliser Notion, GitHub, n8n MCPs

**Exercices:**
1. Setup Notion MCP (sync documentation)
2. Setup GitHub MCP (issues, PRs)
3. Setup n8n MCP (test workflow)
4. Utiliser MCPs pendant développement features

**Validation:**
- [ ] Notion workspace configuré avec docs
- [ ] GitHub repo initialisé avec issues
- [ ] n8n workflow prototype testé

---

## 📊 MÉTRIQUES DE SUCCÈS

### Mois 2 (Claude Code Mastery)

**Compétences à acquérir:**
- ✅ Écrire prompts détaillés (80%+ des specs nécessaires)
- ✅ Review code IA (identifier 5+ problèmes par feature)
- ✅ Utiliser Plan Mode (2+ fois)
- ✅ Utiliser Task System (10+ tasks créées)
- ✅ MCP Tools configurés (3/3: Notion, GitHub, n8n)

**Projets livrés:**
- ✅ Todo app (4 features)
- ✅ 3 features FloralMood (F1, F2, F3)

**Temps total:** 40h

---

## 📚 RESSOURCES ADDITIONNELLES

### Documentation Officielle
- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- [Multi-Agent Research System](https://www.anthropic.com/engineering/multi-agent-research-system)
- [Anthropic Prompt Engineering](https://www.anthropic.com/prompt-engineering)

### Outils
- [Get Shit Done (GSD)](https://github.com/glittercowboy/get-shit-done)
- [Claude MCP Documentation](https://modelcontextprotocol.io/)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)

### Communautés
- Discord: Anthropic Claude Developers
- GitHub: AI-First Learning Path discussions
- Twitter: #AIOrchestration #ClaudeCode

---

**Version:** 1.0
**Dernière mise à jour:** 6 février 2026
**Auteur:** AI-First Learning Path Team
