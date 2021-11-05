const pool = require('../database/db_connection')

const getUser = async (req, res) => {
  const response = await pool.query('Select * from ayudantes')
  console.log(response)
  res.send(response.rows)
}

module.exports = getUser
