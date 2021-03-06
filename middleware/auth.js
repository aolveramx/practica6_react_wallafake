const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

module.exports = function (req, res, next) {
  //Get token from header
  const token = req.header('x-auth-token')

  //Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'Sin token, permiso denegado' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWTSecret)

    req.user = decoded.user
    next()
  } catch (error) {
    res.status(401).json({ msg: 'El Token no es válido' })
  }
}