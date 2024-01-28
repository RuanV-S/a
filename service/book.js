const fs = require('node:fs')
function getAllBooks() {
    return JSON.parse(fs.readFileSync("database.json"))
}

function getBook(id) {
    const books = JSON.parse(fs.readFileSync("database.json"))   
    const book = books.filter(b => b.id === id)   
    return book
}

function insertNewBook(newBook) {
    const AllBooks = JSON.parse(fs.readFileSync("database.json"))
    const newList = [...AllBooks, newBook ]
    fs.writeFileSync("database.json", JSON.stringify(newList))
}
module.exports = { getAllBooks, getBook, insertNewBook }