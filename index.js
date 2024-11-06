// DEPENDENCIA

const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const router = require('./routes/index.js')
const album = require('./models/index.js')
const user = require('./models/index.js')

const url = process.env.DATABASE_URL
const PORT = process.env.PORT

const app = express()

app.use(express.json())

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router) 

const connectToMongo = async () => {

  try{

    await mongoose.connect(url)

   //FUNCION PARA LEVANTAR EL SERVIDOR

   app.listen(PORT, () => {
   console.log('Servidor escuchando en puerto 5000')
   })

  }catch(error){
    console.log(error)
  }
}

connectToMongo()


