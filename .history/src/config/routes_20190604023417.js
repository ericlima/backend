const express = require('express')

module.exports = function(server) {

    const router = express.Router()

    server.use('/api', router)

    const escolaService = require('../api/card/escolaService')

    escolaService.register(router, '/escola')


}