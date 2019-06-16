const restful = require('node-restful')
const mongoose = restful.mongoose

const grupoSchema = new mongoose.Schema({
    cadastroAt: { type: Date, default: Date.now },
    manutencaoAt: { type: Date, default: Date.now },
    usuarioId: { type: Number }
})

module.exports = restful.model('Grupo', grupoSchema)