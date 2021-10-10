const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

app.listen(port, () => {
  console.log('Sistema de ayudantes esta corriendo en el puerto', port)
})
