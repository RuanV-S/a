const fs = require('node:fs')
function getAllBooks() {
    return JSON.parse(fs.readFileSync("database.json"))
}
function getOneBook(id) {
    const books = JSON.parse(fs.readFileSync("database.json"))   
    const book = books.filter(b => b.id === id)   
    return book
}
function modifyBook(modify, id) {
    let books = JSON.parse(fs.readFileSync("database.json"))   
    const indice = books.findIndex(book => book.id === id)
    const modifyBook = { ...books[indice], ...modify }
    // no spread acima, ele compra o conteudo dos dois objeto o que tem de diferente ele altera o valor do primeiro objeto

    books[indice] = modifyBook

    fs.writeFileSync("database.json", JSON.stringify(books))
}
function deleteBooks(id) {
    const books = JSON.parse(fs.readFileSync("database.json"))   
    const indice = books.filter(book => book.id === id)
    books.splice(indice, 1)    
    
    fs.writeFileSync("database.json", JSON.stringify(books))
}
function insertNewBook(newBook) {
    const AllBooks = JSON.parse(fs.readFileSync("database.json"))
    const newList = [...AllBooks, newBook ]
    fs.writeFileSync("database.json", JSON.stringify(newList))
}
module.exports = { getAllBooks, getOneBook, insertNewBook, modifyBook, deleteBooks }