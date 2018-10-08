const express = require('express')
const passport = require('passport')
const Sighting = require('../models/sighting.js')
const handle = require('../../lib/error_handler')
const requireToken = passport.authenticate('bearer', { session: false })
const customErrors = require('../../lib/custom_errors')
const requireOwnership = customErrors.requireOwnership
const handle404 = customErrors.handle404
const router = express.Router()

router.get('/sightings', (req, res) => {
  Sighting.find()
    .then(sightings => {
      return sightings.map(sighting => sighting.toObject())
    })
    .then(sightings => res.status(200).json({ sightings }))
    .catch(err => handle(err, res))
})

router.get('/sightings/:id', requireToken, (req, res) => {
  Sighting.findById(req.params.id).populate('owner')
    .then(handle404)
    .then(sighting => res.status(200).json({ sighting: sighting.toObject() }))
    .catch(err => handle(err, res))
})

router.delete('/sightings/:id', requireToken, (req, res) => {
  Sighting.findById(req.params.id)
    .then(handle404)
    .then(sighting => {
      requireOwnership(req, sighting)
      sighting.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(err => handle(err, res))
})

router.patch('/sightings/:id', requireToken, (req, res) => {
  delete req.body.sighting.owner

  Sighting.findById(req.params.id)
    .then(handle404)
    .then(sighting => {
      requireOwnership(req, sighting)

      Object.keys(req.body.sighting).forEach(key => {
        if (req.body.sighting[key] === '') {
          delete req.body.sighting[key]
        }
      })

      return sighting.update(req.body.sighting)
    })
    .then(() => Sighting.findById(req.params.id))
    .then((thingReturnedFromPreviousStep) => {
      console.log('thing returned is ', thingReturnedFromPreviousStep)
      return (thingReturnedFromPreviousStep)
    })
    .then((sighting) => res.sendStatus(200).json(sighting))
    .catch(err => handle(err, res))
})

router.post('/sightings', requireToken, (req, res) => {
  req.body.sighting.owner = req.user.id

  Sighting.create(req.body.sighting)
    .then(sighting => {
      res.status(201).json({ sighting: sighting.toObject() })
    })
    .catch(err => handle(err, res))
})

module.exports = router
