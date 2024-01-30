const { Router } = require('express')
const { postBookmarks, deleteBookmark, getBookmarks } = require('../controllers/bookmarks')


const routerBookmarks = Router()

routerBookmarks.get('/',getBookmarks)
routerBookmarks.post('/', postBookmarks)
routerBookmarks.delete('/:id', deleteBookmark)
module.exports = routerBookmarks