const reviews = require('../models/reviewModel');
const books = require('../models/bookModel');

const getBookReviews = (req, res) => {
  const isbn = req.params.isbn;
  const bookReviews = reviews.filter(r => r.isbn === isbn);
  
  res.status(200).json(bookReviews);
};

const addReview = (req, res) => {
  const { isbn, rating, comment } = req.body;
  const userId = req.userId;
  
  // Check if book exists
  const book = books.find(b => b.isbn === isbn);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  
  // Check if user already reviewed this book
  const existingReview = reviews.find(r => r.isbn === isbn && r.userId === userId);
  
  if (existingReview) {
    // Update existing review
    existingReview.rating = rating;
    existingReview.comment = comment;
    existingReview.updatedAt = new Date();
    
    return res.status(200).json({ message: "Review updated successfully", review: existingReview });
  }
  
  // Create new review
  const newReview = {
    id: reviews.length + 1,
    isbn,
    userId,
    rating,
    comment,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  reviews.push(newReview);
  
  res.status(201).json({ message: "Review added successfully", review: newReview });
};

const updateReview = (req, res) => {
  const reviewId = parseInt(req.params.id);
  const userId = req.userId;
  const { rating, comment } = req.body;
  
  // Find review
  const reviewIndex = reviews.findIndex(r => r.id === reviewId);
  
  if (reviewIndex === -1) {
    return res.status(404).json({ message: "Review not found" });
  }
  
  // Check if user owns the review
  if (reviews[reviewIndex].userId !== userId) {
    return res.status(403).json({ message: "You can only modify your own reviews" });
  }
  
  // Update review
  reviews[reviewIndex].rating = rating || reviews[reviewIndex].rating;
  reviews[reviewIndex].comment = comment || reviews[reviewIndex].comment;
  reviews[reviewIndex].updatedAt = new Date();
  
  res.status(200).json({ message: "Review updated successfully", review: reviews[reviewIndex] });
};

const deleteReview = (req, res) => {
  const reviewId = parseInt(req.params.id);
  const userId = req.userId;
  
  // Find review
  const reviewIndex = reviews.findIndex(r => r.id === reviewId);
  
  if (reviewIndex === -1) {
    return res.status(404).json({ message: "Review not found" });
  }
  
  // Check if user owns the review
  if (reviews[reviewIndex].userId !== userId) {
    return res.status(403).json({ message: "You can only delete your own reviews" });
  }
  
  // Delete review
  const deletedReview = reviews.splice(reviewIndex, 1)[0];
  
  res.status(200).json({ message: "Review deleted successfully", review: deletedReview });
};

module.exports = {
  getBookReviews,
  addReview,
  updateReview,
  deleteReview
};