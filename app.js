const express = require('express')
const app = express()
const bookRoutes = require('./routes/book')
const port = 8000
app.use(express.json())
app.use('/book', bookRoutes)

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})