const express = require('express')
const app = express()
const chalk = require('chalk')
if (!process.env.PORT) { require('dotenv').config() }
const port = process.env.PORT
const db = require('./db')

// Controller imports
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

app.use('/grids', GridController)

app.listen(port, () => {
  console.log(`[Server up] Go to: ` + chalk.underline(`http://localhost:${process.env.PORT}/`))
})
