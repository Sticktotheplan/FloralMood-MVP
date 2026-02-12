const todoService = require('../services/todoService');

/**
 * Get all todos with pagination and search
 * GET /api/todos?page=1&limit=10&search=keyword
 */
function getTodos(req, res) {
  try {
    // Extract query parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const search = req.query.search || '';

    // Validate pagination parameters
    if (page < 1 || limit < 1 || limit > 100) {
      return res.status(400).json({
        error: 'Invalid pagination parameters. Page must be >= 1, limit must be between 1-100'
      });
    }

    // Get filtered and paginated todos
    const result = todoService.getTodosWithFilters(page, limit, search);

    // Return response with metadata
    res.status(200).json(result);
  } catch (error) {
    console.error('Error getting todos:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

/**
 * Create a new todo
 * POST /api/todos
 * Body: { title: string, description?: string }
 */
function createTodo(req, res) {
  try {
    const { title, description } = req.body;

    // Call service to create todo
    const result = todoService.createTodo(title, description);

    // Handle validation errors
    if (result.error) {
      return res.status(400).json({ error: result.error });
    }

    // Success response
    res.status(201).json({
      todo: result.todo,
      message: 'Todo created'
    });
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

/**
 * Update todo completion status
 * PATCH /api/todos/:id
 * Body: { completed: boolean }
 */
function updateTodo(req, res) {
  try {
    const { id } = req.params;
    const { completed } = req.body;

    // Call service to update todo
    const result = todoService.updateTodo(id, completed);

    // Handle not found error
    if (result.error === 'Todo not found') {
      return res.status(404).json({ error: result.error });
    }

    // Handle validation errors
    if (result.error) {
      return res.status(400).json({ error: result.error });
    }

    // Success response
    res.status(200).json({
      todo: result.todo,
      message: 'Todo updated'
    });
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

/**
 * Delete a todo
 * DELETE /api/todos/:id
 */
function deleteTodo(req, res) {
  try {
    const { id } = req.params;

    // Call service to delete todo
    const result = todoService.deleteTodo(id);

    // Handle not found error
    if (result.error === 'Todo not found') {
      return res.status(404).json({ error: result.error });
    }

    // Success response
    res.status(200).json({ message: 'Todo deleted' });
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
};
