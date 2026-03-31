const express = require('express'); 
const router = express.Router(); 
const bookController = require('../controllers/bookController'); 

// CRUD routes
router.get('/', bookController.getAllBooks.bind(bookController)); 

module.exports = router; 
