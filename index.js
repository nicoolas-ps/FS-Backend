const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./database/db_connection')
const PORT = process.env.PORT || 3001

//  Middlewares
app.use(cors())
app.use(express.json())

//  Routes

//  Create a todo

app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body
    const newTodo = await pool.query('INSERT INTO todo(description) VALUES($1) RETURNING *', [description])
    res.json(newTodo.rows[0])
  } catch (error) {
    console.error(error.message)
  }
})

//  Get all todos

app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo')
    res.json(allTodos.rows)
  } catch (error) {
    console.error(error.message)
  }
})

//  Get a todo

app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const todo = await pool.query('SELECT * FROM todo WHERE id = $1', [id])
    res.json(todo.rows)
  } catch (error) {
    console.error(error.message)
  }
})

//  Update a todo

app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { description } = req.body
    const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE id = $2', [description, id])
    res.json('Todo was updated')
  } catch (error) {
    console.error(error.message)
  }
})

//  Delete a todo

app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleteTodo = await pool.query('DELETE FROM todo WHERE id = $1', [id])
    res.json('Todo was deleted')
  } catch (error) {
    console.error(error.message)
  }
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
