const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.send('My Books!') 
}) // Buscar dados na api

router.post('/', (req, res) => {
    res.send('Testando enviando uam requisição')
}) // Enviar dados na api
    
router.patch('/', (req, res) => { 
    res.send('Testando enviando um patch')
}) // Editar dados na api

router.delete('/', (req, res) => { 
    res.send('Testando enviando um delete')
}) // Deletar dados na api
module.exports = router