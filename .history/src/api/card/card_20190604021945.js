const restful = require('node-restful')
const mongoose = restful.mongoose

const escolaSchema = new mongoose.Schema({
    nome: { type: String, require: true },
    regiao: { type: String, require: true },
    email: { type: String, require: true },
    fone: { type: String, require: true },
    endereco: { type: String, require: true }
})
