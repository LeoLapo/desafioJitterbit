const swaggerJsdoc = require("swagger-jsdoc")

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Order API",
      version: "1.0.0",
      description: "API para gerenciamento de pedidos"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ],
    components: {
        schemas: {

            Item: {
            type: "object",
            properties: {
                idItem: {
                type: "string",
                example: "1"
                },
                quantidadeItem: {
                type: "number",
                example: 2
                },
                valorItem: {
                type: "number",
                example: 500
                }
            }
            },

            Order: {
            type: "object",
            properties: {
                numeroPedido: {
                type: "string",
                example: "12345"
                },
                valorTotal: {
                type: "number",
                example: 1500
                },
                dataCriacao: {
                type: "string",
                example: "2026-03-08"
                },
                items: {
                type: "array",
                items: {
                    $ref: "#/components/schemas/Item"
                }
            }
          }
        }
      }
    }
  },
  apis: ["./src/routes/*.js"]
}

const specs = swaggerJsdoc(options)

module.exports = specs