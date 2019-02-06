const mongoose = require('mongoose')

const TestSchema = new mongoose.Schema({
    text: String,
})

mongoose.model('Test', TestSchema)
module.exports = mongoose.model('Test')