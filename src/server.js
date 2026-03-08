// importando a rota de autenticação
const authRoutes = require("./routes/authRoutes")

// arquivo principal do servidor
const express = require("express")
const orderRoutes = require("./routes/orderRoutes")

// importando o swagger para documentação da API
const swaggerUi = require("swagger-ui-express")
const swaggerSpec = require("./docs/swagger")

// criando a aplicação express
const app = express()


app.use(express.json())

app.use("/auth", authRoutes)

app.use("/order", orderRoutes)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))


// definindo a porta do servidor
const PORT = 3000

// iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})