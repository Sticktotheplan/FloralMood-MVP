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
 * Validate optional fields (tags, dueDate, priority)
 * @param {Array} tags - Array of tag strings (optional)
 * @param {Date|string} dueDate - Due date (optional)
 * @param {number} priority - Priority 1-5 (optional)
 * @returns {Object} Validation result with isValid flag and error message
 */
function validateOptionalFields(tags, dueDate, priority) {
  // Tags validation
  if (tags !== undefined && tags !== null) {
    if (!Array.isArray(tags)) {
      return { isValid: false, error: 'Tags must be an array' };
    }
    if (tags.length > 10) {
      return { isValid: false, error: 'Maximum 10 tags allowed' };
    }
    for (let tag of tags) {
      if (typeof tag !== 'string') {
        return { isValid: false, error: 'Each tag must be a string' };
      }
      if (tag.trim().length < 1 || tag.trim().length > 20) {
        return { isValid: false, error: 'Each tag must be between 1 and 20 characters' };
      }
    }
  }

  // DueDate validation
  if (dueDate !== undefined && dueDate !== null) {
    const parsedDate = new Date(dueDate);
    if (isNaN(parsedDate.getTime())) {
      return { isValid: false, error: 'Invalid date format for dueDate' };
    }
  }

  // Priority validation
  if (priority !== undefined && priority !== null) {
    if (typeof priority !== 'number') {
      return { isValid: false, error: 'Priority must be a number' };
    }
    if (!Number.isInteger(priority) || priority < 1 || priority > 5) {
      return { isValid: false, error: 'Priority must be an integer between 1 and 5' };
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
 * Get todos with advanced filtering, sorting, and pagination
 * @param {Object} options - Filtering options
 * @returns {Object} Paginated and filtered todos with metadata
 */
function getTodosWithFilters(options = {}) {
  const {
    page = 1,
    limit = 20,
    search = '',
    tags = [],
    status = 'all',
    filter = null,
    createdAfter = null,
    createdBefore = null,
    sort = 'createdAt',
    order = 'desc'
  } = options;

  // Start with all todos
  let filteredTodos = [...todos];

  // Apply search filter if provided (existing functionality)
  if (search && search.trim() !== '') {
    const searchLower = search.toLowerCase().trim();
    filteredTodos = filteredTodos.filter(todo => {
      const titleMatch = todo.title.toLowerCase().includes(searchLower);
      const descriptionMatch = (todo.description || '').toLowerCase().includes(searchLower);
      return titleMatch || descriptionMatch;
    });
  }

  // Filter by tags (OR logic - todo must have at least one of the requested tags)
  if (tags && tags.length > 0) {
    filteredTodos = filteredTodos.filter(todo => {
      return tags.some(tag => (todo.tags || []).includes(tag));
    });
  }

  // Filter by status (completed/active/all)
  if (status === 'completed') {
    filteredTodos = filteredTodos.filter(todo => todo.completed === true);
  } else if (status === 'active') {
    filteredTodos = filteredTodos.filter(todo => todo.completed === false);
  }

  // Filter by creation date range
  if (createdAfter) {
    const afterDate = new Date(createdAfter);
    filteredTodos = filteredTodos.filter(todo =>
      new Date(todo.createdAt) >= afterDate
    );
  }

  if (createdBefore) {
    const beforeDate = new Date(createdBefore);
    filteredTodos = filteredTodos.filter(todo =>
      new Date(todo.createdAt) <= beforeDate
    );
  }

  // Filter by dueDate (overdue, today, upcoming, this-week)
  if (filter) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const weekFromNow = new Date(today);
    weekFromNow.setDate(weekFromNow.getDate() + 7);

    filteredTodos = filteredTodos.filter(todo => {
      if (!todo.dueDate) return false; // Exclude todos without due date
      const dueDate = new Date(todo.dueDate);

      switch (filter) {
        case 'overdue':
          return dueDate < today && !todo.completed;
        case 'today':
          return dueDate >= today && dueDate < tomorrow;
        case 'upcoming':
          return dueDate >= tomorrow;
        case 'this-week':
          return dueDate >= today && dueDate < weekFromNow;
        default:
          return true;
      }
    });
  }

  // Sorting
  filteredTodos.sort((a, b) => {
    let aValue, bValue;

    switch (sort) {
      case 'priority':
        aValue = a.priority || 3;
        bValue = b.priority || 3;
        break;
      case 'dueDate':
        aValue = a.dueDate ? new Date(a.dueDate).getTime() : Infinity;
        bValue = b.dueDate ? new Date(b.dueDate).getTime() : Infinity;
        break;
      case 'updatedAt':
        aValue = new Date(a.updatedAt).getTime();
        bValue = new Date(b.updatedAt).getTime();
        break;
      case 'createdAt':
      default:
        aValue = new Date(a.createdAt).getTime();
        bValue = new Date(b.createdAt).getTime();
        break;
    }

    return order === 'asc' ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
  });

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
 * @param {Array} tags - Array of tags (optional)
 * @param {Date|string} dueDate - Due date (optional)
 * @param {number} priority - Priority 1-5 (optional, default: 3)
 * @returns {Object} Created todo or error
 */
function createTodo(title, description = '', tags = [], dueDate = null, priority = 3) {
  // Validate required fields
  const validation = validateTodoInput(title, description);
  if (!validation.isValid) {
    return { error: validation.error };
  }

  // Validate optional fields
  const optionalValidation = validateOptionalFields(tags, dueDate, priority);
  if (!optionalValidation.isValid) {
    return { error: optionalValidation.error };
  }

  // Clean and normalize tags
  const cleanTags = tags ? tags.map(tag => tag.trim()).filter(tag => tag.length > 0) : [];

  // Create new todo object
  const newTodo = {
    id: uuidv4(),
    title: title.trim(),
    description: description || '',
    completed: false,
    tags: cleanTags,
    dueDate: dueDate ? new Date(dueDate) : null,
    priority: priority || 3,
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
 * Update todo fields
 * @param {string} id - Todo ID
 * @param {Object} updateData - Fields to update (completed, title, description, tags, dueDate, priority)
 * @returns {Object} Updated todo or error
 */
function updateTodo(id, updateData) {
  // Find todo
  const todo = findTodoById(id);

  if (!todo) {
    return { error: 'Todo not found' };
  }

  // Update completed if present
  if (updateData.completed !== undefined) {
    if (typeof updateData.completed !== 'boolean') {
      return { error: 'Completed field must be a boolean' };
    }
    todo.completed = updateData.completed;
  }

  // Update title if present
  if (updateData.title !== undefined) {
    const validation = validateTodoInput(updateData.title, todo.description);
    if (!validation.isValid) {
      return { error: validation.error };
    }
    todo.title = updateData.title.trim();
  }

  // Update description if present
  if (updateData.description !== undefined) {
    const validation = validateTodoInput(todo.title, updateData.description);
    if (!validation.isValid) {
      return { error: validation.error };
    }
    todo.description = updateData.description;
  }

  // Validate and update optional fields (tags, dueDate, priority)
  const optionalValidation = validateOptionalFields(
    updateData.tags,
    updateData.dueDate,
    updateData.priority
  );
  if (!optionalValidation.isValid) {
    return { error: optionalValidation.error };
  }

  if (updateData.tags !== undefined) {
    todo.tags = updateData.tags.map(tag => tag.trim()).filter(tag => tag.length > 0);
  }

  if (updateData.dueDate !== undefined) {
    todo.dueDate = updateData.dueDate ? new Date(updateData.dueDate) : null;
  }

  if (updateData.priority !== undefined) {
    todo.priority = updateData.priority;
  }

  // Update timestamp
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
  findTodoById,
  validateOptionalFields
};
