// DATOS

function login(){
    let email = document.getElementById("email")
    let pass = document.getElementById("password")

    if( email.value.length === 0 || pass.value.length === 0 ){
        swal("UPS!", "Completa los campos para continuar!", "error"); 
        
    }else{
        console.log("Inicio de sesion exitoso!")
    }
}


// CONTRASEÑA

const parrafo = document.getElementById("warnings")
const form = document.getElementById("form")
const password = document.getElementById("password")


form.addEventListener('submit', e => {
    e.preventDefault()
    let warnings = ""
    if (password.value.length < 6) {
        warnings  += 'La contraseña es demasiado corta';
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    } 
});