const jwt = require('jsonwebtoken')
const { SECRET } = require('../constants/index')

function jwtGenerator (rut) {
  const payload = {
    user_rut: rut
  }
  return jwt.sign(payload, SECRET, { expiresIn: '1hr' })
}

module.exports = jwtGenerator
