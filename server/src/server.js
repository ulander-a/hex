const express = require('express')
const app = express()

if (!process.env.PORT) { require('dotenv').config() }
const port = process.env.PORT


app.get('/', (req, res) =>{
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`[Server up] Go to: http://localhost:${process.env.PORT}/ `)
})
