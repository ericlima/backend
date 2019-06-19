const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost:32768/sigf', 
{ 
    useNewUrlParser: true 
})