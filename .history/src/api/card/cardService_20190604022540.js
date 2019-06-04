const Escola = require('./card')

Escola.methods(['get','post','put','delete'])
Escola.updateOptions({ new: true, runValidators: true })

