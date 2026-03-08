# 📦 Order API

API REST para gerenciamento de pedidos e itens, desenvolvida com **Node.js**, **Express**, **Prisma ORM** e **PostgreSQL**, utilizando **JWT para autenticação** e **Swagger para documentação da API**.

O sistema permite criar, consultar, atualizar e remover pedidos, além de gerenciar os itens associados a cada pedido.

---

# 🚀 Tecnologias utilizadas

- Node.js
- Express
- PostgreSQL
- Prisma ORM
- JWT (JSON Web Token)
- Swagger (Documentação da API)

---

# 🏗 Arquitetura da Aplicação

O projeto segue uma **arquitetura em camadas**, separando responsabilidades para facilitar manutenção, organização e escalabilidade.

As camadas são organizadas da seguinte forma:

- **Routes** → Define os endpoints da API
- **Controllers** → Recebem e tratam as requisições HTTP
- **Services** → Contêm a lógica de negócio da aplicação
- **Prisma ORM** → Responsável pela comunicação com o banco de dados
- **Middlewares** → Tratam autenticação e validações intermediárias

Fluxo da aplicação:

Client → Middleware → Routes → Controllers → Services → Prisma → Database

---

# 📊 Diagrama da Arquitetura

```mermaid
flowchart TD

Client[Client / API Consumer]

Middleware[JWT Authentication Middleware]

Routes[Routes Layer<br>Express Routes]

Controllers[Controllers Layer<br>Request Handling]

Services[Services Layer<br>Business Logic]

Prisma[Prisma ORM]

Database[(PostgreSQL Database)]

Client --> Middleware
Middleware --> Routes
Routes --> Controllers
Controllers --> Services
Services --> Prisma
Prisma --> Database
```

---

# 📁 Estrutura do projeto

```
src
 ├── controllers
 ├── services
 ├── routes
 ├── middlewares
 ├── database
 └── docs
```

A aplicação segue o padrão:

**Routes → Controller → Service → Database**

---

# ⚙️ Como rodar o projeto

## 1️⃣ Clonar o repositório

```
git clone https://github.com/seu-usuario/order-api.git
```

Entrar na pasta do projeto:

```
cd order-api
```

---

## 2️⃣ Instalar dependências

```
npm install
```

---

## 3️⃣ Configurar variáveis de ambiente

Criar um arquivo `.env` na raiz do projeto.

Exemplo:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/orderdb"
JWT_SECRET="secret"
PORT=3000
```

---

# 🗄 Configuração do Banco de Dados

O projeto utiliza **PostgreSQL rodando localmente**.

Antes de iniciar a aplicação, é necessário criar um banco de dados chamado:

```
orderdb
```

Exemplo utilizando psql:

```
CREATE DATABASE orderdb;
```

---

## Rodar as migrations do Prisma

Para criar automaticamente as tabelas no banco de dados execute:

```
npx prisma migrate dev
```

Isso criará as tabelas necessárias para o funcionamento da aplicação.

---

# ▶️ Iniciar o servidor

```
npm run dev
```

ou

```
node src/server.js
```

Servidor rodando em:

```
http://localhost:3000
```

---

# 📘 Documentação da API

A documentação interativa da API pode ser acessada em:

```
http://localhost:3000/api-docs
```

---

# 🔐 Autenticação

A API utiliza **JWT (JSON Web Token)** para proteger as rotas.

Antes de acessar os endpoints de pedidos é necessário obter um token.

### Login

```
POST /auth/login
```

Body:

```json
{
  "username": "admin",
  "password": "admin123"
}
```

Resposta:

```json
{
  "token": "SEU_TOKEN"
}
```

Após obter o token, ele deve ser enviado no header das requisições:

```
Authorization: Bearer SEU_TOKEN
```

---

# 📌 Endpoints da API

## Criar pedido

```
POST /order
```

Body:

```json
{
  "numeroPedido": "1001",
  "valorTotal": 2300,
  "dataCriacao": "2026-03-08",
  "items": [
    {
      "idItem": 1,
      "quantidadeItem": 1,
      "valorItem": 1200
    }
  ]
}
```

---

## Listar pedidos

```
GET /order/list
```

---

## Buscar pedido por ID

```
GET /order/{id}
```

---

## Atualizar pedido

```
PUT /order/{id}
```

Body:

```json
{
  "valorTotal": 3000,
  "dataCriacao": "2026-03-09"
}
```

---

## Deletar pedido

```
DELETE /order/{id}
```

---

# 🧪 Testando a API

1. Realizar login em `/auth/login`
2. Copiar o token retornado
3. Adicionar o token no header das requisições
4. Utilizar os endpoints disponíveis para manipular os pedidos

---

# 📌 Observações para avaliação

Para executar o projeto corretamente é necessário:

- Ter **Node.js instalado**
- Ter **PostgreSQL instalado**
- Criar o banco de dados `orderdb`
- Configurar a variável `DATABASE_URL`
- Executar as migrations do Prisma

Após isso, a aplicação poderá ser executada normalmente.

---

# 👨‍💻 Autor

**Leonardo Fernandes**

Projeto desenvolvido como teste técnico para vaga de desenvolvedor backend.
