const { Router } = require('express')
const auth = require('./auth.router')
const user = require('./user.router')
const router = Router()

router.use('/auth', auth)
router.use('/users', user)

module.exports = router
