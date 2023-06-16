const express = require('express')
const router = express.Router()
const clientController = require('../controllers/clientController')
const categoriaController = require('../controllers/categoryController')

router.get('/listarCliente', clientController.listarCliente)
router.get('/idCliente/:id', clientController.buscarPorIdCliente)
router.post('/cadastrarCliente', clientController.cadastrarCliente)
router.put('/atualizarCliente/:id', clientController.atualizarCliente)
router.delete('/excluirCliente/:id', clientController.excluirCliente)
router.get('/listarCategoria', categoriaController.listarCategoria)
router.get('/idCategoria/:id', categoriaController.buscarPorIdCategoria)
router.post('/cadastrarCategoria', categoriaController.cadastrarCategoria)
router.put('/atualizarCategoria/:id', categoriaController.atualizarCategoria)

module.exports = router