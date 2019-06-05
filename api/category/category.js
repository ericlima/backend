const restful = require('node-restful')
const mongoose = restful.mongoose

const categorySchema = new mongoose.Schema({
	description: { type: String },
	createAt: { type: Date, default: Date.now },
})

module.exports = restful.model('Category', categorySchema)