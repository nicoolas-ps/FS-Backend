const express = require('express')
const cors = require('cors')
const app = express()
const { PORT } = require('./src/constants/index')

// APP START
const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`App corriendo en http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

//  MIDDLEWARES
app.use(cors())
app.use(express.json())

//  ROUTES
// Login and register routes
app.use('/auth', require('./src/routes/auth.router'))

// Home route
app.use('/home', require('./src/routes/home.router'))

app.use('/user', require('./src/routes/users.router'))

appStart()
