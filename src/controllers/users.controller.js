const db = require('../database/db_connection')

// GET ALL USERS
const getAllUsers = async (req, res) => {
  try {
    const users = await db.query('SELECT * FROM Usuario;')
    res.status(200).json(users.rows)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

// GET USER
const getUser = async (req, res) => {
  res.send('GET USER')
}

// UPDATE USER
const updateUser = async (req, res) => {
  res.send('UPDATE USER')
}

module.exports = {
  getAllUsers,
  getUser,
  updateUser
}
