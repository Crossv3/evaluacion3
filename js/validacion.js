function validar() {
    var retorno_nombre = validar_nombre();
    var retorno_comuna = validar_comuna();
    var retorno_contra = validar_contra();
    var retorno_contra2 = validar_contra2();
    var retorno_telefono = validar_telefono();
    var retorno_direccion = validar_direccion();
    var retorno_URL = validar_URL();
    var retorno_pasatiempo = validar_pasatiempo();

    return retorno_nombre && retorno_comuna && retorno_contra && retorno_contra2
        && retorno_telefono && retorno_URL && retorno_direccion && retorno_pasatiempo;
}

function agregarPasatiempo() {
    var inputPasatiempo = document.getElementById("input-pasatiempo");
    var listaPasatiempos = document.getElementById("lista-pasatiempos");
    var errorPasatiempo = document.getElementById("error-pasatiempo");

    if (inputPasatiempo.value.trim() === "") {
        errorPasatiempo.innerHTML = "El pasatiempo no puede estar vacío";
        return;
    }

    var nuevoPasatiempo = document.createElement("li");
    nuevoPasatiempo.className = "list-group-item";
    nuevoPasatiempo.textContent = inputPasatiempo.value.trim();
    listaPasatiempos.appendChild(nuevoPasatiempo);

    inputPasatiempo.value = "";
    errorPasatiempo.innerHTML = "";
}

function validar_pasatiempo() {
    var listaPasatiempos = document.getElementById("lista-pasatiempos");
    var div_error_pasatiempo = document.getElementById("error-pasatiempo");
    if (listaPasatiempos.children.length < 2) {
        div_error_pasatiempo.innerHTML = "Ingrese al menos 2 pasatiempos";
        return false;
    }
    div_error_pasatiempo.innerHTML = '';
    return true;
}

function validar_URL() {
    var url = document.getElementById("input-url").value;
    var div_error_url = document.getElementById("error-url");
    var valido = url.startsWith("www.") && url.includes(".") && url.length > 4;
    if (valido) {
        div_error_url.innerHTML = "";
        return true;
    } else {
        div_error_url.innerHTML = "El URL debe empezar con 'www.' y contener un dominio (Ejemplo: www.google.com)";
        return false;
    }
}

function validar_telefono() {
    var input_fono = document.getElementById("input-fono");
    var div_error_fono = document.getElementById("error-fono");
    var fono = input_fono.value;
    var valor_num = fono.slice(1);

    if (fono === "") {
        div_error_fono.innerHTML = "El teléfono es obligatorio";
        return false;
    } else if (fono.length > 15) {
        div_error_fono.innerHTML = "El teléfono no puede tener más de 15 caracteres";
        return false;
    } else if (fono[0] !== "+") {
        div_error_fono.innerHTML = "El teléfono debe comenzar con un +";
        return false;
    } else if (!isNaN(valor_num)) {
        div_error_fono.innerHTML = "";
        return true;
    } else {
        div_error_fono.innerHTML = "El número de teléfono solo debe contener números";
        return false;
    }
}

function validar_direccion() {
    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;
    if (direccion === "") {
        div_error_direccion.innerHTML = "La dirección es obligatoria";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}

function validar_contra() {
    var input_pass = document.getElementById("input-pass");
    var pass = input_pass.value;
    var div_error_pass = document.getElementById("error-pass");
    var letras = false;
    var numeros = false;
    var input_nombre = document.getElementById("input-nombre");
    var nombre = input_nombre.value;

    for (var i = 0; i < pass.length; i++) {
        if (parseInt(pass[i])) {
            numeros = true;
        } else if (typeof pass[i] === "string") {
            letras = true;
        }
    }

    if (pass === "") {
        div_error_pass.innerHTML = "La contraseña es obligatoria";
        return false;
    } else if (pass.length < 3 || pass.length > 6) {
        div_error_pass.innerHTML = "La contraseña debe tener entre 3 y 6 caracteres";
        return false;
    } else if (!letras) {
        div_error_pass.innerHTML = "La contraseña necesita al menos una letra";
        return false;
    } else if (!numeros) {
        div_error_pass.innerHTML = "La contraseña necesita al menos un número";
        return false;
    } else if (pass.includes(nombre)) {
        div_error_pass.innerHTML = "La contraseña no puede contener el nombre de usuario";
        return false;
    } else {
        div_error_pass.innerHTML = "";
        return true;
    }
}

function validar_contra2() {
    var input_pass = document.getElementById("input-pass");
    var pass = input_pass.value;
    var input_pass2 = document.getElementById("input-pass2");
    var pass2 = input_pass2.value;
    var div_error_pass2 = document.getElementById("error-pass2");

    if (pass2 === "") {
        div_error_pass2.innerHTML = "La confirmación de contraseña es obligatoria";
        return false;
    } else if (pass2 !== pass) {
        div_error_pass2.innerHTML = "La contraseña no coincide";
        return false;
    } else {
        div_error_pass2.innerHTML = "";
        return true;
    }
}

function validar_comuna() {
    var select_comuna = document.getElementById("select-comuna");
    var div_error_comuna = document.getElementById("error-comuna");
    var comuna = select_comuna.value;
    if (comuna === "default") {
        div_error_comuna.innerHTML = "Debe seleccionar una comuna";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}

function validar_nombre() {
    var input_nombre = document.getElementById("input-nombre");
    var div_error_nombre = document.getElementById("error-nombre");
    var nombre = input_nombre.value;
    var letras = /^[A-Za-z]+$/;
    var numeros = /^[0-9]+$/;

    if (nombre === "") {
        div_error_nombre.innerHTML = "El nombre de usuario es obligatorio";
        return false;
    } else if (nombre.length < 5 || nombre.length > 10) {
        div_error_nombre.innerHTML = "El nombre de usuario debe tener entre 5 y 10 caracteres";
        return false;
    } else if (!letras.test(nombre[0])) {
        div_error_nombre.innerHTML = "El nombre de usuario debe comenzar con una letra";
        return false;
    } else if (nombre.match(/[^A-Za-z0-9]/)) {
        div_error_nombre.innerHTML = "El nombre de usuario no puede tener caracteres especiales";
        return false;
    } else if (!nombre.match(/[0-9]$/)) {
        div_error_nombre.innerHTML = "El nombre de usuario debe terminar con un número";
        return false;
    } else {
        div_error_nombre.innerHTML = "";
        return true;
    }
}
