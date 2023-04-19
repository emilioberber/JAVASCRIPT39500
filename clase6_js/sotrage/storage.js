// Storage:

// Nos permite guardar datos de manera local en el navegador, generar persistencia de datos.
// El navegador nos va a ofrecer dos formas diferentes de guardar datos en el storage:
// 1) localStorage: almacena los datos de forma INDEFINIDA hasta que el usuario los borre de forma manual.
// 2) sessionStorage: almacena los datos hasta que el usuario cierre el navegador.

// 1) localStorage:
// Para guardar datos en el local tenemos que usar un método que se llama: setItem()
// Esto lo hacemos llamando a un objeto global llamado localStorage
//setItem(): va a recibir DOS parámetros: el nombre de la clave y el valor que va a guardar esa clave

// EJEMPLO A: STRING
localStorage.setItem("Saludo", "Hola Mundo");

// EJEMPLO B: INT
localStorage.setItem("Número", 1234);

// EJEMPLO C: BOOL
localStorage.setItem("Boolean", false);

// Para recuperar los datos almacenados, utilizamos el método getItem() en una variable y se pone el nombre de la clave para obtener el valor.
let saludo = localStorage.getItem("Saludo");
console.log(saludo);

// Recuperar el número:
let numero = localStorage.getItem("Número");
console.log(numero);

// 2) sessionStorage:
// Funcionamiento similar a localstorage
// Guardamos datos con el método setItem()

// Ejemplo: almacenar un saludo en sessionStorage 

sessionStorage.setItem("Saludos a Francia", "3333333");

let saludosF = sessionStorage.getItem("Saludos a Francia");
console.log(saludosF);

// Eliminamos datos del sotorage:
// Para eliminar datos del localstorage, utilizamos el método: removeItem()

localStorage.removeItem("Saludo");

// Recorremos con un bucle localStorage:
// Utilizamos el método key() que nos devuelve un array con las claves del storage

for(let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    console.log(clave, valor);
}

// Almacenar objetos en el storage
// tener en cuenta que todo lo que se almacena en storage se hace en formato de string.
// si queremos almacenar un objeto, tenemos que pasarlo a string

// JSON:
// Javascript Object Notation. Es un formato de texto ligero para el intercambio de datos
// JSON es un string con un formato especial

// EJEMPLO:
// Creamos un objeto para pasarlo  JSON:
const luciana = {
    nombre: "Luciana",
    apellido: "Garro",
    edad: 30
};
// Utilizamos el método de JSON: stringify() (CONVIERTE texto a JSON: "nombre", Luciana --> clave, valor)
const lucianaJson = JSON.stringify(luciana);
console.log(lucianaJson);

// Almacenarlo en localStorage
localStorage.setItem("luciana", lucianaJson);

// Si quiero recuperar un JSON del localStorage y convertirlo a objeto nuevamente tengo que utilizar un método de JSON: JSON.parse()

const personaJson = localStorage.getItem("luciana"); // HASTA AQUÍ recupera la info pero en formato JSON, no en objeto!
// RECUPERARLO en formato OBJETO:
const persona = JSON.parse(personaJson);
console.log(persona);

// Recordemos:
// document es el objeto qe representa al documento HTML
// body es el elemento que representa al body del documento HTML
// classlist es una propiedad que nos devuelve una lista de las clases del elemento
// toggle: método que nos permite agregar o eliminar una clase del elemento

// Ejemplo utilizando lo que es localStorage para cambiar el modo dark o light (USANDO: EVENTOS, NODOS Y STORAGE)

// 1) Crear un botón para cambiar el modo de la página
// 2) almacenar el modo en el localStorage
// 3) al recargar la página, recuperar el moddo del localStorage
// 4) cambiar el modo de la página

const botonDark = document.getElementById("botonFondo");

botonDark.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo", "dark");
    }else{
        localStorage.setItem("modo", "ligth");
    }
})

// recuperamos el modo del localSotrage:

const modo = localStorage.getItem("modo");
if(modo === "dark"){
    document.body.classList.add("dark");
}else{
    document.body.classList.remove("dark");
}