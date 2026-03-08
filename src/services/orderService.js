// importando o prisma client para acessar o banco de dados
const prisma = require("../database/prisma")

// função para criar um pedido
async function createOrder(data) {
  const order = await prisma.order.create({
    data: {
      orderId: data.orderId,
      value: data.value,
      creationDate: data.creationDate,
      items: {
        create: data.items
      }
    },
    include: {
      items: true
    }
  })

  return order
}

// função para buscar um pedido por ID
async function getOrderById(orderId) {
  const order = await prisma.order.findUnique({
    where: {
      orderId: orderId
    },
    include: {
      items: true
    }
  })

  return order
}

// função para listar todos os pedidos
async function listOrders() {
  const orders = await prisma.order.findMany({
    include: {
      items: true
    }
  })

  return orders
}

// função para atualizar um pedido
async function updateOrder(orderId, data) {
  const order = await prisma.order.update({
    where: {
      orderId: orderId
    },
    data: {
      value: data.value,
      creationDate: data.creationDate
    }
  })

  return order
}

// função para deletar um pedido
async function deleteOrder(orderId) {
  await prisma.items.deleteMany({
    where: {
      orderId: orderId
    }
  })

  const order = await prisma.order.delete({
    where: {
      orderId: orderId
    }
  })

  return order
}

// exportando as funções do service
module.exports = {
    createOrder,
    getOrderById,
    listOrders,
    updateOrder,
    deleteOrder
}