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

module.exports = {
  createOrder
}