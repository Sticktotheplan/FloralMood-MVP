const express = require('express');
const todoRoutes = require('./routes/todoRoutes');

// Create Express application
const app = express();
const PORT = 3001;

// Middleware to parse JSON request bodies
app.use(express.json());

// API Routes
app.use('/api/todos', todoRoutes);

// Root endpoint for testing server status
app.get('/', (req, res) => {
  res.json({
    message: 'Todo API Server is running',
    version: '1.0.0',
    endpoints: {
      getAllTodos: 'GET /api/todos',
      createTodo: 'POST /api/todos',
      updateTodo: 'PATCH /api/todos/:id',
      deleteTodo: 'DELETE /api/todos/:id'
    }
  });
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✓ Todo API server is running on http://localhost:${PORT}`);
  console.log(`✓ Test the API at http://localhost:${PORT}/api/todos`);
});
