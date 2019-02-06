const express = require('express')
const app = express()
const port = 5050

app.get('/', (req, res) =>{
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`[Server up] Go to: http://localhost:${port}/ `)
})
