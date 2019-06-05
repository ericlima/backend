const Category = require('./category')
const errorHandler = require('../common/errorHandler')

Category.methods(['get', 'post', 'put', 'delete'])
Category.updateOptions({new: true, runValidators: true})
Category.after('post', errorHandler).after('put', errorHandler)

module.exports = Category