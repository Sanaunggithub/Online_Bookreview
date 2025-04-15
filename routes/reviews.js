const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const { verifyToken } = require('../middleware/auth');
const asyncWrapper = require('../utils/asyncWrapper');

// Task 8: Add a review (requires authentication)
router.post('/', verifyToken, asyncWrapper(reviewController.addReview));

// Task 8: Update a review (requires authentication)
router.put('/:id', verifyToken, asyncWrapper(reviewController.updateReview));

// Task 9: Delete a review (requires authentication)
router.delete('/:id', verifyToken, asyncWrapper(reviewController.deleteReview));

module.exports = router;