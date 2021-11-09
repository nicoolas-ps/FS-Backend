const { Router } = require('express')
const router = Router()
const register = require('../controllers/register.controller')
const login = require('../controllers/login.controller')
const authorization = require('../controllers/authorization.controller')
const validInfo = require('../middlewares/validinfo')
const authMiddleware = require('../middlewares/authorization')

// REGISTER
router.post('/register', validInfo, register)

// LOGIN
router.post('/login', validInfo, login)

// AUTHORIZATION
router.get('/is-verify', authMiddleware, authorization)
module.exports = router
