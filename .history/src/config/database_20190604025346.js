const url = 'mongodb://localhost/cards'

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect(url)

