/**
 * @swagger
 * /order:
 *   post:
 *     summary: Criar um novo pedido
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 */

/**
 * @swagger
 * /order:
 *   get:
 *     summary: Listar todos os pedidos
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */

/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Buscar pedido por ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Pedido não encontrado
 */

/**
 * @swagger
 * /order/{id}:
 *   put:
 *     summary: Atualizar pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Pedido atualizado
 *       404:
 *         description: Pedido não encontrado
 */

/**
 * @swagger
 * /order/{id}:
 *   delete:
 *     summary: Remover pedido
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pedido removido
 *       404:
 *         description: Pedido não encontrado
 */

// arquivo de rotas para pedidos
const express = require("express")
const router = express.Router()

// importando o controller de pedidos
const orderController = require("../controllers/orderController")

// rota para criar um pedido
router.post("/", orderController.createOrder)
// rota para listar todos os pedidos
router.get("/list", orderController.listOrders)
// rota para buscar um pedido por ID
router.get("/:id", orderController.getOrder)
// rota para atualizar um pedido
router.put("/:id", orderController.updateOrder)
// rota para deletar um pedido
router.delete("/:id", orderController.deleteOrder)

module.exports = router