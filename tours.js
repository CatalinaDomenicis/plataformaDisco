//NOMBRE Y SALUDO PERSONALIZADO

let nombre = prompt("¿Cuál es tu nombre?").toLowerCase ();

while(nombre.length < 3) {
    nombre = prompt("Demasiado corto, cuál es realmente tu nombre?").toLowerCase ();
}

const span = document.querySelector("#welcome")
span.textContent = "¡Bienvenid@ " + nombre + "!";

//EDAD

let edad = parseInt(prompt("¿Cuál es tu edad " + nombre + " ?"))
if( !edad ){
    alert("No ingresaste tu edad")
    edad = prompt("¿Cuál es tu edad?")
}

//MENSAJE PARA EL USUARIO

alert("Bienvenido " + nombre + " de " + edad + " años, te interesaría conocer las próximas fechas de los shows?") 
