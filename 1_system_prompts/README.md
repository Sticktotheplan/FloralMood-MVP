# FloralMood MVP - AI-First Development Project

> AI-powered wedding floral moodboard generator for Australian florists

**Status:** 🔄 Phase 1 - Learning & Architecture (Month 1/5)
**Approach:** AI-First Developer/Orchestrator
**Timeline:** 5 months (170h) to production-ready MVP
**Last Updated:** 6 February 2026

---

## 🎯 Project Overview

**FloralMood** transforms how wedding florists qualify leads and present proposals.

**Value Proposition:**
> "Client brief → AI moodboard (8-12 images) + auto-calculated quote in <10 minutes"

**Target Market:** Australian wedding florists (solo to 5-person studios, $80K-500K revenue)

---

## 🚀 AI-First Development Approach

This project follows an **AI-First development methodology**:

- **95% of code** written by Claude Code (AI agent)
- **100% of architecture** designed by human (me)
- **Focus:** Learning to orchestrate AI agents, not manual coding
- **Goal:** Production-ready MVP in 5 months vs 6+ months traditional approach

**Why AI-First?**
- Faster time to market (4-5 months)
- Focus on architecture & product management
- Future-proof skills (AI orchestration)
- Better result (production-ready vs tutorial-level)

---

## 📚 Documentation Structure

### 🌟 Start Here
- **[CLAUDE.md](./CLAUDE.md)** - Project reference for Claude Code (auto-loaded)
- **[GETTING_STARTED.md](./GETTING_STARTED.md)** - Environment setup + first project
- **[SESSION_ALIGNMENT.md](./3_notes/SESSION_ALIGNMENT.md)** - Project evolution & integration

### 📖 Learning Path
- **[LEARNING_PATH.md](./LEARNING_PATH.md)** - Complete 5-month roadmap (week-by-week)
- **[AI_ORCHESTRATION_GUIDE.md](./AI_ORCHESTRATION_GUIDE.md)** - Mastering Claude Code orchestration

### 📝 Project History
- **[CHANGELOG.md](./CHANGELOG.md)** - All 27 contradictions resolved, decisions documented

### 🏗️ Technical Specifications
- **[3_notes/vision_et_scope.md](./3_notes/vision_et_scope.md)** (84KB) - Complete product vision, all features
- **[3_notes/architecture.md](./3_notes/architecture.md)** (21KB) - System architecture, DB schema, API endpoints
- **[3_notes/meta_prompt_system.md](./3_notes/meta_prompt_system.md)** (30KB) - AI generation architecture

### 📊 Data & Schemas
- **[3_notes/prompt_rules_database.json](./3_notes/prompt_rules_database.json)** - 100+ prompt engineering rules
- **[3_notes/validated_combinations.json](./3_notes/validated_combinations.json)** - 20 validated floral combinations
- **[3_notes/seasonal_flowers_schema.sql](./3_notes/seasonal_flowers_schema.sql)** - Complete database schema

### 🎨 Design Prototypes
- **[4_prototypes/](./4_prototypes/)** - 6 HTML template prototypes (Phase 3)

---

## 🛠️ Tech Stack

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
  Portfolio Analysis: GPT-4 Vision
  Meta-Prompt Generation: Claude Sonnet 4.5
  Image Generation: DALL-E 3 HD ($0.08/image)

Orchestration:
  Primary: Claude Code
  MCP: Notion, GitHub, n8n
  Task Management: GitHub Projects
```

---

## 📊 Project Phases

### ✅ Phase 0: Documentation Alignment (Complete)
- **Duration:** 2-3 hours (6 Feb 2026)
- **Output:**
  - 27 contradictions resolved
  - 6 strategic documents created (143KB)
  - Sessions 1 & 2 integrated
  - AI-First approach documented

### 🔄 Phase 1: Learning (Current - Months 1-4)
- **Month 1 (Feb):** Foundational Concepts (20h)
- **Month 2 (Mar):** Claude Code Mastery (40h)
- **Month 3 (Apr):** Stack Comprehension (30h)
- **Month 4 (May):** Architecture & Design (30h)

### ⏳ Phase 2: MVP Core (Month 5)
- **Duration:** June-July 2026 (50h)
- **Output:** 15 features (F1-F15), production deployment
- **Milestones:** 5 sprints (Auth, Brief, AI Generation, Display, Billing)

### ⏳ Phase 3: Templates & Polish (Months 6-7)
- **Duration:** July-August 2026 (40h)
- **Output:** 6 professional templates, advanced features (F16-F26)

---

## 🎯 MVP Features (F1-F15)

**Core Functionality:**
1. ✅ Client Brief Form (5-step, mobile-first)
2. ✅ AI Moodboard Generation (meta-prompt system, 10 images HD)
3. ✅ Florist Dashboard (leads management)
4. ✅ Client Moodboard Page (public view, branded)
5. ✅ Lead Management & Scoring (0-100)
6. ✅ Portfolio Style Inspiration (GPT-4 Vision analysis)
7-15. Support features (auth, notifications, editing, error handling, onboarding, etc.)

**Phase 2 Features (F16-F26):**
- Analytics dashboard
- Team collaboration
- Custom branding
- Template customization
- Advanced editing
- And more...

---

## 💰 Business Model

**Pricing Strategy (MVP):**
- $79/month (40 moodboards)
- AI cost per moodboard: ~$0.87
- Target margin: ~71%

**Cost Breakdown per Moodboard:**
- GPT-4 Vision (portfolio analysis): $0.024
- Claude Sonnet 4.5 (meta-prompt): $0.05
- DALL-E 3 HD (10 images): $0.80
- **Total:** $0.874

**Pricing Tiers (Phase 3):**
- Starter: $39/mo (10 moodboards)
- Professional: $79/mo (40 moodboards)
- Studio: $149/mo (unlimited + custom LoRA training)

---

## 📅 Current Status

**Phase:** Month 1 - Week 1 (Foundational Concepts)
**Focus:** Learning web architecture, HTTP, REST APIs, database concepts
**Next Milestone:** Month 1 completion (end of February)
**Next Major Phase:** Month 2 - Claude Code Mastery (March)

---

## 🤝 Contributing

This is a personal learning project following an AI-First methodology. The repository serves as:
- Documentation of the AI-First learning journey
- Reference for others pursuing similar approaches
- Showcase of AI orchestration capabilities

**Not accepting external contributions**, but feel free to:
- ⭐ Star if you find the approach interesting
- 🔗 Reference this methodology in your own projects
- 💬 Open discussions about AI-First development

---

## 📖 Learning Resources

**AI-First Development:**
- [Anthropic 2026 Agentic Coding Trends Report](https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf)
- [Claude Code and What Comes Next - Ethan Mollick](https://www.oneusefulthing.org/p/claude-code-and-what-comes-next)
- [Eight trends defining software in 2026](https://claude.com/blog/eight-trends-defining-how-software-gets-built-in-2026)

**Technical Stack:**
- [React Documentation](https://react.dev/)
- [Supabase Documentation](https://supabase.com/docs)
- [OpenAI API Reference](https://platform.openai.com/docs)
- [Claude API Documentation](https://docs.anthropic.com/)

---

## 📜 License

**Proprietary** - This is a private learning project and commercial application.

Documentation may be referenced with attribution, but code implementation is not open source.

---

## 📧 Contact

**Project Owner:** [Your Name]
**Learning Journey:** AI-First Developer/Orchestrator
**Timeline:** Feb-July 2026 (5 months)
**Goal:** Production-ready FloralMood MVP

---

**Built with:** Claude Code (Anthropic) + Human Orchestration 🤖🤝👨‍💻

**Last Updated:** 6 February 2026
