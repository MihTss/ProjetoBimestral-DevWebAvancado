const clientModel = require('../models/clientModel')

class clientController {

  async cadastrarCliente(req, res) {
    let user = req.body
    const max = await clientModel.findOne({}).sort({ id: -1 })
    user.id = max == null ? 1 : max.id + 1
    const resultado = await clientModel.create(user)
    res.status(201).json(resultado)
  }

  async listarCliente(req, res) {
    const resultado = await clientModel.find({})
    res.status(200).json(resultado)
  }

  async buscarPorIdCliente(req, res) {
    const id = req.params.id
    const resultado = await clientModel.findOne({ 'id': id })
    res.status(200).json(resultado)
  }

  async atualizarCliente(req, res) {
    const id = req.params.id
    const _id = String((await clientModel.findOne({ 'id': id }))._id)
    await clientModel.findByIdAndUpdate(String(_id), req.body)
    res.status(200).send()
  }

  async excluirCliente(req, res) {
    const id = req.params.id
    const _id = String((await clientModel.findOne({ 'id': id }))._id)
    await clientModel.findByIdAndRemove(String(_id))
    res.status(200).send()
  }
}

module.exports = new clientController()
