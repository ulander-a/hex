const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const Grid = require('../models/Grid')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', (req, res) => {
    Grid.find({}, (error, grids) => {
        if (error) {
            return res.status(500).send(`An error occurred while trying to get the griddata: ${error}`)
        } else {
            return res.status(200).send(grids)
        }
    })
})

router.get('/:id', (req, res) => {
    Grid.findById(req.params.id, (error, grid) => {
        if (error) {
            return res.status(500).send(`An error occurred while trying to get the griddata: ${error}`)
        } else {
            return res.status(200).send(grid)
        }
    })
})

module.exports = router