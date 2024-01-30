const { Router } = require('express')
const { postBook, patchBook, deleteBook, getBook, getBookForId } = require('../controllers/book')
const { postBookmarks, deleteBookmark, getBookmarks } = require('../controllers/bookmarks')


const router = Router()
router.get('/', getBook) // Buscar dados na "database" todos os livros
router.get('/:id', getBookForId) // busca no banco de dados apenas um livro com referencia com o id
router.post('/', postBook) // Enviar dados na api    
router.patch('/:id', patchBook) // Editar dados na api
router.delete('/:id', deleteBook) // Deletar dados na api

router.get('/favoritos/',getBookmarks)
router.post('/favoritos/', postBookmarks)
router.delete('/favoritos/:id', deleteBookmark)
module.exports = router