const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  id: Number,
  nomeCompleto: String,
  cpf: String,
  telefone: Number,
  endereco: String,
  cartaoCredito: String,
  email: String,
  senha: String
})

module.exports = mongoose.model('clientes', userSchema)
