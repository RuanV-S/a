const { getAllBookmarks, postBookmarkForId, deleteBookmarkForId } = require("../service/bookmarks");

function getBookmarks(req, res) {
    try {
      const books = getAllBookmarks();
      res.send(books);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  function postBookmarks(req, res) {
    try {
      const id = req.params.id
      if (req.body) return res.status(422), res.send("A body is needed");  
      postBookmarkForId(id)
      res.status(201);
      res.send("Livro inserido com suceso em nosso banco");
    } catch (err) {
      res.status(500);
      res.send(err.message);
    }
  }

  function deleteBookmark(req, res) {
    try {
      const id = req.params.id;
      if (id && !Number(id)) return res.status(422), res.send("ID is invalid");  
      deleteBookmarkForId(id);
      res.status(201);
      res.send("Livro deletado com suceso em nosso banco");
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }
  module.exports = {
    getBookmarks,
    deleteBookmark,
    postBookmarks    
  }