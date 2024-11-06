// USER MODEL

const mongoose = require('mongoose')

// Nombre
// Apellido
// Email
// Contraseña
// Favoritos

const Users = new mongoose.Schema({
    nombre:{type:String, 
            required: true,  //CAMPO OBLIGATORIO
            minLength: 2, //MINIMO DOS CARACTERES
            lowercase: true,
            trim: true}, //ELIMINA LOS ESPACIOS DEL INICO Y EL FINAL
    apellido:{type:String,
              required: true,
              minLength: 2,
              lowercase: true,
              trim: true},
    email:{type:String, 
           required: true, 
           validate: {
               validator: function(v) {
                   return regex.test(v);
                 },
            message:  ' Debes ingresar un email valido!'
             },
    },
    usuario:{type:String,
        required: true,  
        unique: true,    // El nombre de usuario debe ser único
        trim: true,
    },
    contraseña:{type:String, 
                required: true,
                minLength: 2,
                lowercase: true,
                trim: true},
    favoritos:{type:String},
})

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

module.exports = mongoose.model('Users', Users)