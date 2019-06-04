const express = require('express')

module.exports = (server) => {

    const rota = express.Router()

    server.use('/api', rota)

    const Escola = require('../api/card/escolaService')

    Escola.register(rota, '/escola')

}