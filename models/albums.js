// ALBUMN MODEL

const mongoose = require('mongoose')

// Título
// Descripción
// Año en qué salió a la venta
// Canciones, cada una de las cuales a su vez tendrá título y duración.
// Portada: será una URL , correspondiente a la imagen de la portada del album.

const albums = new mongoose.Schema({
    titulo:{type:String,
            required: [true, 'El titulo es requerido'],
            lowercase: true,
            trim: true
    },
    descripcion:{type:String,
        required: [true, 'La descripción es requerida'],
        minLength: 5,
        maxLength: 200,
        lowercase: true,
        trim: true
    },
    año:{type:Number,
        required: [true, 'El año es requerido'],
        min: 1,
    },
    canciones: [{titulo:{type:String}, duracion:{type:String}}],
    portada:{type:String},
})

module.exports = mongoose.model('albums', albums)