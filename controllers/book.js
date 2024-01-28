const {
  getAllBooks,
  insertNewBook,
  modifyBook,
  deleteBooks,
  getOneBook,
} = require("../service/book");

function getBook(req, res) {
  try {
    const books = getAllBooks();
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getBookForId(req, res) {
  try {
    const id = req.params.id;
    if (id && !Number(id)) return res.status(422), res.send("ID is invalid");
    const book = getOneBook(id); 
    res.send(book);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postBook(req, res) {
  try {
    const newBook = req.body;
    if (req.body) return res.status(422), res.send("A body is needed");  
    insertNewBook(newBook);
    res.status(201);
    res.send("Livro inserido com suceso em nosso banco");
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
}

function patchBook(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;
    if (id && !Number(id) && req.body) return res.status(422), res.send("ID is invalid or a body is needed");   
    modifyBook(body, id);
    res.status(201);
    res.send("Livro alterado com suceso em nosso banco");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteBook(req, res) {
  try {
    const id = req.params.id;
    if (id && !Number(id)) return res.status(422), res.send("ID is invalid");  
    deleteBooks(id);
    res.status(201);
    res.send("Livro deletado com suceso em nosso banco");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
module.exports = {
  getBook,
  getBookForId,
  postBook,
  patchBook,
  deleteBook,
};
