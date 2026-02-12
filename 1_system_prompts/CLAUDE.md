# FloralMood MVP - AI-First Development Project

**Status:** 🔄 Phase 1 - Learning & Architecture (Month 1/5)
**Approach:** AI-First Developer/Orchestrator
**Your Role:** Code implementation following detailed specifications
**My Role:** AI Product Manager - Architecture, specs, review

---

## 🎯 PROJECT OVERVIEW

**FloralMood** is an AI-powered wedding floral moodboard generator + auto-quote system for Australian florists.

**Core Value Proposition:**
> "Client brief → AI moodboard (8-12 images) + auto-calculated quote in <10 minutes"

**Target Users:** Australian wedding florists (solo to 5-person studios, $80K-500K revenue)

**Business Model:**
- SaaS subscription: $79/mo (40 moodboards)
- AI cost per moodboard: ~$0.87 (10 images HD)
- Target margin: ~71%

---

## 🚀 CURRENT DEVELOPMENT APPROACH

### AI-First Philosophy

**This project follows an AI-First development approach:**
- Developer: **You (Claude Code)** - Write 95% of the code
- Product Manager: **Me (Human)** - Architecture, specs, review
- Timeline: 5 months (170h) to production-ready MVP
- Learning focus: AI orchestration > manual coding

**My Learning Path:**
```
Month 1 (current): Foundational Concepts (20h)
Month 2: Claude Code Mastery (40h)
Month 3: Stack Comprehension (30h)
Month 4: Architecture & Design (30h)
Month 5: MVP Production (50h)
```

**References:**
- Full learning path: `LEARNING_PATH.md`
- Orchestration guide: `AI_ORCHESTRATION_GUIDE.md`
- Getting started: `GETTING_STARTED.md`

---

## 📋 PROJECT STATUS

### Current Phase: Month 1 - Foundational Concepts
**Focus:** Learning web architecture concepts (no coding yet)
**Duration:** February 2026 (Weeks 1-4)
**Activities:** Reading, conceptual exercises, system design understanding

### Next Phases:
- **Month 2 (March):** Practice with Claude Code on simple projects
- **Month 3 (April):** Stack comprehension (reading generated code)
- **Month 4 (May):** Architecture design (my expertise)
- **Month 5 (June-July):** FloralMood MVP implementation (you + me)

---

## 🏗️ TECHNICAL ARCHITECTURE

### Stack (Decided & Unified)

```yaml
Frontend:
  Framework: React 18 + TypeScript
  Styling: Tailwind CSS
  Build: Vite
  Hosting: Vercel

Backend:
  Runtime: Node.js 20 LTS
  Framework: Express.js
  Language: JavaScript → TypeScript (Month 5)
  Hosting: Railway or Render

Database:
  Platform: Supabase (PostgreSQL managed)
  Auth: Supabase Auth
  Storage: Supabase Storage

AI Services:
  Portfolio Analysis: GPT-4 Vision (gpt-4-vision-preview)
  Meta-Prompt Generation: Claude Sonnet 4.5 (claude-sonnet-4-5-20250929)
  Image Generation: DALL-E 3 HD ($0.08/image)

Orchestration Tools:
  Primary: Claude Code (you!)
  MCP: Notion, GitHub, n8n
  Design: Figma / Excalidraw
  Task Management: GitHub Projects
```

**Reference:** Full architecture in `3_notes/architecture.md`

---

## 📊 KEY TECHNICAL DECISIONS

### DT1: AI Image Generation Strategy
**Decision:** Meta-prompt system (2-stage)
- **Stage 1:** GPT-4 Vision analyzes florist portfolio (5-15 images)
- **Stage 2:** Claude Sonnet 4.5 generates structured prompts using 100+ rules
- **Stage 3:** DALL-E 3 HD generates images ($0.08 each)

**Cost per moodboard:** $0.87 (10 images HD + vision analysis)
**Margin:** ~71% at $3 pricing tier

**Reference:** `3_notes/meta_prompt_system.md`

---

### DT2: Seasonal Validation
**Decision:** Validated combinations database + seasonal logic
- **Database:** 20 pre-tested combinations (5 per season)
- **Validation:** Automatic seasonal flower availability check
- **Substitution:** Smart replacements (e.g., peonies → roses in winter)

**Reference:**
- `3_notes/seasonal_flowers_schema.sql`
- `3_notes/validated_combinations.json`
- `3_notes/seasonal_validation_logic.md`

---

### DT3: MVP Scope
**Decision:** F1-F15 for MVP, F16-F26 Phase 2

**MVP Features (F1-F15):**
1. Client Brief Form (5-step, mobile-first)
2. AI Moodboard Generation (meta-prompt system)
3. Florist Dashboard (leads management)
4. Client Moodboard Page (public view)
5. Lead Management & Status Workflow
6. Portfolio Style Inspiration
7-15. Support features (auth, notifications, editing, error handling, onboarding, etc.)

**Phase 2 Features (F16-F26):**
16-26. Advanced features (analytics, team collaboration, custom branding, etc.)

**Reference:** `3_notes/vision_et_scope.md` (sections F1-F26)

---

### DT4: Templates Strategy
**MVP (Month 5):** 1 template only (Classic Grid)
- Simplify for MVP core
- Focus: functionality > design

**Phase 3 (Months 6-7):** 6 professional templates
- Classic: Grid, Warm, Heritage, Gallery
- Prestige: Soft Luxe, Bold, Minimal
- Template selection in onboarding
- AI personalization layer

**Reference:** `4_prototypes/*.html` (6 templates prototyped)

---

## 📁 KEY FILES & DOCUMENTATION

### Strategic Documents
- **`SESSION_ALIGNMENT.md`** - How Sessions 1 & 2 integrate, pivot explanation
- **`CHANGELOG.md`** - 27 contradictions resolved, all decisions documented
- **`LEARNING_PATH.md`** - Complete 5-month roadmap (week-by-week)
- **`AI_ORCHESTRATION_GUIDE.md`** - How to work with me effectively
- **`GETTING_STARTED.md`** - Environment setup guide

### Technical Specifications
- **`3_notes/vision_et_scope.md`** (84KB) - Complete product vision, all 26+ features
- **`3_notes/architecture.md`** (21KB) - System architecture, DB schema, API endpoints
- **`3_notes/meta_prompt_system.md`** (30KB) - AI generation architecture
- **`3_notes/prompt_templates.md`** (32KB) - 15 prestation templates
- **`3_notes/seasonal_validation_logic.md`** - Seasonal algorithm

### Data Files
- **`3_notes/prompt_rules_database.json`** (19KB) - 100+ prompt engineering rules
- **`3_notes/validated_combinations.json`** (35KB) - 20 validated floral combinations
- **`3_notes/seasonal_flowers_schema.sql`** (17KB) - Complete DB schema
- **`3_notes/n8n_workflow_prototype.json`** - Workflow prototype (testable)

### Design Prototypes
- **`4_prototypes/*.html`** - 6 HTML template prototypes (Phase 3)

---

## 🎯 CODING CONVENTIONS & STANDARDS

### When You (Claude Code) Write Code

**Always Follow:**

1. **Security First:**
   - ❌ NEVER use `dangerouslySetInnerHTML` without sanitization
   - ❌ NEVER hardcode secrets (use environment variables)
   - ✅ ALWAYS parameterize database queries (prevent SQL injection)
   - ✅ ALWAYS validate user input (Zod schemas recommended)
   - ✅ ALWAYS implement rate limiting on public endpoints

2. **Code Quality:**
   - ✅ Clear variable/function names (no abbreviations)
   - ✅ Comments for complex logic only (code should be self-documenting)
   - ✅ Separation of concerns (routes → controllers → services)
   - ✅ DRY principle (don't repeat yourself)
   - ❌ NO premature optimization (make it work first)

3. **Error Handling:**
   - ✅ Try/catch on all async operations
   - ✅ Meaningful error messages (user-facing)
   - ✅ Log errors with context (timestamp, user ID, action)
   - ✅ Graceful degradation (partial failures don't crash app)

4. **Performance:**
   - ✅ Pagination for lists >100 items
   - ✅ Debouncing on search/autocomplete (300ms)
   - ✅ Lazy loading for images
   - ✅ Promise.all for parallel API calls (not sequential loops)
   - ❌ NO N+1 query problems (batch database operations)

5. **Testing:**
   - ✅ Write tests for critical business logic
   - ✅ API endpoints should have integration tests
   - ✅ E2E tests for main user flows
   - Format: Jest for unit/integration, Playwright for E2E

---

## 📝 HOW TO WORK WITH ME (Human)

### My Prompts Will Include:

1. **Context:** Why this feature is needed
2. **Specifications:** Detailed technical requirements
3. **Constraints:** Security, performance, compatibility requirements
4. **Acceptance Criteria:** Testable success conditions
5. **References:** Links to docs, examples, existing code

**Example Prompt Structure:**
```markdown
# Feature: [Name]

## Context
[Why we need this]

## Objective
[What we want to achieve]

## Specifications
[Detailed technical specs]

## Constraints
[Security, performance, etc.]

## Acceptance Criteria
- [ ] Testable criterion 1
- [ ] Testable criterion 2

## References
[Relevant docs/files]
```

---

### When I Review Your Code

**I will check:**
- ✅ Functionality (does it work as specified?)
- ✅ Security (any vulnerabilities?)
- ✅ Performance (any bottlenecks?)
- ✅ Code quality (readable, maintainable?)
- ✅ Testing (adequate coverage?)

**If I find issues, I will:**
- Identify specific file and line number
- Explain the problem clearly
- Suggest a fix (or ask you to propose one)
- Use this format: "File: X, Line: Y, Issue: Z, Fix: W"

---

### Workflow Modes

**Plan Mode:**
- I'll say: "Enter plan mode: [task description]"
- You explore codebase, propose architecture
- I review and approve
- Then you implement

**Task System:**
- I'll create tasks: `/task create "Feature X"`
- You update status: `/task update task-1 --status in_progress`
- Helps track progress on multi-feature work

**Multi-Agent:**
- I'll say: "Launch 3 agents in parallel: [task1, task2, task3]"
- You coordinate multiple agents for parallel work
- Used for independent features that can be developed simultaneously

---

## 🚨 IMPORTANT CONSTRAINTS

### MVP Simplicity Rules

**For Month 5 MVP, we prioritize:**
1. **Functionality over perfection** - Make it work first
2. **Security over features** - No compromises on security
3. **Simple over clever** - Readable > concise
4. **Tested over polished** - Manual testing is OK for MVP

**Avoid for MVP:**
- ❌ Microservices (use monolith)
- ❌ Complex state management (Context API is enough)
- ❌ Custom design systems (Tailwind + Headless UI)
- ❌ Over-engineering (YAGNI - You Aren't Gonna Need It)

---

### Australian Market Specifics

**Always remember:**
- Currency: **AUD** (Australian Dollars)
- Tax: **GST 10%** (Goods and Services Tax)
- Date format: **DD/MM/YYYY** or **15 June 2026**
- Phone: **+61** country code
- Language: **English (Australian spelling)** - colour, organised, etc.

---

## 🔐 SECURITY REQUIREMENTS

### Critical Security Controls

**Authentication:**
- Use Supabase Auth (JWT tokens)
- NEVER implement custom auth from scratch
- Session timeout: 1 hour (configurable)
- Refresh tokens: automatic (Supabase handles)

**Authorization:**
- Row Level Security (RLS) on ALL Supabase tables
- Users can only access their own data
- Public moodboard links: UUID only (not sequential IDs)

**Input Validation:**
- Validate ALL user input (client + server side)
- Use Zod schemas for type safety
- Sanitize HTML if ever displayed
- Max lengths enforced

**API Security:**
- Rate limiting: 10 req/min per user (authenticated endpoints)
- Rate limiting: 5 req/min per IP (public endpoints)
- CORS: Whitelist only (no `*`)
- HTTPS only (enforced by Vercel)

**Environment Variables:**
- NEVER commit `.env` files
- Use `.env.example` for documentation
- Secrets in Vercel/Railway dashboard
- Different keys for dev/production

---

## 💰 COST MANAGEMENT

### AI API Budget

**Per Moodboard:**
- GPT-4 Vision (portfolio analysis): $0.024
- Claude Sonnet 4.5 (meta-prompt): $0.05
- DALL-E 3 HD (10 images × $0.08): $0.80
- **Total:** $0.87/moodboard

**Monthly (at 40 moodboards):**
- AI costs: $34.80
- Revenue: $79
- Other costs: ~$5 (hosting, DB)
- **Net margin:** ~$39 (~50%+)

**Budget Controls:**
- Daily cap: $50 (system-wide)
- Per-florist cap: $20/day
- Alert at 80% daily budget
- Automatic pause at 100%

**Monitoring:**
- Track cost per moodboard
- Alert on anomalies (>$2/moodboard)
- Monthly cost report to admin

---

## 📊 DEVELOPMENT PHASES

### Phase 1 (Current): Learning - Months 1-4
**Status:** 🔄 In Progress (Month 1/4)
**My Activities:** Learning concepts, reading docs, understanding architecture
**Your Activities:** Minimal (practice projects in Month 2)

### Phase 2: MVP Core - Month 5
**Status:** ⏳ Starts June 2026
**My Activities:** Writing specs, reviewing code, testing, managing sprints
**Your Activities:** Implementing all features (F1-F15) under my direction

**5 Sprints:**
1. Auth & Portfolio (8h)
2. Client Brief & Validation (8h)
3. Meta-Prompt & AI Generation (10h)
4. Moodboard Display & Sharing (10h)
5. Billing & Polish (8h)

### Phase 3: Templates & Polish - Months 6-7
**Status:** ⏳ Starts July-August 2026
**Activities:** Implement 6 templates, advanced features (F16-F26), beta testing

---

## 🎯 SUCCESS METRICS

### MVP Launch Criteria (End of Month 5)

**Technical:**
- [ ] All 15 features working (F1-F15)
- [ ] Security scan: 0 critical vulnerabilities
- [ ] Performance: <2s page load time
- [ ] Uptime: 99%+ (monitored)
- [ ] End-to-end tests: 100% passing

**Business:**
- [ ] 5 beta testers (real florists)
- [ ] 10+ moodboards generated successfully
- [ ] Payment flow working (Stripe test mode)
- [ ] Positive feedback (3.5+/5 average)

**Documentation:**
- [ ] README.md complete
- [ ] API documentation (OpenAPI)
- [ ] User guide (1 page)
- [ ] Deployment guide

---

## 🆘 WHEN THINGS GO WRONG

### If You (Claude) Encounter Errors

**Always:**
1. Provide clear error message to me
2. Suggest 2-3 possible causes
3. Propose fix (or ask for clarification)
4. Never silently fail or make assumptions

**Format:**
```
⚠️ ERROR ENCOUNTERED

What happened: [Description]
Where: [File:line]
Error message: [Exact error]

Possible causes:
1. [Cause 1]
2. [Cause 2]

Suggested fix:
[Specific code change or action]

Need clarification on: [If unsure]
```

---

### If I (Human) Request Invalid/Dangerous Changes

**Always:**
1. Explain why the request is problematic
2. Suggest safer alternative
3. Ask for confirmation if I still want to proceed

**Example:**
```
⚠️ SECURITY CONCERN

Your request to [X] would create a security vulnerability:
- Risk: [Specific vulnerability]
- Impact: [Potential damage]

Safer alternative:
[Suggest better approach]

If you still want to proceed, please confirm by typing "I understand the risks"
```

---

## 📚 ADDITIONAL RESOURCES

### When You Need Context

**Architecture questions?** → Read `3_notes/architecture.md`
**Feature specifications?** → Read `3_notes/vision_et_scope.md` (F1-F26 sections)
**AI generation logic?** → Read `3_notes/meta_prompt_system.md`
**Prompt templates?** → Read `3_notes/prompt_templates.md`
**Seasonal validation?** → Read `3_notes/seasonal_validation_logic.md`

### External Documentation

**React:** https://react.dev/
**Node.js:** https://nodejs.org/docs/
**Express:** https://expressjs.com/
**Supabase:** https://supabase.com/docs
**Tailwind CSS:** https://tailwindcss.com/docs
**OpenAI API:** https://platform.openai.com/docs

---

## 🎓 PROJECT PHILOSOPHY

### Core Principles

1. **AI-First, Not AI-Only**
   - You (Claude) write the code
   - I (human) provide architecture, specs, review
   - We collaborate, each playing to strengths

2. **Learning Through Building**
   - This project is both a product AND a learning journey
   - Documentation is as important as code
   - Mistakes are learning opportunities

3. **Production Quality from Day 1**
   - Even in MVP, no compromises on security
   - Code should be maintainable (not just working)
   - Tests are not optional

4. **Iterative Development**
   - Build → Test → Review → Improve → Repeat
   - Start simple, add complexity only when needed
   - Ship small, ship often

---

## 📝 VERSION HISTORY

**v1.0 (6 Feb 2026):** Initial CLAUDE.md created
- AI-First approach documented
- All key decisions captured
- Month 1 learning phase in progress
- Ready for Month 5 implementation

---

## 🤝 LET'S BUILD TOGETHER!

**Remember:**
- You = Implementation expert (95% of code)
- Me = Product Manager (architecture, specs, review)
- Goal = FloralMood MVP production-ready in 5 months
- Approach = AI-First, collaborative, learning-focused

**When in doubt:**
1. Ask clarifying questions
2. Propose 2-3 alternatives
3. Explain trade-offs
4. Wait for my decision

**Let's create something amazing! 🚀**

---

**Last Updated:** 6 February 2026
**Project Status:** Phase 1 - Learning (Month 1/5)
**Next Session:** Continue Month 1 foundational concepts
