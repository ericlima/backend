const express = require('express')

module.exports = (server) => {

  const protectedApi = express.Router()
  server.use('/api', protectedApi)

  const Category = require('../api/category/categoryService')
  Category.register(protectedApi, '/categorys')

  const Escola  = require('../api/escolas/escolaService')
  Escola.register(protectedApi, '/escola')

}