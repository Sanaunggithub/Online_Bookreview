const books = require('../models/bookModel');

const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

const getBookByISBN = (req, res) => {
  const isbn = req.params.isbn;
  const book = books.find(b => b.isbn === isbn);
  
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  
  res.status(200).json(book);
};

const getBooksByAuthor = (req, res) => {
  const author = req.params.author;
  const filteredBooks = books.filter(b => 
    b.author.toLowerCase().includes(author.toLowerCase())
  );
  
  if (filteredBooks.length === 0) {
    return res.status(404).json({ message: "No books found for this author" });
  }
  
  res.status(200).json(filteredBooks);
};

const getBooksByTitle = (req, res) => {
  const title = req.params.title;
  const filteredBooks = books.filter(b => 
    b.title.toLowerCase().includes(title.toLowerCase())
  );
  
  if (filteredBooks.length === 0) {
    return res.status(404).json({ message: "No books found with this title" });
  }
  
  res.status(200).json(filteredBooks);
};

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};