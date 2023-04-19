// DOM (MODELOS DE OBJETOS DEL DOCUMENTOS)
// ETIQUETAS HTML = NODOS

// PLANTILLAS LITERALES:

// ANTES:
let cliente = "Ricky Fort";
let montoCompra = "100000000";

let mensaje = cliente + " realizó una compra por $$ " + montoCompra;


console.log(mensaje);

// PLANTILLAS LITERALES: backsticks ``(alt+96)

// voy a poder concater datos y mostrar valores almacenados en las variables

let mensajePlantilla = `El cliente ${cliente} realizó una compra por un valor de ${montoCompra} de dolares`;
console.log(mensajePlantilla)

// ¿Qué es DOM? DOCUMENT OBJECT MODEL = MODELOS DE OBJETOS DEL DOCUMENTO

// El DOM es una estructura de objetos generada por el navegador la cual representa la página HTML actual.
// Lo que va a hacer DOM es transformarme el HTML en objetos.
// Cada etiqueta HTML se va a transformar para el DOM en un NODO, que contiene las mismas propiedades de un objeto en JS.
// Esto me permite trabajar desde el lado del lenguaje de programación, accediendo a la estructura HTML.
// Vamos a poder acceder a esa estructura y modificarla DE MANERA DINÁMICA.


// ¿Cómo funciona?
// En el modelo de objetos del documento, cada etiqueta representa un NODO.
// Estos NODOS SON ACCESIBLES por medio de JS através del objeto global "document"

// Escribir los id en html en camelCase

// PASOS:
// 1) ACCEDEMOS AL DOM

// A) POR MEDIO DEL ID!!!!!!!, CREAMOS UNA VARIABLE EN JS Y LO VINCULAMOS A LA ETIQUETA H1

// const nombreX = document.getElementById("nombre_id"); NOTA=document --> palabra reservada
/* const tituloPrincipal = document.getElementById("tituloPrincipal");
console.log(tituloPrincipal); */

// B) POR MEDIO DE LAS CLASS!!!!! ACCEDO A LA ETIQUETA P

const nombres = document.getElementsByClassName("nombre");
console.log(nombres);

// C) POR MEDIO DE LA ETIQUETA TAG!!!!!

const animales = document.getElementsByTagName("li");
console.log(animales);

// D) QUERYSELECTOR: ES UN METODO QUE NOS PERMITE SELECCIONAR NODOS CON LA MISMA SINTAXIS QUE EN CSS
// Solo me trae el PRIMER nodo de esa característica que encuentre
// class "."
// id "#"
// tag solo

const queryNombres = document.querySelector(".nombre")
console.log(queryNombres);

// E) querySelectorAll: me trae todos los nodos no solo el primero como querySelector

const queryNombreAll = document.querySelectorAll(".nombre")
console.log(queryNombreAll);

// Modificar NODOS!!

// innerText: me permite acceder al contenido textual de algún elemento del DOM
// y si quiero modificarlo de manera dinámica. Nombre de clase o id

tituloPrincipal.innerText = "Modificamos el titulo desde main.js";

// innerHTML: me permite agregar código html en el interior de un nodo.
/* const divContenedor = document.getElementById("divContenedor");

divContenedor.innerHTML = `<p> Esto es un párrafo </p>`; */

divContenedor.innerHTML = ` <div>
                                <p>Nombre</p>
                                <p>Precio</p>
                                <button>Agregar al carrito</button>
                            </div>`;


tituloPrincipal.className = "titulo";

// Agregar NODOS:

const contenedor = document.getElementById("contenedor");

const parrafo = document.createElement("p");
parrafo.innerText = "Creamos un parrafo";
parrafo.className = "titulo";

contenedor.appendChild(parrafo);


// Eliminar NODOS:
// remove(): eliminar el método seleccionado

parrafo.remove();

// EJEMPLO INTEGRADO
// Creamos objetos de forma dinámica

class Producto{
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const yerba = new Producto("Yerba", 250);
const harina = new Producto("Harina", 300);
const azucar = new Producto("Azucar", 300);

const arrayProductos = [yerba, harina, azucar];

const contenedorProductos = document.getElementById("contenedorProductos");

arrayProductos.forEach(producto => {
    const div = document.createElement("div");
    div.innerHTML = `<p> Nombre del producto: ${producto.nombre} </p>
                    <p> Precio del producto: ${producto.precio}</p>
                    <button>AGREGAR AL CARRITO</button>`;
                    contenedorProductos.appendChild(div)
})
