const pool = require('../database/db_connection')

const login = (req, res) => {
  const { username, password } = req.body
  if (!(username && password)) {
    res.status(400).json({ message: ' Usuario y Contraseña es requerido!' })
  } else {

  }
}

module.exports = {
  login
}
