const mongoose = require('mongoose')

const AdvertSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  sale: {
    type: String,
    default: 'venta'
  },
  price: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('advert', AdvertSchema)