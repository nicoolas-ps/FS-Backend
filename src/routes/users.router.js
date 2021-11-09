const { Router } = require('express')
const router = Router()
const { getAllUsers, getUser, updateUser } = require('../controllers/users.controller')

router.route('/').get(getAllUsers)
router.route('/:id').get(getUser)
router.route('/:id').patch(updateUser)

module.exports = router
