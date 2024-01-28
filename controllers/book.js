const { getAllBooks, getBook, insertNewBook } = require("../service/book");

function getLivros(req, res) {
  try {
    const books = getAllBooks();
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getLivroForId(req, res) {
  try {
    console.log(req.params.id);
    const id = req.params.id;
    const book = getBook(id);
    res.send(book);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postBook(req, res) {
  try {
    const newBook = req.body
    insertNewBook(newBook)
    res.status(201)
    res.send('Livro inserido com suceso em nosso banco')
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
}
module.exports = {
  getLivros,
  getLivroForId,
  postBook
};
