const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001

//  Middlewares
app.use(cors())
app.use(express.json())

//  Routes
app.use('/', require('./src/routes/auth.router'))

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
