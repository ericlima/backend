const Escola = require('./escola')
const errorHandler = require('../common/errorHandler')

Escola.methods(['get', 'post', 'put', 'delete'])
Escola.updateOptions({new: true, runValidators: true})
Escola.after('post', errorHandler).after('put', errorHandler)

module.exports = Escola