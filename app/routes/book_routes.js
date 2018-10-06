const express = require('express')
const passport = require('passport')
const Book = require('../models/book.js')
const handle = require('../../lib/error_handler')
const requireToken = passport.authenticate('bearer', { session: false })
const customErrors = require('../../lib/custom_errors')
const requireOwnership = customErrors.requireOwnership

const handle404 = customErrors.handle404

const router = express.Router()

router.get('/books', (req, res) => {
  Book.find()
  .then(books => {
    return books.map(book => book.toObject())
  })
  .then(books => res.status(200).json({ books }))
  .catch(err => handle(err, res))
})

router.get('/books/:id', requireToken, (req, res) => {
  Book.findById(req.params.id).populate('owner')
    .then(handle404)
    .then(book => res.status(200).json({ book: book.toObject() }))
    .catch(err => handle(err, res))
})

router.delete('/books/:id', requireToken, (req, res) => {
  Book.findById(req.params.id)
    .then(handle404)
    .then(book => {
      requireOwnership(req, book)
      book.remove()
    })
    .then(() => res.sendStatus(204))
    .catch(err => handle(err, res))
})

router.patch('/books/:id', requireToken, (req, res) => {
  delete req.body.book.owner

  Book.findById(req.params.id)
    .then(handle404)
    .then(book => {
      requireOwnership(req, book)

      Object.keys(req.body.book).forEach(key => {
        if (req.body.book[key] === '') {
          delete req.body.book[key]
        }
      })

      return book.update(req.body.book)
    })
    .then(() => Book.findById(req.params.id))
    .then((thingReturnedFromPreviousStep) => {
      console.log("thing returned is ", thingReturnedFromPreviousStep)
      return(thingReturnedFromPreviousStep)
    })
    .then((book) => res.sendStatus(200).json(book))
    .catch(err => handle(err, res))
})

router.post('/books', requireToken, (req, res) => {
  req.body.book.owner = req.user.id

  Book.create(req.body.book)
    .then(book => {
      res.status(201).json({ book: book.toObject() })
    })
    .catch(err => handle(err, res))
})

module.exports = router
