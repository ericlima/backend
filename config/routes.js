const express = require('express')


module.exports = (server) => {
  function registra(modulo) {
    const r = require('../api/'+modulo+'/'+modulo+'Service')
    r.register(protectedApi,'/'+modulo)
  }
  
  const protectedApi = express.Router()
  server.use('/api', protectedApi)

  registra('colaborador')

  registra('usuario')

  registra('grupo')
  
  

}