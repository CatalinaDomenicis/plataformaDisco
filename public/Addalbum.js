let albums = [];  // Variable para almacenar los álbumes cargados desde el backend
let editingAlbumId = null;   // Variable para identificar qué álbum estamos editando

window.onload = loadAlbums;

// Cargar álbumes desde el backend

async function loadAlbums() {
    try {
        const response = await axios.get('http://plataformadisco-coxn.onrender.com/band/band');
        albums = response.data;
        displayAlbums();
    } catch (error) {
        console.error('Error al cargar los álbumes', error);
}}

// Mostrar los álbumes en el frontend

function displayAlbums() {
    const albumList = document.getElementById('album-list');
    albumList.innerHTML = ''; // Limpiar lista

    albums.forEach(album => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>
            <h3 class="text-4xl merriweather-bold tituloalbum ">${album.titulo}<h3><span>
             <br>
            <p class= "text-xl poppins-extralight añoalbum"> Año de Lanzamiento: ${album.año} <p>
            <br>
             <p class= "text-xl poppins-extralight cuadro"> Descripción: ${album.descripcion} <p>
             <br>
            <img class="img" src="${album.portada}" alt="Portada" style="width:100px;" >
            <br>
            <button class="btnalbum boton" onclick="editAlbum('${album._id}')">Editar</button>
            <button class="btn2 boton" onclick="deleteAlbum('${album._id}')">Eliminar</button>
            <button  class="btnalbum boton" onclick="showAddSongForm('${album._id}')">Agregar Canción</button>
            <ul>
            <h4 class="merriweather-bold text-2xl">Canciones:</h4>
            <br>
            ${album.canciones.map(song => `
          <li class= "text-xl poppins-extralight" >${song.titulo} - ${song.duracion} -
          <strong><button class="btn3 merriweather-bold" onclick="deleteSong('${album._id}', '${song._id}')">Eliminar</button><strong>
          </li>
        `).join('')}
      </ul>
        `;
        albumList.appendChild(listItem);
    });
}

// Crear un nuevo álbum

document.getElementById('album-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const titulo = document.getElementById('titulo').value;
    const año = document.getElementById('año').value;
    const descripcion = document.getElementById('descripcion').value;
    const portada = document.getElementById('portada').value;

    const albumData = { titulo, año, descripcion, portada };

    try {
        const response = await axios.post('http://plataformadisco-coxn.onrender.com/band/band', albumData);
        alert('Álbum creado exitosamente');

        document.getElementById('album-form').reset(); 

        loadAlbums();
    } catch (error) {
        console.error('Error al crear el álbum', error);
        alert('Error al crear el álbum');
    }
});

// Editar un álbum

function editAlbum(id) {
    const album = albums.find(album => album._id === id);
    if (album) {
        editingAlbumId = album._id;
        document.getElementById('edit-titulo').value = album.titulo;
        document.getElementById('edit-año').value = album.año;
        document.getElementById('edit-descripcion').value = album.descripcion;
        document.getElementById('edit-portada').value = album.portada;
        document.getElementById('edit-form').style.display = 'block';
    }
}

// Función para guardar los cambios de edición

document.getElementById('guardarcambios').addEventListener('click', async () => {
    const titulo = document.getElementById('edit-titulo').value;
    const año = document.getElementById('edit-año').value;
    const descripcion = document.getElementById('edit-descripcion').value;
    const portada = document.getElementById('edit-portada').value;

    const albumData = { titulo, año, descripcion, portada };

    try {
        const response = await axios.put(`http://plataformadisco-coxn.onrender.com/band/band/${editingAlbumId}`, albumData);
        alert('Álbum actualizado exitosamente');
        loadAlbums();  // Volver a cargar los álbumes
        cancelEdit();  // Ocultar formulario de edición

        console.log(response)
    } catch (error) {
        console.error('Error al actualizar el álbum', error);
        alert('Error al actualizar el álbum');
    }
});

// Función para cancelar la edición

document.getElementById('cancel-edit').addEventListener('click', cancelEdit);

function cancelEdit() {
    document.getElementById('edit-form').style.display = 'none';
    editingAlbumId = null;
}

// Función para eliminar un álbum

async function deleteAlbum(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este álbum?')) {
        try {
            await axios.delete(`http://plataformadisco-coxn.onrender.com/band/band/${id}`);
            alert('Álbum eliminado');
            loadAlbums();  // Volver a cargar los álbumes
        } catch (error) {
            console.error('Error al eliminar el álbum', error);
            alert('Error al eliminar el álbum');
        }
    }
}

// Mostrar el formulario de agregar canción

function showAddSongForm(albumId) {
    currentAlbumId = albumId;
    document.getElementById('addSongForm').style.display = 'block';
}

// Cancelar agregar canción

function cancelAddSong() {
    document.getElementById('addSongForm').style.display = 'none';
}

// Agregar una canción a un álbum

document.getElementById('addSongButton').addEventListener('click', async() => {
    const songName = document.getElementById('songName').value;
    const songDuration = document.getElementById('songDuration').value;

    axios.post(`http://plataformadisco-coxn.onrender.com/band/${currentAlbumId}/songs`, { titulo: songName, duracion: songDuration })
      .then(() => {
        loadAlbums(); // Volver a cargar los álbumes con la nueva canción
        cancelAddSong(); // Ocultar el formulario de agregar canción
      })
      .catch(error => console.error('Error al agregar la canción:', error));
});

// Eliminar una canción de un álbum

function deleteSong(albumId, songId) {
    axios.delete(`http://plataformadisco-coxn.onrender.com/band/${albumId}/songs/${songId}`)
      .then(() => {
        loadAlbums(); // Volver a cargar los álbumes después de eliminar la canción
      })
      .catch(error => console.error('Error al eliminar la canción:', error));
}


loadAlbums(); // Vuelve a cargar los álbumes con la nueva canción