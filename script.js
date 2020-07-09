function validar() {
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var usuario = document.getElementById("usuario");
    var clave = document.getElementById("pass");
    var telefono = document.getElementById("telefono");

    if (nombre.value.trim() === "" ||
        apellidos.value.trim() === "" ||
        correo.value.trim() === "" ||
        usuario.value.trim() === "" ||
        clave.value.trim() === "" ||
        telefono.value.trim() === ""
    ) {
        alert("Todos los campos son obligatorios");
        return false;
    } else if (nombre.value.lenght > 30) {
        alert("El nombre es muy largo (Máximo 30 caracteres)");
        return false;
    } else if (apellidos.value.lenght > 80) {
        alert("Los apellidos son demasiado largos (Máximo 80 caracteres)");
        return false;
    } else if (correo.value.lenght > 100) {
        alert("El correo electrónico es ridículamente largo");
        return false;
    } else if (usuario.value.lenght > 20) {
        alert("El Nombre de usuario es muy largo, máximo 20 caracteres");
        return false;
    } else if (telefono.value.lenght > 15) {
        alert("Teléfono demasiado largo, máximo 15 caracteres");
        return false;
    } else if (isNaN(telefono.value)) {
        alert("El campo teléfono sólo debe ser rellenado con números")
        return false;   
    } else  {
        alert("Genial " + nombre.value + " " + apellidos.value + "!, sus datos han sido ingresados correctamente.")
    }
}