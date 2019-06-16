const Grupo = require('./grupo')
const errorHandler = require('../common/errorHandler')

Grupo.methods(['get', 'post', 'put', 'delete'])
Grupo.updateOptions({new: true, runValidators: true})
Grupo.after('post', errorHandler).after('put', errorHandler)

module.exports = Grupo