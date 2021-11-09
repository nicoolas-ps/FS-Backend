const db = require('../database/db_connection')
const bcrypt = require('bcrypt')
const jwtGenerator = require('../utils/jwtGenerator')

// LOGIN
const login = async (req, res) => {
  try {
    // 1. Obtener parametros de req.body
    const { email, contraseña } = req.body

    // 2. Verificar si el usuario existe
    const user = await db.query('SELECT * FROM Usuario WHERE email = $1;', [email])

    if (user.rows.length === 0) {
      return res.status(401).json('Usuario no registrado')
    }

    // 3. Verificar la contraseña entregada por el usuario con la de BD
    const validPassword = await bcrypt.compare(contraseña, user.rows[0].contraseña)

    if (!validPassword) {
      return res.status(401).json('Correo electrónico o contraseña incorrectos')
    }

    // 4. Entregar token
    const token = jwtGenerator(user.rows[0].rut)
    res.json({ token })
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

module.exports = login
