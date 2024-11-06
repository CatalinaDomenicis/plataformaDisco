// DEPENDENCIA

const express = require('express')
const mongoose = require('mongoose')

const router = require('./routes/index.js')
const album = require('./models/index.js')
const user = require('./models/index.js')

const url = 'mongodb+srv://catalinadedomenicis:MNFIi4zdHVXRc2xk@proyectoplataformadisco.h5vxr.mongodb.net/?retryWrites=true&w=majority&appName=ProyectoPlataformaDisco'

const app = express()

app.use(express.json())

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router) 

const connectToMongo = async () => {

  try{

    await mongoose.connect(url)

   //FUNCION PARA LEVANTAR EL SERVIDOR

   app.listen(5000, () => {
   console.log('Servidor escuchando en puerto 5000')
   })

  }catch(error){
    console.log(error)
  }
}

connectToMongo()


