const axios = require('axios');
const baseURL = 'http://localhost:5000/api';

// Replace this with your actual token from login
const TOKEN = "YOUR_TOKEN_HERE";

async function addReview() {
  try {
    // Login to get token
    console.log("Logging in...");
    const loginResponse = await axios.post(`${baseURL}/users/login`, {
      email: "test@example.com",
      password: "password123"
    });
    
    const token = loginResponse.data.token;
    console.log("Login successful, token received");
    
    // Add review
    console.log("Adding review...");
    const reviewResponse = await axios.post(`${baseURL}/reviews`, {
      isbn: "9781593275846",
      rating: 5,
      comment: "Great book for JavaScript beginners!"
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    console.log("Review added successfully:");
    console.log(reviewResponse.data);
    
    // Get reviews
    console.log("Getting book reviews...");
    const getReviewResponse = await axios.get(`${baseURL}/books/9781593275846/reviews`);
    console.log("Book reviews:");
    console.log(getReviewResponse.data);
    
  } catch (error) {
    console.error("Error:", error.message);
    if (error.response) {
      console.error("Response data:", error.response.data);
    }
  }
}

addReview();