const express = require('express')
const app = express()
const chalk = require('chalk')
const cors = require('cors')

if (!process.env.PORT) { require('dotenv').config() }
const port = process.env.PORT
const db = require('./db')

// Controller imports
const GridController = require('./controllers/GridController')

// Enable CORS
app.use(cors());


// Routes
app.get('/', (req, res) =>{
  res.send('Hello world!')
})

app.use('/grids', GridController)

app.listen(port, () => {
  console.log(`[Server up] Go to: ` + chalk.underline(`http://localhost:${process.env.PORT}/`))
})
