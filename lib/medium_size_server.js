const express = require('express')
const bodyParser = require('body-parser')
// for this example, we'll use an in-memory array in place of a database
const books = [
  { title: 'Dictionary', author: 'Webster' },
  { title: 'Encyclopedia', author: 'Encarta' },
  { title: 'Clean Code', author: 'Robert Cecil Martin' }
]

// your code goes here!
const bookRoutes = require('../app/routes/book_routes.js')
const mongoose = require('mongoose')
const cors = require('cors')
const db = require('../config/db')
const userRoutes = require('../app/routes/user_routes')
const auth = require('../lib/auth')

const dotenv = require('dotenv')
dotenv.config()

if (process.env.TESTENV) {
  process.env.KEY = process.env.SECRET_KEY_BASE_TEST
// Set to secret key base development if not test and no key present
// process.env.KEY is present in production and set through heroku
} else if (!process.env.KEY) {
  process.env.KEY = process.env.SECRET_KEY_BASE_DEVELOPMENT
}

mongoose.Promise = global.Promise
mongoose.connect(db, {
  useMongoClient: true
})

const app = express()

// app.use((req, res, next) => {
//     console.log("request is", req)
//     next()
// })

// set CORS headers on response from this API using the `cors` NPM package
// `CLIENT_ORIGIN` is an environment variable that will be set on Heroku
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:4741' }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// define port for API to run on
const port = process.env.PORT || 4741

app.use(userRoutes)

app.use((req, res, next) => {
  if (req.headers.authorization) {
    const auth = req.headers.authorization
    // if we find the Rails pattern in the header, replace it with the Express
    // one before `passport` gets a look at the headers
    req.headers.authorization = auth.replace('Token token=', 'Bearer ')
  }
  next()
})
app.use(auth)

app.use(bookRoutes)


app.listen(port, () => {
  console.log('listening on port ' + port)
})

module.exports = app
