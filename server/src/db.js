const mongoose = require('mongoose')
mongoose.connect(
    `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASSWORD}@ds117334.mlab.com:17334/hex`,
    {useNewUrlParser: true},
    err => {
        if (err) {
            console.log('There was a problem connecting to MLAB: ', err)
        } else {
            console.log('Connection to MLAB was successful')
        }
    })