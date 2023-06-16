require('./mongodb')
const usersModels = require('../models/categoriaModel')
const clientes = require('./category.json')

async function carregarDados() {
  try {
    await usersModels.deleteMany({})
    for (const user of clientes) {
      await usersModels.create(user)
    }
    console.log('Carga de categoria feita!')
  } catch (err) {
    console.log(err)
  } finally {
    process.exit()
  }
}
carregarDados()