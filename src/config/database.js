const url = 'mongodb://localhost:32768/card'

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost:32768/banco', { useNewUrlParser: true })

