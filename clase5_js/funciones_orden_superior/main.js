// Repaso de funciones de orden superior

// Es una función que puede recibir por párametro una función o retornar otra función

// Sintaxis
/* function estoEsUnaFuncion(funcion()){ //1)
    //return funcion()
} */

// Las vamos a utilizar en los arrays

// Hay métodos de busqueda y transformación para operar sobre los arrays

class Producto{
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const fideos = new Producto("Fideos", 300);
const harina = new Producto("Harina", 400);
const gaseosa = new Producto("Gaeosa", 750);
const pan = new Producto("Pan", 1500);

const arrayProductos = [fideos, harina, gaseosa, pan];
console.log("productos en stock: ")
console.log(arrayProductos);

// 1) forEach: recorre el array y ejecuta una función por cada elemento del array. Esta es una función de OS nativa del lenguaje (js)

arrayProductos.forEach((producto1) => {
    console.log(producto1);
})

// Mostrar solo un elemnto forEach, por ejemplo solo el precio:

arrayProductos.forEach(producto => console.log(producto.precio));

// 2) find: Método de busqueda que busca un elemento del array y retorna el primer elemento que cumpla con una condición

const buscado = arrayProductos.find(producto => producto.nombre === "Pan");
console.log(buscado);

// 3) filter: Método de busqueda que recibe una función comparadora por parámetro y retorna un
// nuevo array con los elementos que cumplan con la condición

const arrayPorudctosMenor500 = arrayProductos.filter(producto => producto.precio < 500)
console.log(arrayPorudctosMenor500);
console.log(arrayProductos);

// 4) some: funciona igual que filter con la diferencia que retorna un bool si encuentra
// o no el elemento 

const hayFideos = arrayProductos.some(producto => producto.nombre === "Fideos");
console.log(hayFideos);

// 5) map: me permite crear un nuevo array con todos los elementos del array original
// pero transformados

// Ejemplo de precios con IVA, modificar el precio *1.21

const arrayConIva = arrayProductos.map(producto => {
    return {
        nombre: producto.nombre,
        precio: (producto.precio*1.21)
    }
})

console.log(arrayConIva);

// mostrar solo, no modifico nada
const arrayNombres = arrayProductos.map(producto => producto.nombre);
console.log(arrayNombres);

// Reduce: nos permite obtener un único valor después de iterar sobre un array
// podemos trabajar con dos parámetros: un ACUMULADOR y un elemento a operar
// también debemos colocar el valor inicial del acumulador
// en este ejemplo elemento = Producto
let totalPrecio = arrayProductos.reduce((acumulador, elemento) =>
acumulador + elemento.precio, 0);

console.log(totalPrecio);
