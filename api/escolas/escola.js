const restful = require('node-restful')
const mongoose = restful.mongoose

const escolaSchema = new mongoose.Schema({
    nome: { type: String },
    endereco: { type: String },
    email: { type: String },
    fone: { type: String },
    cep: { type: String },
    endereco: { type: String },
    complemento: { type: String },
    cidade: { type: String },
    zona: { type: String },
	createAt: { type: Date, default: Date.now },
})

module.exports = restful.model('Escola', escolaSchema)