Online Book Review Application
An Express.js-based RESTful API for managing books, users, and reviews in an online book review system. Built with modular routes, in-memory data storage, JWT authentication, and session management.

🚀 Features
📖 Book Management – Browse books by ISBN, author, or title.

👤 User Authentication – Register and log in securely with JWT tokens and hashed passwords.

✍️ Review System – Authenticated users can add or update reviews for books.

🔐 Middleware Protection – API routes protected via JWT middleware.

🧪 Modular Codebase – Separated controllers, routes, models, and utilities for easy scalability.

🧑‍💻 Installation
bash
Copy
Edit
git clone https://github.com/yourusername/book-review-app.git
cd book-review-app
npm install


⚙️ Usage
Start the server:
bash
Copy
Edit
node index.js
Base URL:
arduino
Copy
Edit
http://localhost:5000/
📡 API Endpoints
📚 Books

Method	Endpoint	Description
GET	/api/books	Get all books
GET	/api/books/isbn/:isbn	Get book by ISBN
GET	/api/books/author/:author	Get books by author
GET	/api/books/title/:title	Get books by title
👤 Users

Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Log in a user and get JWT
GET	/api/users/profile	Get authenticated user info (JWT required)
✍️ Reviews

Method	Endpoint	Description
GET	/api/reviews/:isbn	Get reviews for a book by ISBN
POST	/api/reviews	Add or update review (JWT required)
PUT	/api/reviews/:id	Update review (JWT required)
🔐 Authentication
After logging in via /api/users/login, the server returns a JWT token.

Include it in the Authorization header for protected routes:

makefile
Copy
Edit
Authorization: Bearer <your_token>
📦 Technologies Used
Node.js + Express

JWT (jsonwebtoken)

Bcrypt (bcryptjs)

Session management (express-session)

CORS

Body parser
