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
- UUID for unique IDs

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

Server runs on `http://localhost:3001`

## API Endpoints

### List Todos
```
GET /api/todos?page=1&limit=10&search=keyword
```

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20, max: 100)
- `search` (optional): Search in title and description

**Response:**
```json
{
  "todos": [...],
  "page": 1,
  "limit": 10,
  "total": 47,
  "totalPages": 5,
  "count": 10
}
```

### Create Todo
```
POST /api/todos
Content-Type: application/json

{
  "title": "Learn Claude Code",
  "description": "Practice AI-First development"
}
```

**Response:**
```json
{
  "todo": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Learn Claude Code",
    "description": "Practice AI-First development",
    "completed": false,
    "createdAt": "2026-02-12T14:30:00.000Z",
    "updatedAt": "2026-02-12T14:30:00.000Z"
  },
  "message": "Todo created"
}
```

### Update Todo
```
PATCH /api/todos/:id
Content-Type: application/json

{
  "completed": true
}
```

### Delete Todo
```
DELETE /api/todos/:id
```

## Architecture

```
src/
├── server.js              # Express server setup
├── routes/
│   └── todoRoutes.js      # API route definitions
├── controllers/
│   └── todoController.js  # Request handlers (HTTP layer)
└── services/
    └── todoService.js     # Business logic + in-memory storage
```

**Separation of Concerns:**
- **Routes:** Define URLs and connect to controllers
- **Controllers:** Handle HTTP requests/responses
- **Services:** Business logic and data operations

## Security Features

- ✅ Input validation (title: 1-100 chars, description: max 500 chars)
- ✅ Type checking (prevents injection attacks)
- ✅ Pagination limits (max 100 items per page)
- ✅ UUID for IDs (not sequential, harder to guess)
- ✅ Try/catch error handling (no internal errors exposed)

## Learning Notes

**What I learned:**

1. **AI-First Workflow:** Prompt → Plan → Implement → Review → Iterate
2. **Code Review Skills:** Identified security issues and bugs in generated code
3. **Architecture Patterns:** Separation of concerns (routes/controllers/services)
4. **HTTP/REST API:** Status codes (200, 201, 400, 404, 500), HTTP methods (GET, POST, PATCH, DELETE)
5. **JavaScript Concepts:**
   - Middleware (`express.json()`)
   - Async/await and try/catch
   - Array methods (filter, find, slice)
   - Destructuring (`const { title } = req.body`)

**Time spent:**
- Initial implementation: 30 min (Claude)
- Code review & learning: 45 min (me)
- Bug fix: 5 min
- Testing: 15 min (me)
- Documentation: 10 min
- **Total: ~2 hours** (vs 4-6h manual coding)

**AI-First advantage:**
- 60-70% time saved on implementation
- Focus on understanding architecture instead of syntax
- Faster iteration cycles
- Learning by reviewing instead of debugging

## Next Steps

- [ ] Add database (Supabase) instead of in-memory storage
- [ ] Add authentication (Supabase Auth)
- [ ] Add frontend (React + Tailwind CSS)
- [ ] Deploy to production (Vercel + Railway)

**Ready for:** FloralMood MVP implementation (Month 5)

---

**Project:** AI-First Learning Path - Month 1
**Date:** February 2026
**Author:** Picha
