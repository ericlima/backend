const restful = require('node-restful')
const mongoose = restful.mongoose

const usuarioSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    senha: { type: String },
    cadastroAt: { type: Date, default: Date.now },
    manutencaoAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Usuario', usuarioSchema)