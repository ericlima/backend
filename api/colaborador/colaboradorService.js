const Colaborador = require('./colaborador')
const errorHandler = require('../common/errorHandler')

Colaborador.methods(['get', 'post', 'put', 'delete'])
Colaborador.updateOptions({new: true, runValidators: true})
Colaborador.after('post', errorHandler).after('put', errorHandler)

module.exports = Colaborador