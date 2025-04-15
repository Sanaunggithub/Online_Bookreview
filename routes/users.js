const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require('../middleware/auth');
const asyncWrapper = require('../utils/asyncWrapper');

// Task 6: Register new user
router.post('/register', asyncWrapper(userController.registerUser));

// Task 7: Login user
router.post('/login', asyncWrapper(userController.loginUser));

// Get user profile (requires authentication)
router.get('/profile', verifyToken, asyncWrapper(userController.getUserProfile));

module.exports = router;