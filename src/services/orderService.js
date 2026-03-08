const prisma = require("../database/prisma")

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

async function listOrders() {
  const orders = await prisma.order.findMany({
    include: {
      items: true
    }
  })

  return orders
}

module.exports = {
    createOrder,
    getOrderById,
    listOrders
}