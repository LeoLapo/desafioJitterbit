const express = require("express")
const jwt = require("jsonwebtoken")

const router = express.Router()

const SECRET = "meuSegredoSuperSeguro"

router.post("/login", (req, res) => {

  const { username, password } = req.body

  if (username === "admin" && password === "1234") {

    const token = jwt.sign(
      { username },
      SECRET,
      { expiresIn: "1h" }
    )

    return res.json({ token })
  }

  res.status(401).json({ error: "Credenciais inválidas" })

})

module.exports = router