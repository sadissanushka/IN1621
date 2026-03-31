/**
* Book Data Access Layer
* Contains ONLY database queries - NO business logic
*/ 
const db = require('../config/database'); 

class BookRepository { 

  //Get all books from database 
  async findAll() { 
    try { 
      const query = 'SELECT * FROM books ORDER BY id DESC'; 
      const [rows] = await db.query(query); 
      return rows; 
    } catch (error) { 
      console.error('DAL Error - findAll:', error); 
      throw new Error('Database error while fetching books'); 
    } 
  } 
} 

// Export single instance
module.exports = new BookRepository(); 
