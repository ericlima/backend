const url = 'mongodb://localhost:32768/cards'

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect(url)

