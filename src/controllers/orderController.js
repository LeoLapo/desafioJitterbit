// controller para gerenciar as operações de pedidos
const orderService = require("../services/orderService")

// função para criar um pedido
async function createOrder(req, res) {
  try {
    const { numeroPedido, valorTotal, dataCriacao, items } = req.body

// mapeando os dados recebidos para o formato esperado pelo serviço
    const mappedOrder = {
      orderId: numeroPedido,
      value: valorTotal,
      creationDate: new Date(dataCriacao),
      items: items.map(item => ({
        productId: parseInt(item.idItem),
        quantity: item.quantidadeItem,
        price: item.valorItem
      }))
    }
// chamando o serviço para criar o pedido
    const order = await orderService.createOrder(mappedOrder)

    return res.status(201).json(order)
// tratamento de erros
  } catch (error) {
    return res.status(500).json({
      error: "Erro ao criar pedido",
      details: error.message
    })
  }
}

// função para buscar um pedido por ID
async function getOrder(req, res) {
  try {
    const { id } = req.params

    const order = await orderService.getOrderById(id)

    if (!order) {
      return res.status(404).json({
        error: "Pedido não encontrado"
      })
    }

    return res.status(200).json(order)

  } catch (error) {
    return res.status(500).json({
      error: "Erro ao buscar pedido",
      details: error.message
    })
  }
}

// função para listar todos os pedidos
async function listOrders(req, res) {
  try {
    const orders = await orderService.listOrders()

    return res.status(200).json(orders)

  } catch (error) {
    return res.status(500).json({
      error: "Erro ao listar pedidos",
      details: error.message
    })
  }
}

// função de atualização de pedido
async function updateOrder(req, res) {
  try {
    const { id } = req.params
    const { valorTotal, dataCriacao } = req.body

    const updatedOrder = await orderService.updateOrder(id, {
      value: valorTotal,
      creationDate: new Date(dataCriacao)
    })

    return res.status(200).json(updatedOrder)

  } catch (error) {
    return res.status(500).json({
      error: "Erro ao atualizar pedido",
      details: error.message
    })
  }
}

// função para deletar um pedido
async function deleteOrder(req, res) {
  try {
    const { id } = req.params

    await orderService.deleteOrder(id)

    return res.status(204).send()

  } catch (error) {
    return res.status(500).json({
      error: "Erro ao deletar pedido",
      details: error.message
    })
  }
}

// exportando as funções do controller
module.exports = {
    createOrder,
    getOrder,
    listOrders,
    updateOrder,
    deleteOrder
}