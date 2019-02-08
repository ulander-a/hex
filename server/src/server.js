const express = require('express')
const app = express()
if (!process.env.PORT) { require('dotenv').config() }
const port = process.env.PORT
const db = require('./db')

// Controller imports
const TestController = require('./controllers/TestController')
const GridController = require('./controllers/GridController')

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Routes
app.get('/', (req, res) =>{
  res.send('Hello world!')
})

app.use('/tests', TestController)
app.use('/grids', GridController)

app.listen(port, () => {
  console.log(`[Server up] Go to: http://localhost:${process.env.PORT}/`)
})
