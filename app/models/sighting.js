const mongoose = require('mongoose')

const sightingSchema = new mongoose.Schema({
  entry: {
    type: String,
    required: true
  },
  tag: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Sighting', sightingSchema)
