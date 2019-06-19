const restful = require('node-restful')
const mongoose = restful.mongoose

const usuarioSchema = new mongoose.Schema({
    "nome": "String",
    "email": { type: "String" },
    "senha": { type: "String" },
    cadastroAt: { type: Date },
    manutencaoAt: { type: Date }
})

module.exports = restful.model('Usuario', usuarioSchema)