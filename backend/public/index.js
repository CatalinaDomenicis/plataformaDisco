/* // BOTONES CORAZON 

 const button = document.querySelectorAll("#boton") // ID <div>

button.forEach(button => {
    const botones = document.querySelector(".btn"); // class <button>

    button.addEventListener('click',()=>{
        botones.classList.toggle('text-red-500') // Cambia el color a rojo
        botones.classList.toggle('text-black') // Cambia el color a negro
    })
    
});

const button2 = document.querySelectorAll("#boton2")

button2.forEach(button2 => {
    const botones = document.querySelector(".btn2");

    button2.addEventListener('click',()=>{
        botones.classList.toggle('text-red-500')
        botones.classList.toggle('text-black')
    })
    
});

const button3 = document.querySelectorAll("#boton3")

button3.forEach(button3 => {
    const botones = document.querySelector(".btn3");

    button3.addEventListener('click',()=>{
        botones.classList.toggle('text-red-500')
        botones.classList.toggle('text-black')
    })
    
});

const button4 = document.querySelectorAll("#boton4")

button4.forEach(button4 => {
    const botones = document.querySelector(".btn4");

    button4.addEventListener('click',()=>{
        botones.classList.toggle('text-red-500')
        botones.classList.toggle('text-black')
    })
    
}); 
 */
/* const buscar = document.querySelector('button')
const div = document.getElementById('albumes')
buscar.addEventListener('click', getAlbums)
const input = document.getElementById('text') 
const span = document.querySelector('span')
const span2 = document.getElementById('span2') 

// BUSCAR ALBUM

 async function getAlbums (){
    
    try {
       const response = await axios.get('http://localhost:5000/band/band/' + text.value)
       console.log(response.data)

        div.textContent = response.data[0].titulo  
        span.textContent = response.data[0].descripcion
        span2.textContent = response.data[0].año

    } catch (error) {
        console.log(error)

    }
}  
 */
/* getAlbums() */  