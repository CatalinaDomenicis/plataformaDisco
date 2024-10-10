// BOTONES CORAZON 

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
