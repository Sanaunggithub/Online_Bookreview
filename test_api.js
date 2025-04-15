const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Store token and review ID
let authToken = '';
let reviewId = null;

// Base URL
const baseURL = 'http://localhost:5000/api';

// Run all tasks
const runTests = async () => {
  try {
    // Task 1: Get all books
    await new Promise(resolve => {
      console.log('\n🔍 Running Task 1: Get all books');
      axios.get(`${baseURL}/books`)
        .then(response => {
          console.log('\n' + '='.repeat(50));
          console.log(`TASK 1 RESPONSE:`);
          console.log('='.repeat(50));
          console.log(JSON.stringify(response.data, null, 2));
          console.log('='.repeat(50) + '\n');
          rl.question('Press Enter to continue to next task...', () => resolve());
        })
        .catch(error => {
          console.error('Error in Task 1:', error.message);
          rl.question('Press Enter to continue to next task...', () => resolve());
        });
    });

    // Task 2: Get book by ISBN
    await new Promise(resolve => {
      console.log('\n🔍 Running Task 2: Get book by ISBN');
      axios.get(`${baseURL}/books/isbn/9781593275846`)
        .then(response => {
          console.log('\n' + '='.repeat(50));
          console.log(`TASK 2 RESPONSE:`);
          console.log('='.repeat(50));
          console.log(JSON.stringify(response.data, null, 2));
          console.log('='.repeat(50) + '\n');
          rl.question('Press Enter to continue to next task...', () => resolve());
        })
        .catch(error => {
          console.error('Error in Task 2:', error.message);
          rl.question('Press Enter to continue to next task...', () => resolve());
        });
    });

    // Task 3: Get books by Author
    await new Promise(resolve => {
      console.log('\n🔍 Running Task 3: Get books by Author');
      axios.get(`${baseURL}/books/author/Kyle Simpson`)
        .then(response => {
          console.log('\n' + '='.repeat(50));
          console.log(`TASK 3 RESPONSE:`);
          console.log('='.repeat(50));
          console.log(JSON.stringify(response.data, null, 2));
          console.log('='.repeat(50) + '\n');
          rl.question('Press Enter to continue to next task...', () => resolve());
        })
        .catch(error => {
          console.error('Error in Task 3:', error.message);
          rl.question('Press Enter to continue to next task...', () => resolve());
        });
    });

    // Task 4: Get books by Title
    await new Promise(resolve => {
      console.log('\n🔍 Running Task 4: Get books by Title');
      axios.get(`${baseURL}/books/title/JavaScript`)
        .then(response => {
          console.log('\n' + '='.repeat(50));
          console.log(`TASK 4 RESPONSE:`);
          console.log('='.repeat(50));
          console.log(JSON.stringify(response.data, null, 2));
          console.log('='.repeat(50) + '\n');
          rl.question('Press Enter to continue to next task...', () => resolve());
        })
        .catch(error => {
          console.error('Error in Task 4:', error.message);
          rl.question('Press Enter to continue to next task...', () => resolve());
        });
    });

    // Task 6: Register new user
    await new Promise(resolve => {
      console.log('\n🔍 Running Task 6: Register new user');
      axios.post(`${baseURL}/users/register`, {
        username: "testuser",
        email: "test@example.com",
        password: "password123"
      })
        .then(response => {
          console.log('\n' + '='.repeat(50));
          console.log(`TASK 6 RESPONSE:`);
          console.log('='.repeat(50));
          console.log(JSON.stringify(response.data, null, 2));
          console.log('='.repeat(50) + '\n');
          rl.question('Press Enter to continue to next task...', () => resolve());
        })
        .catch(error => {
          console.error('Error in Task 6:', error.message);
          console.log('If the user already exists, this is expected.');
          console.log('\n' + '='.repeat(50));
          console.log(`TASK 6 RESPONSE:`);
          console.log('='.repeat(50));
          console.log(JSON.stringify(error.response?.data || { message: "User already exists" }, null, 2));
          console.log('='.repeat(50) + '\n');
          rl.question('Press Enter to continue to next task...', () => resolve());
        });
    });

    // Task 7: Login user
    await new Promise(resolve => {
      console.log('\n🔍 Running Task 7: Login user');
      axios.post(`${baseURL}/users/login`, {
        email: "test@example.com",
        password: "password123"
      })
        .then(response => {
          authToken = response.data.token;
          console.log('\n' + '='.repeat(50));
          console.log(`TASK 7 RESPONSE:`);
          console.log('='.repeat(50));
          console.log(JSON.stringify(response.data, null, 2));
          console.log('='.repeat(50) + '\n');
          rl.question('Press Enter to continue to next task...', () => resolve());
        })
        .catch(error => {
          console.error('Error in Task 7:', error.message);
          rl.question('Press Enter to continue to next task...', () => resolve());
        });
    });

    // Task 8: Add a book review
    await new Promise(resolve => {
      console.log('\n🔍 Running Task 8: Add/modify a book review');
      axios.post(`${baseURL}/reviews`, {
        isbn: "9781593275846",
        rating: 5,
        comment: "Great book for JavaScript beginners!"
      }, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
        .then(response => {
          reviewId = response.data.review.id;
          console.log('\n' + '='.repeat(50));
          console.log(`TASK 8 RESPONSE:`);
          console.log('='.repeat(50));
          console.log(JSON.stringify(response.data, null, 2));
          console.log('='.repeat(50) + '\n');
          rl.question('Press Enter to continue to next task...', () => resolve());
        })
        .catch(error => {
          console.error('Error in Task 8:', error.message);
          rl.question('Press Enter to continue to next task...', () => resolve());
        });
    });

    // Task 5: Get book reviews
    await new Promise(resolve => {
      console.log('\n🔍 Running Task 5: Get book reviews');
      axios.get(`${baseURL}/books/9781593275846/reviews`)
        .then(response => {
          console.log('\n' + '='.repeat(50));
          console.log(`TASK 5 RESPONSE:`);
          console.log('='.repeat(50));
          console.log(JSON.stringify(response.data, null, 2));
          console.log('='.repeat(50) + '\n');
          rl.question('Press Enter to continue to next task...', () => resolve());
        })
        .catch(error => {
          console.error('Error in Task 5:', error.message);
          rl.question('Press Enter to continue to next task...', () => resolve());
        });
    });

    // Task 9: Delete a book review
    await new Promise(resolve => {
      console.log('\n🔍 Running Task 9: Delete book review');
      if (!reviewId) {
        console.error('No review ID found. Please make sure Task 8 completed successfully.');
        console.log('\n' + '='.repeat(50));
        console.log(`TASK 9 RESPONSE:`);
        console.log('='.repeat(50));
        console.log(JSON.stringify({ message: "No review ID found" }, null, 2));
        console.log('='.repeat(50) + '\n');
        rl.question('Press Enter to continue to next task...', () => resolve());
        return;
      }
      
      axios.delete(`${baseURL}/reviews/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
        .then(response => {
          console.log('\n' + '='.repeat(50));
          console.log(`TASK 9 RESPONSE:`);
          console.log('='.repeat(50));
          console.log(JSON.stringify(response.data, null, 2));
          console.log('='.repeat(50) + '\n');
          rl.question('Press Enter to continue to next task...', () => resolve());
        })
        .catch(error => {
          console.error('Error in Task 9:', error.message);
          rl.question('Press Enter to continue to next task...', () => resolve());
        });
    });

    rl.close();
    console.log('\nAll tasks completed!');
  } catch (error) {
    console.error('Error running tests:', error);
    rl.close();
  }
};

// Start the tests
console.log('Starting API tests...');
console.log('Press Enter to begin testing...');
rl.question('', () => {
  runTests();
});