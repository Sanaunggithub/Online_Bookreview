const axios = require('axios');
const baseURL = 'http://localhost:5000/api';

// Task 10: Get all books using async/await
const getAllBooksAsync = async () => {
  try {
    const response = await axios.get(`${baseURL}/books`);
    console.log('Task 10 - All Books:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error getting all books:', error.message);
    throw error;
  }
};

// Task 11: Search by ISBN using Promises
const getBookByISBNPromise = (isbn) => {
  return new Promise((resolve, reject) => {
    axios.get(`${baseURL}/books/isbn/${isbn}`)
      .then(response => {
        console.log(`Task 11 - Book with ISBN ${isbn}:`, response.data);
        resolve(response.data);
      })
      .catch(error => {
        console.error(`Error getting book with ISBN ${isbn}:`, error.message);
        reject(error);
      });
  });
};

// Task 12: Search by Author using async/await
const getBooksByAuthorAsync = async (author) => {
  try {
    const response = await axios.get(`${baseURL}/books/author/${encodeURIComponent(author)}`);
    console.log(`Task 12 - Books by author "${author}":`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error getting books by author "${author}":`, error.message);
    throw error;
  }
};

// Task 13: Search by Title using async/await
const getBooksByTitleAsync = async (title) => {
  try {
    const response = await axios.get(`${baseURL}/books/title/${encodeURIComponent(title)}`);
    console.log(`Task 13 - Books with title containing "${title}":`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error getting books with title containing "${title}":`, error.message);
    throw error;
  }
};

module.exports = {
  getAllBooksAsync,
  getBookByISBNPromise,
  getBooksByAuthorAsync,
  getBooksByTitleAsync
};