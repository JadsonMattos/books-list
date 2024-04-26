const { books } = require('./data/library');

const nameAndAge = () => books.map((book) => ({
  author: book.author.name,
  age: book.releaseYear - book.author.birthYear,
}))
  .sort((smaller, bigger) => smaller.age - bigger.age);

module.exports = { nameAndAge };
