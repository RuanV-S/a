const fs = require('node:fs')
function getAllBookmarks() {
    return JSON.parse(fs.readFileSync("bookmarks.json"))
}

function deleteBookmark(id) {
    const book = JSON.parse(fs.readFileSync("bookmarks.json"))
    const bookFilter = book.filter(b => b.id !== id)
    fs.writeFileSync("bookmarks.json", JSON.stringify(bookFilter))
}

function postBookmark(id) {
    const bookMark = JSON.parse(fs.readFileSync("bookmarks.json"))
    const books = JSON.parse(fs.readFileSync("database.json"))

    const bookFind = books.find(b => b.id === id)
    const newBookmarks = [...bookMark, bookFind]
    fs.writeFileSync("bookmarks.json", JSON.stringify(newBookmarks))
}
module.exports = {
    getAllBookmarks,
    deleteBookmark
}