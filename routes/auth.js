const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../middleware/auth')
const { body, validationResult } = require('express-validator');

const User = require('../models/User')


/**
 * @route GET api/auth
 * @desc Get logged in user
 * @access Private
 */
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Error del servidor')
  }
})

/**
 * @route POST api/auth
 * @desc Auth user & get token
 * @access Public
 */
router.post('/', [
  body('email', 'Ingresa un correo electrónico válido').isEmail(),
  body('password', 'El campo "Password" es obligatorio').exists()
],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
      let user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: 'Datos de acceso incorrectos' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'Datos de acceso incorrectos' })
      }

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, config.get('jwtSecret'), {
        expiresIn: 360000
      }, (error, token) => {
        if (error) throw error
        res.json({ token })
      })

    } catch (error) {
      console.error(error.message)
      error.status(500).send('Error del servidor')
    }

  }
)

module.exports = router