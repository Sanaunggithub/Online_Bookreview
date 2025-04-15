const users = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  
  // Check if user already exists
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  }
  
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Create new user
  const newUser = {
    id: users.length + 1,
    username,
    email,
    password: hashedPassword
  };
  
  users.push(newUser);
  
  res.status(201).json({ message: "User registered successfully", userId: newUser.id });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  // Find user
  const user = users.find(u => u.email === email);
  
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  
  // Check password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }
  
  // Create token
  const token = jwt.sign({ id: user.id }, 'bookshop_jwt_secret', {
    expiresIn: '24h'
  });
  
  // Set session
  req.session.userId = user.id;
  
  res.status(200).json({
    message: "Login successful",
    user: {
      id: user.id,
      username: user.username,
      email: user.email
    },
    token
  });
};

const getUserProfile = (req, res) => {
  const userId = req.userId;
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  
  res.status(200).json({
    id: user.id,
    username: user.username,
    email: user.email
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile
};