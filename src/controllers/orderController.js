const orderService = require("../services/orderService")

async function createOrder(req, res) {
  try {
    const { numeroPedido, valorTotal, dataCriacao, items } = req.body

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

    const order = await orderService.createOrder(mappedOrder)

    return res.status(201).json(order)

  } catch (error) {
    return res.status(500).json({
      error: "Erro ao criar pedido",
      details: error.message
    })
  }
}

module.exports = {
  createOrder
}