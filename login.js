
// Constantes y variables

const usuario = "vio.ayelen@gmail.com";
const pass= "1234";

const emailUsuario = document.getElementById("mail");
const passUsuario = document.getElementById("pass");

const ingresar = document.getElementById("ingresar");

ingresar.addEventListener("click", function() {
    validacion();
})

function validacion(){
    if (emailUsuario.value === usuario && passUsuario.value == pass) {
        console.log("correcto") 
        window.location="./index.html";
    } else {
        console.log("incorrecto")
        alert("El mail o la contraseña ingresados son incorrectos")
    }
}

