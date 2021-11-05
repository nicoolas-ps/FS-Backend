const { Router } = require('express')
const router = Router()

// LOGIN
router.get('/users', require('../controllers/user.controller'))
module.exports = router
