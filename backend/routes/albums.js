const express = require('express')
const albums = require('../models/albums')

//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router()

const mongoose = require('mongoose'); 


// CREATE

// Título
// Descripción
// Año en qué salió a la venta
// Canciones, cada una de las cuales a su vez tendrá título y duración.
// Portada: será una URL , correspondiente a la imagen de la portada del album.


router.post('/band', async (req, res)=>{
  try {
     await albums.create(req.body)

      res.status(201).send("Album agregado correctamente")
    } catch (error) {

      console.log(error)

      res.status(500).send("Error al crear el album")
    }
})


// GET ALL ---> TRAER TODOS LOS DISCOS

router.get('/band', async (req, res)=>{
  try {
    const result = await albums.find()

    res.status(200).send(result)
  } catch (error) {
    res.status(404).send("No data")
  }
})

// GET x ID

router.get('/band/:id', async (req, res)=>{
  console.log("ID del álbum recibido:", req.params.id);
  try {
    const result = await albums.find({id: req.params.id})

    if (!result) {
      return res.status(404).send("Álbum no encontrado");
  }

    res.status(200).send(result)
  } catch (error) {
    res.status(404).send("No data")
  }
})

// UPDATE

router.put('/band/:id', async (req, res)=>{

  const { titulo, año, descripcion, portada } = req.body;
  const albumId = req.params.id;

  // Verifica que el id del álbum sea válido
  if (!mongoose.Types.ObjectId.isValid(albumId)) {
    return res.status(400).send("ID del álbum no válido");
  }

  try {

    const updatedAlbum = await albums.findByIdAndUpdate(req.params.id, { titulo, año, descripcion, portada }, { new: true });

    if (!updatedAlbum) {
      return res.status(404).send("Álbum no encontrado");
    }
        
    res.json(updatedAlbum);

   /*  res.status(200).send("Elemento actualizado correctamente") */
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la actualizacion")
  }
})

// DELETE 

router.delete('/band/:id', async (req, res)=>{
  try {
      const deletedAlbum = await albums.findByIdAndDelete(req.params.id);

      // Si el álbum no se encuentra, puedes devolver un error 404
      if (!deletedAlbum) {
        return res.status(404).send("Álbum no encontrado");
    }

    res.status(200).send("Elemento eliminado correctamente")
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error en la eliminacion")
  }
})
 
// Agregar una canción a un álbum
router.post('/:id/songs', async (req, res) => {
  const { titulo, duracion } = req.body;

  if (!titulo || !duracion) {
    return res.status(400).send('Los campos título y duración son obligatorios');
  }

  try {

    const album = await albums.findById(req.params.id);

   if (!album) {
      return res.status(404).send('Álbum no encontrado');
    }

    // Agregar la nueva canción al álbum
    album.canciones.push({ titulo, duracion });

    // Guardar el álbum actualizado
    await album.save();

    // Devolver el álbum actualizado
    res.json(album);

  } catch (err) {
    res.status(500).send(err);
  }
});

// Eliminar una canción de un álbum
router.delete('/:albumId/songs/:songId', async (req, res) => {

  try {
    const album = await albums.findById(req.params.albumId);
    // Busca la canción por título y duración si no usas el id de Mongo
    const songIndex = album.canciones.findIndex(song => song._id.toString() === req.params.songId);

    if (songIndex === -1) {
      return res.status(404).send('Canción no encontrada');
    }

    // Eliminar la canción
    album.canciones.splice(songIndex, 1);

    await album.save();
    res.json(album);

  } catch (err) {
    res.status(500).send(err);
  }
});



module.exports = router