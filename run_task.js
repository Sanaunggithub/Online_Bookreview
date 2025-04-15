const {
    getAllBooksAsync,
    getBookByISBNPromise,
    getBooksByAuthorAsync,
    getBooksByTitleAsync
  } = require('./utils/asyncClient');
  
  const runTests = async () => {
    try {
      // Task 10
      console.log("\n\n======== TASK 10: Get all books (Async/Await) ========");
      await getAllBooksAsync();
      console.log("======================================================\n");
      
      // Task 11
      console.log("\n\n======== TASK 11: Get book by ISBN (Promises) ========");
      await getBookByISBNPromise('9781593275846');
      console.log("======================================================\n");
      
      // Task 12
      console.log("\n\n======== TASK 12: Get books by Author (Async/Await) ========");
      await getBooksByAuthorAsync('Kyle Simpson');
      console.log("==========================================================\n");
      
      // Task 13
      console.log("\n\n======== TASK 13: Get books by Title (Async/Await) ========");
      await getBooksByTitleAsync('JavaScript');
      console.log("========================================================\n");
      
      
      console.log("\nAll async tests completed successfully!");
      
    } catch (error) {
      console.error('Error running tests:', error);
    }
  };
  
  runTests();