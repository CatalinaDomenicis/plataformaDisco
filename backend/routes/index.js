// EXPRESS
const express = require('express')
// MODELS
const albums = require('../models/albums.js')
//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router()

const album = require('./albums.js')
const user = require('./user.js')

//router.use 
router.use('/band', album)
router.use('/user', user)

 module.exports = router
