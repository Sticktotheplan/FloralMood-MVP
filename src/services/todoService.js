const { v4: uuidv4 } = require('uuid');

// In-memory storage for todos
let todos = [];

/**
 * Validate todo input data
 * @param {string} title - Todo title
 * @param {string} description - Todo description (optional)
 * @returns {Object} Validation result with isValid flag and error message
 */
function validateTodoInput(title, description) {
  // Title validation
  if (!title || typeof title !== 'string') {
    return { isValid: false, error: 'Title is required and must be a string' };
  }

  if (title.trim().length < 1 || title.trim().length > 100) {
    return { isValid: false, error: 'Title must be between 1 and 100 characters' };
  }

  // Description validation (optional)
  if (description !== undefined && description !== null) {
    if (typeof description !== 'string') {
      return { isValid: false, error: 'Description must be a string' };
    }
    if (description.length > 500) {
      return { isValid: false, error: 'Description must not exceed 500 characters' };
    }
  }

  return { isValid: true };
}

/**
 * Get all todos
 * @returns {Array} Array of all todos
 */
function getAllTodos() {
  return todos;
}

/**
 * Get todos with pagination and search
 * @param {number} page - Page number (default: 1)
 * @param {number} limit - Items per page (default: 20)
 * @param {string} search - Search keyword (optional)
 * @returns {Object} Paginated and filtered todos with metadata
 */
function getTodosWithFilters(page = 1, limit = 20, search = '') {
  // Start with all todos
  let filteredTodos = [...todos];

  // Apply search filter if provided
  if (search && search.trim() !== '') {
    const searchLower = search.toLowerCase().trim();
    filteredTodos = filteredTodos.filter(todo => {
      const titleMatch = todo.title.toLowerCase().includes(searchLower);
      const descriptionMatch = todo.description.toLowerCase().includes(searchLower);
      return titleMatch || descriptionMatch;
    });
  }

  // Calculate pagination metadata
  const total = filteredTodos.length;
  const totalPages = Math.ceil(total / limit);
  const validPage = Math.max(1, Math.min(page, totalPages || 1));

  // Calculate start and end index for pagination
  const startIndex = (validPage - 1) * limit;
  const endIndex = startIndex + limit;

  // Get paginated slice
  const paginatedTodos = filteredTodos.slice(startIndex, endIndex);

  return {
    todos: paginatedTodos,
    page: validPage,
    limit: limit,
    total: total,
    totalPages: totalPages || 1,
    count: paginatedTodos.length
  };
}

/**
 * Create a new todo
 * @param {string} title - Todo title
 * @param {string} description - Todo description (optional)
 * @returns {Object} Created todo or error
 */
function createTodo(title, description = '') {
  // Validate input
  const validation = validateTodoInput(title, description);
  if (!validation.isValid) {
    return { error: validation.error };
  }

  // Create new todo object
  const newTodo = {
    id: uuidv4(),
    title: title.trim(),
    description: description || '',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  // Add to in-memory storage
  todos.push(newTodo);

  return { todo: newTodo };
}

/**
 * Find todo by ID
 * @param {string} id - Todo ID
 * @returns {Object|null} Todo object or null if not found
 */
function findTodoById(id) {
  return todos.find(todo => todo.id === id) || null;
}

/**
 * Update todo completion status
 * @param {string} id - Todo ID
 * @param {boolean} completed - Completion status
 * @returns {Object} Updated todo or error
 */
function updateTodo(id, completed) {
  // Find todo
  const todo = findTodoById(id);

  if (!todo) {
    return { error: 'Todo not found' };
  }

  // Validate completed field
  if (typeof completed !== 'boolean') {
    return { error: 'Completed field must be a boolean' };
  }

  // Update todo
  todo.completed = completed;
  todo.updatedAt = new Date();

  return { todo };
}

/**
 * Delete todo by ID
 * @param {string} id - Todo ID
 * @returns {Object} Success message or error
 */
function deleteTodo(id) {
  // Find todo index
  const todoIndex = todos.findIndex(todo => todo.id === id);

  if (todoIndex === -1) {
    return { error: 'Todo not found' };
  }

  // Remove todo from array
  todos.splice(todoIndex, 1);

  return { success: true };
}

module.exports = {
  getAllTodos,
  getTodosWithFilters,
  createTodo,
  updateTodo,
  deleteTodo,
  findTodoById
};
