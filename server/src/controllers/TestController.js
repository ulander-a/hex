const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const Test = require('../models/Test')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get('/', (req, res) => {
    Test.find({}, (error, tests) => {
        console.log(tests)
        if (error) {
            return res.status(500).send('An error occurred while trying to get the testdata')
        } else {
            return res.status(200).send(tests)
        }
    })
})

module.exports = router