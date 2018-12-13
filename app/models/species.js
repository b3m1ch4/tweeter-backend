const mongoose = require('mongoose')

const speciesSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  avibaseId: {
    type: String
  },
  rank: {
    type: String
  },
  englishName: {
    type: String,
    required: true
  },
  frenchName: {
    type: String
  },
  order: {
    type: String
  },
  family: {
    type: String
  },
  subfamily: {
    type: String
  },
  genus: {
    type: String
  },
  species: {
    type: String
  },
  annotation: {
    type: String
  },
  statusAccidental: {
    type: String
  },
  statusHawaiian: {
    type: String
  },
  statusIntroduced: {
    type: String
  },
  statusNonbreeding: {
    type: String
  },
  statusExtinct: {
    type: String
  },
  statusMisplaced: {
    type: String
  }
})

module.exports = mongoose.model('Species', speciesSchema)
