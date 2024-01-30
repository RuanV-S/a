const express = require('express')
const app = express()
const cors = require("cors")
const bookRoutes = require('./routes/book')
const bookmarksRoutes = require('./routes/bookmarks')
app.use(express.json())
app.use(cors({ origin: "*"}))
app.use('/favoritos', bookmarksRoutes)
app.use('/books', bookRoutes)
const port = 8000
app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})