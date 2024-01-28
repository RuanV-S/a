const { Router } = require('express')
const { postBook, patchBook, deleteBook, getBook, getBookForId } = require('../controllers/book')

const router = Router()

router.get('/', getBook) // Buscar dados na "database" todos os livros
router.get('/:id', getBookForId) // busca no banco de dados apenas um livro com referencia com o id
router.post('/', postBook) // Enviar dados na api
    
router.patch('/:id', patchBook) // Editar dados na api

router.delete('/:id', deleteBook) // Deletar dados na api
module.exports = router