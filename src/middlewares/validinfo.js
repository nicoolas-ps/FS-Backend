module.exports = (req, res, next) => {
  const { rut, nombre, email, contraseña } = req.body

  /* function validRut (userRut) {
    // Crear validacion para el rut
  } */

  function validEmail (userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)
  }

  if (req.path === '/register') {
    console.log(!email.length)
    if (![rut, email, nombre, contraseña].every(Boolean)) {
      return res.status(401).json('Faltan datos')
    } else if (!validEmail(email)) {
      return res.status(401).json('Correo electrónico inválido')
    } // else if (!validRut(rut)) {
    //
    // }
  } else if (req.path === '/login') {
    if (![email, contraseña].every(Boolean)) {
      return res.status(401).json('Faltan datos')
    } else if (!validEmail(email)) {
      return res.status(401).json('Correo electrónico inválido')
    }// else if (!validRut(rut)) {
    //
    // }
  }

  next()
}
