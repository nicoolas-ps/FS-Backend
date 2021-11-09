const { Router } = require('express')
const router = Router()
const home = require('../controllers/home.controller')
const authMiddleware = require('../middlewares/authorization')

router.get('/', authMiddleware, home)

module.exports = router
