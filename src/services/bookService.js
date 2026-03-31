/**
* Book Service Layer
* Contains business logic and validation
*/ 
const bookRepository = require('../repositories/bookRepository'); 

class BookService { 

  // Get all books 
  async getAllBooks() { 
    try { 
      const books = await bookRepository.findAll(); 

      return { 
        success: true, 
        data: books, 
      }; 
    } catch (error) { 
      console.error('Service Error - getAllBooks:', error); 
      throw error; 
    } 
  } 
} 

// Export single instance 
module.exports = new BookService(); 
