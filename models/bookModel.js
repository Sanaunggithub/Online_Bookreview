// This would normally connect to a database, but we'll use a simple in-memory array for this project
const books = [
    {
      isbn: "9781593275846",
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      publisher: "No Starch Press",
      year: 2014,
      price: 29.95
    },
    {
      isbn: "9781491950296",
      title: "Programming JavaScript Applications",
      author: "Eric Elliott",
      publisher: "O'Reilly Media",
      year: 2014,
      price: 19.99
    },
    {
      isbn: "9781593277574",
      title: "Understanding ECMAScript 6",
      author: "Nicholas C. Zakas",
      publisher: "No Starch Press",
      year: 2016,
      price: 34.99
    },
    {
      isbn: "9781449365035",
      title: "Speaking JavaScript",
      author: "Axel Rauschmayer",
      publisher: "O'Reilly Media",
      year: 2014,
      price: 24.99
    },
    {
      isbn: "9781449331818",
      title: "Learning JavaScript Design Patterns",
      author: "Addy Osmani",
      publisher: "O'Reilly Media",
      year: 2012,
      price: 29.99
    },
    {
      isbn: "9798602477429",
      title: "You Don't Know JS Yet",
      author: "Kyle Simpson",
      publisher: "Independently published",
      year: 2020,
      price: 39.99
    },
    {
      isbn: "9781484200766",
      title: "Pro Git",
      author: "Scott Chacon and Ben Straub",
      publisher: "Apress",
      year: 2014,
      price: 49.99
    },
    {
      isbn: "9781484242216",
      title: "Rethinking Productivity in Software Engineering",
      author: "Caitlin Sadowski, Thomas Zimmermann",
      publisher: "Apress",
      year: 2019,
      price: 44.99
    }
  ];
  
  module.exports = books;