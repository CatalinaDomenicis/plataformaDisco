const express = require('express')

// INSTANCIA PARA MANEJAR RUTAS

const router = express.Router()

// RUTAS

router.get("/", (req, res) => {
    res.status(200).send("Bienvenidos")
})  

module.exports = router