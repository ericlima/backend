const Usuario = require('./usuario')
const errorHandler = require('../common/errorHandler')

Usuario.methods(['get', 'post', 'put', 'delete'])
Usuario.updateOptions({new: true, runValidators: true})
Usuario.after('post', errorHandler).after('put', errorHandler)

module.exports = Usuario