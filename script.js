// document.getElementById("enviarDatos").addEventListener("click", function validar() {
//     var nombre = document.getElementById("nombre");
//     var apellidos = document.getElementById("apellidos");
//     var correo = document.getElementById("correo");
//     var usuario = document.getElementById("usuario");
//     var clave = document.getElementById("pass");
//     var telefono = document.getElementById("telefono");


//     if (nombre.value.trim() === "" ||
//         apellidos.value.trim() === "" ||
//         correo.value.trim() === "" ||
//         usuario.value.trim() === "" ||
//         clave.value.trim() === "" ||
//         telefono.value.trim() === ""
//     ) {
//         alert("Todos los campos son obligatorios");
//         return false;
//     } else if (nombre.value.length > 30) {
//         alert("El nombre es muy largo (Máximo 30 caracteres)");
//         return false;
//     } else if (apellidos.value.length > 80) {
//         alert("Los apellidos son demasiado largos (Máximo 80 caracteres)");
//         return false;
//     } else if (correo.value.length > 100) {
//         alert("El correo electrónico es ridículamente largo");
//         return false;
//     } else if (usuario.value.length > 20) {
//         alert("El Nombre de usuario es muy largo, máximo 20 caracteres");
//         return false;
//     } else if (telefono.value.length > 15) {
//         alert("Teléfono demasiado largo, máximo 15 caracteres");
//         return false;
//     } else if (isNaN(telefono.value)) {
//         alert("El campo teléfono sólo debe ser rellenado con números")
//         return false;
//     } else {
//         alert("Genial " + nombre.value + " " + apellidos.value + "!, sus datos han sido ingresados correctamente.")
//     }
// })

function validar() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("pass").value;
    var telefono = document.getElementById("telefono").value;

    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || clave === "" || telefono === "") {
        alert("Todos los campos son obligatorios");
        return false;
    } else if (nombre.length > 30) {
        alert("El nombre es demasiado largo. (Max= 30 caracteres)");
        return false;
    } else if (apellidos.length > 80) {
        alert("Los apellidos son demasiado largos (Máximo 80 caracteres)");
        return false;
    } else if (correo.length > 100) {
        alert("El correo electrónico es ridículamente largo");
        return false;
    }
    else if (usuario.length > 20) {
        alert("El Nombre de usuario es muy largo, máximo 20 caracteres");
        return false;
    } else if (telefono.length > 15) {
        alert("Teléfono demasiado largo, máximo 15 caracteres");
        return false;
    } else if (isNaN(telefono)) {
        alert("El campo teléfono sólo debe ser rellenado con números")
        return false;
    } else {
        alert("Genial " + nombre + " " + apellidos + "!, sus datos han sido ingresados correctamente.")
    }
}