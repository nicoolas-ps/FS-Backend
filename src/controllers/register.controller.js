const db = require('../database/db_connection')
const bcrypt = require('bcrypt')
const jwtGenerator = require('../utils/jwtGenerator')

// REGISTER
const register = async (req, res) => {
  try {
    // 1. Obtener parametros de req.body (rut, nombre, email, contraseña)
    const { rut, nombre, email, contraseña } = req.body
    const user = await db.query('SELECT * FROM Usuario WHERE email = $1;', [email])

    // 2. Verificar si el docente se encuentra en la BD
    if (user.rows.length !== 0) {
      return res.status(401).send('Docente se encuentra registrado')
    }

    // 3. Encriptar contraseña del usuario
    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound)
    const bcryptpassword = await bcrypt.hash(contraseña, salt)

    // 4. Ingresar el nuevo usuario a la BD
    const newUser = await db.query(
      'INSERT INTO Usuario(rut, nombre, email, contraseña) VALUES($1, $2, $3, $4) RETURNING *;',
      [rut, nombre, email, bcryptpassword]
    )
    // res.status(200).send('Docente registrado exitosamente')

    // 5. Generar token
    const token = jwtGenerator(newUser.rows[0].rut)
    res.json({ token })
    //
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

module.exports = register
