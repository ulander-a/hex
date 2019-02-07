const mongoose = require('mongoose')

const GridSchema = new mongoose.Schema({
    hexes: [{
        x: Number,
        y: Number,
        data: {
            name: String,
            terrain: String,
        }
    }]
})

mongoose.model('Grid', GridSchema)
module.exports = mongoose.model('Grid')