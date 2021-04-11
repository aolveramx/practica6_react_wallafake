const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { body, validationResult } = require('express-validator')

const User = require('../models/User')
const Advert = require('../models/Advert')

/**
 * @route GET api/adverts
 * @desc Get all users adverts
 * @access Private
 */
router.get('/', auth, async (req, res) => {
  try {
    const adverts = await Advert.find({ user: req.user.id }).sort({
      date: -1,
    })
    res.json(adverts)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Error del servidor')
  }
})

/**
 * @route POST api/adverts
 * @desc Add new advert
 * @access Private
 */
router.post(
  '/',
  [auth, [body('name', 'El nombre es obligatorio').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, sale, price, tags  } = req.body

    try {
      const newAdvert = new Advert({
        name,
        sale,
        price,
        tags,
        user: req.user.id
      })

      const advert = await newAdvert.save()

      res.json(advert)
    } catch (error) {
      console.error(error.message)
      res.status(500).send('Error del servidor')
    }
  }
)

/**
 * @route PUT api/adverts/:id
 * @desc Update an advert
 * @access Private
 */
router.put('/:id', auth, async (req, res) => {
  const { name, sale, price, tags } = req.body

  //Build advert object
  const advertFields = {}
  if (name) advertFields.name = name
  if (sale) advertFields.sale = sale
  if (price) advertFields.price = price
  if (tags) advertFields.tags = tags

  try {
    let advert = await Advert.findById(req.params.id)

    if (!advert) return res.status(404).json({ msg: 'El anuncio no existe!' })

    //Make shure user owns advert
    if (advert.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'No autorizado' })
    }

    advert = await Advert.findByIdAndUpdate(
      req.params.id,
      { $set: advertFields },
      { $new: true }
    )

    res.json(advert)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Error del servidor')
  }
})

/**
 * @route DELETE api/adverts/:id
 * @desc Delete advert
 * @access Private
 */
router.delete('/:id', auth, async (req, res) => {
  try {
    let advert = await Advert.findById(req.params.id)

    if (!advert) return res.status(404).json({ msg: 'El anuncio no existe!' })

    //Make shure user owns advert
    if (advert.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'No autorizado' })
    }

    await Advert.findByIdAndRemove(req.params.id)

    res.json({ msg: 'Anuncio Eliminado' })
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Error del servidor')
  }
})

module.exports = router
