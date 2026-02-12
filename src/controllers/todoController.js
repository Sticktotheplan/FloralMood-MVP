const todoService = require('../services/todoService');

/**
 * Get all todos with advanced filtering, sorting, and pagination
 * GET /api/todos?page=1&limit=10&search=keyword&tags=work,urgent&status=active&filter=overdue&sort=priority&order=desc
 */
function getTodos(req, res) {
  try {
    // Extract query parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const search = req.query.search || '';

    // Extract advanced filtering parameters
    const tags = req.query.tags ? req.query.tags.split(',').map(t => t.trim()) : [];
    const status = req.query.status || 'all';
    const filter = req.query.filter || null;
    const createdAfter = req.query.createdAfter || null;
    const createdBefore = req.query.createdBefore || null;
    const sort = req.query.sort || 'createdAt';
    const order = req.query.order || 'desc';

    // Validate pagination parameters
    if (page < 1 || limit < 1 || limit > 100) {
      return res.status(400).json({
        error: 'Invalid pagination parameters. Page must be >= 1, limit must be between 1-100'
      });
    }

    // Validate status parameter
    const validStatuses = ['all', 'completed', 'active'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        error: 'Invalid status. Must be: all, completed, or active'
      });
    }

    // Validate filter parameter
    const validFilters = [null, 'overdue', 'today', 'upcoming', 'this-week'];
    if (!validFilters.includes(filter)) {
      return res.status(400).json({
        error: 'Invalid filter. Must be: overdue, today, upcoming, or this-week'
      });
    }

    // Validate sort parameter
    const validSorts = ['createdAt', 'updatedAt', 'priority', 'dueDate'];
    if (!validSorts.includes(sort)) {
      return res.status(400).json({
        error: 'Invalid sort field. Must be: createdAt, updatedAt, priority, or dueDate'
      });
    }

    // Validate order parameter
    const validOrders = ['asc', 'desc'];
    if (!validOrders.includes(order)) {
      return res.status(400).json({
        error: 'Invalid order. Must be: asc or desc'
      });
    }

    // Get filtered, sorted, and paginated todos
    const result = todoService.getTodosWithFilters({
      page,
      limit,
      search,
      tags,
      status,
      filter,
      createdAfter,
      createdBefore,
      sort,
      order
    });

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
 * Body: { title: string, description?: string, tags?: string[], dueDate?: Date, priority?: number }
 */
function createTodo(req, res) {
  try {
    const { title, description, tags, dueDate, priority } = req.body;

    // Call service to create todo
    const result = todoService.createTodo(title, description, tags, dueDate, priority);

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
 * Update todo fields
 * PATCH /api/todos/:id
 * Body: { completed?: boolean, title?: string, description?: string, tags?: string[], dueDate?: Date, priority?: number }
 */
function updateTodo(req, res) {
  try {
    const { id } = req.params;

    // Extract all possible update fields
    const updateData = {
      completed: req.body.completed,
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags,
      dueDate: req.body.dueDate,
      priority: req.body.priority
    };

    // Remove undefined fields to avoid overwriting with undefined
    Object.keys(updateData).forEach(key =>
      updateData[key] === undefined && delete updateData[key]
    );

    // Call service to update todo
    const result = todoService.updateTodo(id, updateData);

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
