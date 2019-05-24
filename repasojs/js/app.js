// ------ EJEMPLO PROMISE --------

// Creamos la promesa con sus respectivos argumentos resolve / reject
const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => { // Pra simular una llamada asíncrona...
        let descuento = false;

        if (descuento) {
            resolve("Descuento aplicado");
        } else {
            reject("No se pudo aplicar el descuento");
        }
    }, 3000);
});

// Llamamos a la promesa con then() y usamos catch() por si se da un error
aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
});

// ------ EJEMPLO PROMISE --------

// ------ EJEMPLO PROMISE CON AJAX --------

const descargarUsuarios = id => new Promise((resolve, reject) => {
    // pasar el id a la api
    const api = `https://jsonplaceholder.typicode.com/todos/${id}`;

    // llamada a ajax
    const xhr = new XMLHttpRequest();

    // abrimos la conexion
    xhr.open('GET', api, true); // Param: GET/POST, URL, y síncrono/asíncrono

    // on load
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
        } else {
            reject(Error(xhr.statusText));
        }
    }

    // opcional (on error)
    xhr.onerror = (error) => reject(error);

    // enviar
    xhr.send();

});

descargarUsuarios(9).then(
    miembros => console.log(miembros),
    error => console.error(new Error(`Hubo un error ${error}`))
);

// ------ EJEMPLO PROMISE CON AJAX --------