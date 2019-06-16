const restful = require('node-restful')
const mongoose = restful.mongoose

const colaboradorSchema = new mongoose.Schema({
	nome: { type: String },
    cadastroAt: { type: Date, default: Date.now },
    manutencaoAt: { type: Date, default: Date.now },
    usuarioId: { type: Number }
})

module.exports = restful.model('Colaborador', colaboradorSchema)