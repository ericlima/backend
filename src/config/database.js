const url = 'mongodb://localhost/card'

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = mongoose.connect(url)

