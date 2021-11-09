const jwt = require('jsonwebtoken')
const { SECRET } = require('../constants/index')

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header('token')
    if (!jwtToken) {
      return res.status(403).json('Not Authorize')
    }
    const payload = jwt.verify(jwtToken, SECRET)

    req.rut = payload.user_rut
  } catch (error) {
    console.error(error.message)
    return res.status(403).json('Not Authorize')
  }
  next()
}
