// DEPENDENCIA

const express = require('express')
const app = express()

const router = require('./routes/index')

app.use(express.json())

app.use("/", router) 

//FUNCION PARA LEVANTAR EL SERVIDOR

app.listen(5000, () => {
  console.log('Servidor escuchando en puerto 5000')
})