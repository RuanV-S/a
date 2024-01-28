const { Router } = require('express')
const { getLivros, getLivroForId, postBook } = require('../controllers/book')
const { getBook } = require('../service/book')
const router = Router()

router.get('/', getLivros) // Buscar dados na "database" todos os livros
router.get('/:id', getLivroForId) // busca no banco de dados apenas um livro com referencia com o id

router.post('/', postBook) // Enviar dados na api
    
router.patch('/', (req, res) => { 
    res.send('Testando enviando um patch')
}) // Editar dados na api

router.delete('/', (req, res) => { 
    res.send('Testando enviando um delete')
}) // Deletar dados na api
module.exports = router