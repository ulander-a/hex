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

router.post('/', (req, res) => {
    Grid.create({
        x: req.body.x,
        y: req.body.y,
        data: {
            name: req.body.name,
            terrain: req.body.terrain,
        }
    }, (error, grid) => {
        if (error) {
            return res.status(500).send(`OwO What's this? ~ ${error}`)
        } else {
            return res.status(200).send(grid)
        }
    })
})

// router.delete('/', (req, res) => {
//     Grid.deleteOne(
//         {id: req.body.id},
//         ()
//     )
// })
module.exports = router