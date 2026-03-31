-- Create database
CREATE DATABASE library_db;

-- Use the database
USE library_db;

-- Create books table
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    author VARCHAR(100) NOT NULL,
    isbn VARCHAR(13) UNIQUE NOT NULL,
    published_year INT,
    pages INT,
    available BOOLEAN DEFAULT TRUE
);

-- Insert sample data
INSERT INTO books (title, author, isbn, published_year, pages, available) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565', 1925, 180, True),
('To Kill a Mockingbird', 'Harper Lee', '9780061120084', 1960, 324, False),
('1984', 'George Orwell', '9780451524935', 1949, 328, True),
('Pride and Prejudice', 'Jane Austen', '9780141439518', 1813, 279, True),
('The Catcher in the Rye', 'J.D. Salinger', '9780316769174', 1951, 277, False);

-- Verify data
SELECT * FROM books;

-- Create dedicated user
CREATE USER 'user'@'localhost' IDENTIFIED BY 'Library@123';

-- Grant privileges
GRANT ALL PRIVILEGES ON library_db.* TO 'user'@'localhost';

-- Apply changes
FLUSH PRIVILEGES;

DESCRIBE books;


