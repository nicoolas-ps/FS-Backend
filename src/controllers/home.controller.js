const db = require('../database/db_connection')

const home = async (req, res) => {
  // res.json(req.rut)
  const user = await db.query('SELECT nombre FROM Usuario WHERE rut = $1;', [req.rut])
  res.json(user.rows[0])
}
module.exports = home
