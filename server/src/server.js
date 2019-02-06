const express = require('express')
const app = express()
if (!process.env.PORT) { require('dotenv').config() }
const port = process.env.PORT
const db = require('./db')

// Controller imports
const TestController = require('./controllers/TestController.js')

// Routes
app.get('/', (req, res) =>{
  res.send('Hello world!')
})

app.use('/tests', TestController)

app.listen(port, () => {
  console.log(`[Server up] Go to: http://localhost:${process.env.PORT}/`)
})
