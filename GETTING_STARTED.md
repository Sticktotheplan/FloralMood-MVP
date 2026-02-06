# 🚀 GETTING STARTED - AI-First Developer Setup

**Objectif:** Setup environnement et premier projet avec Claude Code
**Durée:** 2-3 heures
**Prérequis:** Aucun (beginner-friendly)

---

## 📋 TABLE DES MATIÈRES

1. [Setup Environnement](#setup-environnement)
2. [Premier Projet avec Claude](#premier-projet-avec-claude)
3. [Commandes Essentielles](#commandes-essentielles)
4. [Troubleshooting](#troubleshooting)
5. [Prochaines Étapes](#prochaines-étapes)

---

## 💻 SETUP ENVIRONNEMENT

### 1. Installer Node.js (20 LTS)

**Windows:**
1. Télécharger [Node.js 20 LTS](https://nodejs.org/)
2. Exécuter l'installateur
3. Vérifier installation:
   ```bash
   node --version
   # Devrait afficher: v20.x.x

   npm --version
   # Devrait afficher: 10.x.x
   ```

**Mac:**
```bash
# Installer Homebrew (si pas déjà installé)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Installer Node.js
brew install node@20

# Vérifier
node --version
npm --version
```

---

### 2. Installer Git

**Windows:**
1. Télécharger [Git for Windows](https://git-scm.com/download/win)
2. Exécuter l'installateur (laisser options par défaut)
3. Vérifier:
   ```bash
   git --version
   # Devrait afficher: git version 2.x.x
   ```

**Mac:**
```bash
# Git est inclus dans Xcode Command Line Tools
xcode-select --install

# Vérifier
git --version
```

---

### 3. Installer Code Editor (VS Code)

1. Télécharger [Visual Studio Code](https://code.visualstudio.com/)
2. Installer
3. Extensions recommandées:
   - ESLint
   - Prettier
   - GitLens
   - Tailwind CSS IntelliSense
   - Supabase (optional)

**Configuration VS Code:**
```json
// Ouvrir: File > Preferences > Settings (JSON)
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.autoSave": "onFocusChange",
  "terminal.integrated.defaultProfile.windows": "Git Bash"
}
```

---

### 4. Créer Comptes Services

#### **A. GitHub**
1. Aller sur [github.com](https://github.com)
2. Créer compte gratuit
3. Vérifier email

#### **B. Supabase**
1. Aller sur [supabase.com](https://supabase.com)
2. Créer compte gratuit (sign up with GitHub)
3. Créer premier projet: "floralmood-mvp"
   - Region: Closest to you
   - Password: Générer automatiquement (save it!)

#### **C. Vercel**
1. Aller sur [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Connecter votre compte GitHub

#### **D. OpenAI** (optionnel pour Mois 5)
1. Aller sur [platform.openai.com](https://platform.openai.com)
2. Créer compte
3. Ajouter méthode de paiement ($5 minimum)
4. Générer API key (save it!)

---

### 5. Installer Claude Code (CLI)

**Note:** Claude Code est déjà installé si vous utilisez la CLI Anthropic.

**Vérifier installation:**
```bash
claude --version
```

**Si pas installé:**
```bash
# Installer via npm
npm install -g @anthropic-ai/claude-code

# Vérifier
claude --version
```

---

### 6. Setup Git Configuration

```bash
# Configurer nom et email
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"

# Vérifier configuration
git config --list
```

---

### 7. Créer Structure Dossiers

```bash
# Créer dossier projets
mkdir ~/projects
cd ~/projects

# Créer dossier FloralMood
mkdir floralmood-mvp
cd floralmood-mvp

# Initialiser Git
git init

# Créer structure de base
mkdir -p src/{components,services,api,utils}
mkdir -p public/images
touch .gitignore .env.example README.md

# Créer .gitignore
cat << 'EOF' > .gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
build/
dist/

# Environment
.env
.env.local
.env.production

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Temporary
*.swp
*.swo
*~
EOF
```

---

## 🎯 PREMIER PROJET AVEC CLAUDE

### Projet: Simple Todo App (CRUD)

**Objectif:** Apprendre workflow Claude Code avec projet simple

---

### Étape 1: Initialiser Projet (10 min)

```bash
# Dans ~/projects
mkdir todo-app-claude
cd todo-app-claude

# Initialiser Node.js project
npm init -y

# Installer dépendances
npm install express
npm install --save-dev nodemon

# Créer structure
mkdir -p src/{routes,controllers,services}
touch src/server.js
touch .env
```

---

### Étape 2: Écrire Prompt pour Claude (15 min)

**Créer fichier:** `PROMPT_TODO_APP.md`

```markdown
# Project: Todo App - CRUD API

## Context
I'm learning AI-First development with Claude Code. This is a practice project to understand workflow.

## Objective
Create a simple Todo API with CRUD operations (Create, Read, Update, Delete).

## Technical Specifications

### Stack
- **Backend:** Node.js + Express
- **Data Storage:** In-memory array (no database for simplicity)
- **Port:** 3000

### API Endpoints

**1. GET /api/todos**
- List all todos
- Response: `{ todos: [...] }`

**2. POST /api/todos**
- Create new todo
- Body: `{ title: string, description?: string }`
- Response: `{ todo: {...}, message: "Todo created" }`

**3. PATCH /api/todos/:id**
- Mark todo as complete/incomplete
- Body: `{ completed: boolean }`
- Response: `{ todo: {...}, message: "Todo updated" }`

**4. DELETE /api/todos/:id**
- Delete todo
- Response: `{ message: "Todo deleted" }`

### Data Model
```javascript
{
  id: string (UUID),
  title: string,
  description: string,
  completed: boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Validation
- title: Required, 1-100 characters
- description: Optional, max 500 characters

### Error Handling
- 400: Invalid input
- 404: Todo not found
- 500: Server error

## Constraints
- **Simple:** No database (in-memory only)
- **Clean:** Separate routes, controllers, services
- **Comments:** Add comments for learning

## Acceptance Criteria
- [ ] Server starts on port 3000
- [ ] All 4 endpoints work correctly
- [ ] Validation errors return 400
- [ ] Not found returns 404
- [ ] Can test with Postman/curl

## Files to Create
1. `src/server.js` - Express server setup
2. `src/routes/todoRoutes.js` - Route definitions
3. `src/controllers/todoController.js` - Request handlers
4. `src/services/todoService.js` - Business logic
5. `package.json` scripts:
   - `"start": "node src/server.js"`
   - `"dev": "nodemon src/server.js"`

## References
- Express docs: https://expressjs.com/
- Similar project: Simple REST API tutorial
```

---

### Étape 3: Lancer Claude Code (30 min)

**Dans le terminal:**

```bash
# Démarrer Claude Code
claude code

# Ou si vous utilisez la session CLI actuelle, donner le prompt:
# Copier-coller le contenu de PROMPT_TODO_APP.md
```

**Prompt:**
```
I want to create a simple Todo API. Please read the specifications in PROMPT_TODO_APP.md and implement the project.

Use plan mode first to show me the architecture, then implement step by step.
```

**Claude va:**
1. Lire votre prompt
2. Proposer un plan (architecture, fichiers)
3. Demander votre validation
4. Implémenter les fichiers
5. Vous notifier quand c'est terminé

---

### Étape 4: Review Code Généré (20 min)

**Checklist de Review:**

```markdown
## Functionality Review
- [ ] Tous les fichiers créés?
  - src/server.js
  - src/routes/todoRoutes.js
  - src/controllers/todoController.js
  - src/services/todoService.js

- [ ] package.json scripts correct?
  - "start" command exists?
  - "dev" command exists?

## Code Quality Review
- [ ] Code lisible et commenté?
- [ ] Separation of concerns (routes/controllers/services)?
- [ ] Error handling present?
- [ ] Validation implemented?

## Security Review
- [ ] No hardcoded secrets?
- [ ] Input validation working?
- [ ] Error messages not exposing internals?
```

**Si problèmes identifiés:**
```
I found 2 issues in the generated code:

1. Missing input validation for title (should be 1-100 chars)
   File: src/controllers/todoController.js, line 12

   Please add validation:
   ```javascript
   if (!title || title.length < 1 || title.length > 100) {
     return res.status(400).json({ error: "Title must be 1-100 characters" })
   }
   ```

2. Error handling missing for invalid ID format
   File: src/services/todoService.js, line 45

   Please add try-catch around UUID operations.
```

---

### Étape 5: Test Manuel (15 min)

```bash
# Démarrer serveur
npm run dev

# Le serveur devrait afficher:
# Server running on http://localhost:3000
```

**Tester avec curl:**

```bash
# 1. Create todo
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn Claude Code", "description": "Practice AI-First development"}'

# Response: { "todo": {...}, "message": "Todo created" }

# 2. List todos
curl http://localhost:3000/api/todos

# Response: { "todos": [...] }

# 3. Mark complete
curl -X PATCH http://localhost:3000/api/todos/[ID] \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'

# 4. Delete todo
curl -X DELETE http://localhost:3000/api/todos/[ID]
```

**Ou utiliser Postman:**
1. Télécharger [Postman](https://www.postman.com/downloads/)
2. Créer nouvelle collection "Todo API"
3. Ajouter 4 requests (GET, POST, PATCH, DELETE)
4. Tester chaque endpoint

---

### Étape 6: Demander Améliorations (20 min)

**Une fois que ça marche, demander:**

```
The Todo API works well! Now I want to add 2 improvements:

1. Add pagination to GET /api/todos
   - Query params: ?page=1&limit=10
   - Default: page=1, limit=20
   - Response: { todos: [...], page: 1, total: 50, totalPages: 3 }

2. Add search functionality
   - Query param: ?search=keyword
   - Search in title and description (case-insensitive)
   - Response: { todos: [...matching todos...], count: 5 }

Please implement these features maintaining the existing code structure.
```

**Claude va:**
1. Analyser code existant
2. Proposer modifications
3. Implémenter features
4. Vous notifier

---

### Étape 7: Documentation (10 min)

**Créer README.md:**

```markdown
# Todo API - Learning Claude Code

Simple CRUD API built with Claude Code to learn AI-First development workflow.

## Features
- ✅ Create todos
- ✅ List all todos (with pagination & search)
- ✅ Mark todos complete/incomplete
- ✅ Delete todos

## Tech Stack
- Node.js 20 LTS
- Express.js
- In-memory storage (no database)

## Installation

```bash
npm install
```

## Usage

```bash
# Development mode (auto-reload)
npm run dev

# Production mode
npm start
```

Server runs on `http://localhost:3000`

## API Endpoints

### List Todos
```
GET /api/todos?page=1&limit=10&search=keyword
```

### Create Todo
```
POST /api/todos
Body: { "title": "string", "description": "string" }
```

### Update Todo
```
PATCH /api/todos/:id
Body: { "completed": boolean }
```

### Delete Todo
```
DELETE /api/todos/:id
```

## Learning Notes

**What I learned:**
- How to write effective prompts for Claude Code
- How to review AI-generated code (functionality, security, quality)
- How to request improvements and corrections
- Workflow: Prompt → Plan → Implement → Review → Iterate

**Time spent:**
- Initial implementation: 30 min (Claude)
- Code review: 20 min (me)
- Testing: 15 min (me)
- Improvements: 20 min (Claude)
- **Total: ~1.5 hours** (vs 4-6h manual coding)

**AI-First advantage:**
- 70-80% time saved on implementation
- Focus on architecture & specs instead of syntax
- Faster iteration cycles
```

---

## 🛠️ COMMANDES ESSENTIELLES

### Git Commands

```bash
# Initialiser repo
git init

# Ajouter fichiers
git add .

# Commit
git commit -m "Initial commit: Todo API with Claude Code"

# Créer repo GitHub (via gh CLI)
gh repo create todo-app-claude --public --source=. --remote=origin

# Push
git push -u origin main
```

---

### NPM Commands

```bash
# Installer dépendances
npm install

# Installer dev dependency
npm install --save-dev package-name

# Démarrer projet
npm start

# Mode développement (auto-reload)
npm run dev

# Mettre à jour packages
npm update

# Voir packages installés
npm list --depth=0
```

---

### Claude Code Commands

```bash
# Démarrer Claude Code
claude code

# Avec contexte spécifique
claude code --context "path/to/file.md"

# Mode plan
claude code --plan

# Task system
/task create "Feature description"
/task list
/task update task-1 --status completed

# Help
claude --help
```

---

## 🆘 TROUBLESHOOTING

### Problème 1: "node: command not found"

**Solution:**
```bash
# Windows: Redémarrer terminal après installation Node.js

# Mac: Vérifier PATH
echo $PATH
# Devrait contenir: /usr/local/bin

# Si manquant, ajouter à ~/.zshrc ou ~/.bash_profile:
export PATH="/usr/local/bin:$PATH"
source ~/.zshrc
```

---

### Problème 2: "Port 3000 already in use"

**Solution:**
```bash
# Windows: Trouver processus
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux: Trouver et tuer processus
lsof -i :3000
kill -9 <PID>

# Ou changer port dans code
# src/server.js: const PORT = 3001
```

---

### Problème 3: "Cannot find module 'express'"

**Solution:**
```bash
# Réinstaller dépendances
rm -rf node_modules package-lock.json
npm install
```

---

### Problème 4: Claude Code ne répond pas

**Solution:**
1. Vérifier connexion internet
2. Vérifier API key (si applicable)
3. Essayer dans nouveau terminal
4. Redémarrer VS Code

---

### Problème 5: Git push échoue (permission denied)

**Solution:**
```bash
# Configurer SSH key pour GitHub
ssh-keygen -t ed25519 -C "votre@email.com"

# Ajouter à ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Copier public key
cat ~/.ssh/id_ed25519.pub
# Ajouter sur GitHub: Settings > SSH and GPG keys

# Tester connexion
ssh -T git@github.com
```

---

## 📚 PROCHAINES ÉTAPES

### Immédiat (Aujourd'hui)

1. **✅ Terminer Setup:**
   - [ ] Tous les outils installés (Node, Git, VS Code)
   - [ ] Comptes créés (GitHub, Supabase, Vercel)
   - [ ] Premier projet Todo App fonctionnel

2. **✅ Valider Apprentissage:**
   - [ ] README.md écrit avec learning notes
   - [ ] Code poussé sur GitHub
   - [ ] Vous pouvez expliquer workflow Claude Code

---

### Cette Semaine (Mois 1 - Semaine 1)

3. **📖 Commencer Fondamentaux Conceptuels:**
   - [ ] Lire Web.dev - How the web works
   - [ ] Regarder Fireship HTTP video
   - [ ] Dessiner architecture client/server
   - [ ] Quiz 10 questions HTTP

4. **📝 Créer Système de Documentation:**
   - [ ] Créer notebook apprentissage (physique ou digital)
   - [ ] Format: Date | Concept | Exercice | Learning
   - [ ] Objectif: Track progress

---

### Ce Mois (Mois 1 - Février)

5. **🎯 Compléter Mois 1:**
   - [ ] Architecture web (Semaine 1-2)
   - [ ] Database & Auth (Semaine 3)
   - [ ] Validation concepts (Semaine 4)
   - [ ] Quiz final: 80%+ score

6. **🗂️ Organiser FloralMood:**
   - [ ] Lire tous les documents `3_notes/`
   - [ ] Comprendre architecture complète
   - [ ] Préparer questions pour Mois 2

---

### Prochains Mois (Mars-Juillet)

7. **📅 Suivre LEARNING_PATH.md:**
   - Mars: Mois 2 (Claude Code Mastery)
   - Avril: Mois 3 (Stack Comprehension)
   - Mai: Mois 4 (Architecture & Design)
   - Juin-Juillet: Mois 5 (MVP Production)

---

## 🎓 RESSOURCES UTILES

### Tutoriels Beginner-Friendly

**JavaScript:**
- [JavaScript.info](https://javascript.info/) - Complet, gratuit
- [Codecademy JavaScript](https://www.codecademy.com/learn/introduction-to-javascript) - Interactif

**Node.js:**
- [Node.js Getting Started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Fireship Node.js Crash Course](https://www.youtube.com/watch?v=ENrzD9HAZK4)

**Git:**
- [Git Handbook (GitHub)](https://guides.github.com/introduction/git-handbook/)
- [Learn Git Branching](https://learngitbranching.js.org/) - Interactif

**Claude Code:**
- [Anthropic Claude Code Docs](https://www.anthropic.com/claude-code)
- `AI_ORCHESTRATION_GUIDE.md` (ce projet)
- `LEARNING_PATH.md` (ce projet)

---

### Communautés & Support

**Discord:**
- Anthropic Claude Developers
- AI Orchestration Community

**Reddit:**
- r/ClaudeAI
- r/webdev
- r/learnprogramming

**Stack Overflow:**
- Tag: [claude-code]
- Tag: [node.js]
- Tag: [express]

---

### Tools & Extensions

**VS Code Extensions:**
- ESLint: Linting JavaScript
- Prettier: Code formatting
- GitLens: Git integration
- Live Server: Preview HTML
- REST Client: Test APIs (alternative Postman)

**Browser Extensions:**
- JSON Viewer: Pretty print JSON
- React Developer Tools: Debug React (Mois 3+)

**CLI Tools:**
- [httpie](https://httpie.io/): Better curl
- [jq](https://stedolan.github.io/jq/): JSON processor
- [tldr](https://tldr.sh/): Simplified man pages

---

## ✅ CHECKLIST SETUP COMPLET

### Outils Installés
- [ ] Node.js 20 LTS (`node --version`)
- [ ] npm (`npm --version`)
- [ ] Git (`git --version`)
- [ ] VS Code
- [ ] VS Code extensions (ESLint, Prettier, GitLens)

### Comptes Créés
- [ ] GitHub (avec repo todo-app-claude)
- [ ] Supabase (projet floralmood-mvp)
- [ ] Vercel (connecté à GitHub)
- [ ] OpenAI (optionnel, pour Mois 5)

### Premier Projet
- [ ] Todo API fonctionnel
- [ ] Tests manuels réussis (4 endpoints)
- [ ] Code poussé sur GitHub
- [ ] README.md avec learning notes

### Documentation
- [ ] Notebook apprentissage créé
- [ ] Structure dossiers FloralMood
- [ ] Tous les guides lus:
  - [ ] CHANGELOG.md
  - [ ] AI_ORCHESTRATION_GUIDE.md
  - [ ] LEARNING_PATH.md
  - [x] GETTING_STARTED.md (ce fichier)

### Prêt pour Mois 1
- [ ] Calendrier bloqué (8h/semaine)
- [ ] Ressources bookmarkées
- [ ] Première session planifiée (Semaine 1, Lundi)

---

## 🎉 FÉLICITATIONS!

**Vous avez terminé le setup et votre premier projet avec Claude Code!**

**Prochaines étapes:**
1. Relire `LEARNING_PATH.md` pour vision globale
2. Commencer Mois 1, Semaine 1 (Fondamentaux)
3. Rejoindre communautés (Discord, Reddit)
4. Share your progress! (LinkedIn, Twitter)

**Remember:**
> "La valeur en 2026 ne vient plus d'écrire du code ligne par ligne, mais d'**orchestrer des agents IA** pour construire des systèmes complexes."

**Vous êtes maintenant sur le chemin pour devenir AI Product Manager!** 🚀

---

**Version:** 1.0
**Dernière mise à jour:** 6 février 2026
**Auteur:** AI-First Learning Path Team
**Support:** See LEARNING_PATH.md for resources & community links
