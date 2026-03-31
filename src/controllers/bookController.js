/**
* Book Controller
* Handles HTTP requests and responses
*/ 
const bookService = require('../services/bookService'); 

class BookController { 

  // GET /api/books
  async getAllBooks(req, res) { 
    try { 
      const result = await bookService.getAllBooks(); 
      res.json(result); 
    } catch (error) { 
      console.error('Controller Error:', error); 
      res.status(500).json({ 
        success: false, 
        message: 'Error fetching books', 
        error: error.message
      }); 
    } 
  } 
} 

// Export single instance
module.exports = new BookController(); 
