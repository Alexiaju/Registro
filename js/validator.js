const formulario = document.getElementById(formulario);

formulario.addEventListener(
    "submit",function(event){
        event.preventDefault();
    
        const nombre = document.getElementById("name").value.trim(); 
        const edad = document.getElementById("age").value.trim();
    const email = document.getElementById("email").value.trim();
const telefono = document.getElementById("phone").value.trim();

//elementos de error
const errorNombre = document.getElementById("errorAge");
const errorAge = document.getElementById("errorAge");
const errorEmail = document.getElementById("errorEmail");
const errorPhone = document.getElementById("errorPhone");

const mensaje = document.getElementById("message");

//tecnica de centinela
let valido = true;
if(nombre === ""){
    errorName.textContent = "El nombre es obligatorio."
    valido = false;
}else{
    errorName.textcontent = "";
}
let valido = true;
if(email === ""){
    errorEmail.textContent = "El correo electronico es obligatorio."
    valido = false;
}else{
    errorEmail.textContent = "";
}
let valido = true;
if(phone === ""){
    errorPhone.textContent = "El telefono es obligatorio."
    valido = false;
}else{
    errorPhone.textContent = "";
}
if (valido){
    mensaje.textContent = "registro correcto";
}else{
    mensaje.textContent = "";
}

}

);