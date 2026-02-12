const express = require('express');
const todoController = require('../controllers/todoController');

// Create Express router
const router = express.Router();

/**
 * Todo API Routes
 * Base path: /api/todos
 */

// GET /api/todos - Get all todos
router.get('/', todoController.getTodos);

// POST /api/todos - Create a new todo
router.post('/', todoController.createTodo);

// PATCH /api/todos/:id - Update todo completion status
router.patch('/:id', todoController.updateTodo);

// DELETE /api/todos/:id - Delete a todo
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
