//NOMBRE Y SALUDO PERSONALIZADO

let nombre = prompt("¿Cuál es tu nombre?").toLowerCase ();

while(nombre.length < 3) {
    nombre = prompt("Demasiado corto, cuál es realmente tu nombre?").toLowerCase ();
}

const span = document.querySelector("#welcome")
span.textContent = "¡Bienvenid@ " + nombre + "!";

//EDAD

function obtenerEdad(){
    let edad = parseInt(prompt("¿Cuál es tu edad?"));
    return edad
} 

// MENORES DE EDAD

function menorDeEdad (){
    swal("Acceso restringido", "¡Lo sentimos! No pueden comprar tickets menores de edad.", "warning");
}

// DESABILITAR BOTON MENORES

function deshabilitarMenores(){
    const botonComprar = document.querySelectorAll('button');

    botonComprar.forEach(boton => {boton.disabled = true;
        boton.style.color = "red"
    })
}

function verificar(){
    let edad = obtenerEdad();

    if(edad < 18){
        menorDeEdad();
        deshabilitarMenores()
    }
}

verificar()

//MENSAJE PARA EL USUARIO

alert("Bienvenido " + nombre + " de " + edad + " años, te interesaría conocer las próximas fechas de los shows?") 


//FUNCION GETTICKETS

function getTickets(tickets, lugarConcierto) {

    if (tickets) {
        swal("¡Felicitaciones!" , "Has conseguido entradas para el concierto en " + lugarConcierto, "success") 
        }

    else{
        swal( "Lo siento" , "No hay tickets disponibles para el concierto en " + lugarConcierto, "info")
    } 
}