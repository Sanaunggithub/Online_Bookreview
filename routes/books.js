const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const reviewController = require('../controllers/reviewController');
const asyncWrapper = require('../utils/asyncWrapper');

// Task 1: Get all books
router.get('/', asyncWrapper(bookController.getAllBooks));

// Task 2: Get book by ISBN
router.get('/isbn/:isbn', asyncWrapper(bookController.getBookByISBN));

// Task 3: Get books by author
router.get('/author/:author', asyncWrapper(bookController.getBooksByAuthor));

// Task 4: Get books by title
router.get('/title/:title', asyncWrapper(bookController.getBooksByTitle));

// Task 5: Get book reviews
router.get('/:isbn/reviews', asyncWrapper(reviewController.getBookReviews));

module.exports = router;