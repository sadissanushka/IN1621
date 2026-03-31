const express = require('express'); 
require('dotenv').config(); 

const app = express(); 
const PORT = process.env.PORT || 5000; 

// Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Request logging
app.use((req, res, next) => { 
  console.log(`${req.method} ${req.path}`); 
  next(); 
}); 

// Routes
app.use('/api/books', require('./src/routes/books.js')); 

// Health check
app.get('/api/health', (req, res) => { 
  res.json({ 
    status: 'OK', 
    message: 'Server is running', 
    timestamp: new Date().toISOString() 
  }); 
}); 

// Root route
app.get('/', (req, res) => { 
  res.json({ 
    message: 'Library API with Data Access Layer', 
    endpoints: { 
      books: '/api/books', 
      health: '/api/health'
    } 
  }); 
}); 

// 404 handler
app.use((req, res) => { 
  res.status(404).json({ 
    success: false, 
    message: 'Route not found'
  }); 
}); 

// Start server
app.listen(PORT, () => { 
  console.log('='.repeat(50)); 
  console.log('✓ Library API Server Started'); 
  console.log('='.repeat(50)); 
  console.log(`Server: http://localhost:${PORT}`); 
  console.log(`Health: http://localhost:${PORT}/api/health`); 
  console.log(`Books: http://localhost:${PORT}/api/books`); 
  console.log('='.repeat(50)); 
}); 
