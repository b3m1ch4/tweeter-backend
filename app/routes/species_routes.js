/* ===== required files ===== */
const express = require('express')
const passport = require('passport')
const multer = require('multer')
const species = multer({ dest: 'species/' })
const fs = require('fs')
const Species = require('../models/species.js')
const handle = require('../../lib/error_handler')
const requireToken = passport.authenticate('bearer', { session: false })
const customErrors = require('../../lib/custom_errors')
const requireOwnership = customErrors.requireOwnership
const handle404 = customErrors.handle404
const router = express.Router()

/* ===== Read (many) ===== */
router.get('/species', (req, res) => {
  Species.find()
    .then(speciesPlural => {
      return speciesPlural.map(species => species.toObject())
    })
    .then(speciesPlural => res.status(200).json({ speciesPlural }))
    .catch(err => handle(err, res))
})

/* ===== Read (one) ===== */
router.get('/species/:id', requireToken, (req, res) => {
  Species.findById(req.params.id).populate('owner')
    .then(handle404)
    .then(species => res.status(200).json({ species: species.toObject() }))
    .catch(err => handle(err, res))
})

module.exports = router
