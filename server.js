const port = 3004

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())

require('./config/routes')(server)

server.listen(port, () => {
	console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server