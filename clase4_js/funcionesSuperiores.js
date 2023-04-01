// recurdividad -- función que se retorna así mismo (return)


/* const fibonaacci = (n) =>{
    if(n <= 1){
        return n
    };
    return fibonaacci(n-1) + fibonaacci(n-2)
} */

// Recibir funciones como  parámetro con el EJEMPLO DEL CARRITO

const numero = [1,2,3,4]

class Producto{
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio
        this.stock = stock
    }
} 

const productos = []

const agregarProducto = (id, nombre, precio, stock)=>{
    // Crear productos y los agrega al array

    // usamos los datos generados para crear un producto
    let nuevoProducto = new Producto(id, nombre, precio, stock)

    // agregar productos al array
    productos.push(nuevoProducto)
}

agregarProducto("1","ALFAJOR", 75,7)
agregarProducto("2","coca", 350,15)
agregarProducto("3","chicle", 200,45)
agregarProducto("4","palitos de la selva", 10,500)
/* console.log(productos) */

// forEach() -- recorrer el array y ejecuta una función por cada elemento- DE LOS MÁS USADOS.

/* productos.forEach((elemento)=>{console.log(elemento.nombre)}) // tiene una función adentro */

// find() -- busca un elemento del array y retorna el primer elemento que cumple con cierta condición
//RETORNA ELEMENTO

/* console.log(productos.find((elemento)=> {
    return elemento.nombre === "ALFAJOR"
}))

console.log(productos.find((elemento)=> {
    return elemento.id === "3"
}))
 */

// filter() -- recibe una función comparadora por parámetro y retorna un nuevo array con los elementos que cumpla la condición
// RETORNA ARRAY

/* console.log(productos.filter((elemento) => {
    return elemento.precio >= 100 && elemento.precio <=300
})) */

// Some() -- funciona igual que filter, con la diferencia de que nos retorna un booleano si encuentra o no el elemento
/* console.log(productos.some((elemento)=>{
    return elemento.nombre === "coca"
})) */

/* const arrayPrueba = ["cero", "uno", "dos"]

console.log(arrayPrueba.some((elemento )=>{ // bool
    return elemento === "dos"
}))

console.log(arrayPrueba.find((elemento )=>{ // retorna el valor tal cual
    return elemento === "dos"
}))

console.log(arrayPrueba.indexOf("dos")) // retorna el index */

//  sort() -- permite reordenar un array segun un criterio que definamos. Podemos utilizar un parámetro pero no es recomendado
// Se ponen 2 parametros, estos son los elementos a comparar
// - si el return es negativo, pone a primero el elemento 1
// - si el return es positivo, pone primero el elemento 2
// - si el return es 0 mantiene el orden
// -- (element1-element2) es de menor a mayor
// -- (element2-element1) es de mayor a menor
// MODIFICA EL ARRAY ORIGINAL

/* productos.sort((element1, element2) =>{
    return element2.precio - element1.precio
})
console.log(productos) */


// sort con strings
// se puede comparar strings con bools
/* console.log([23,1,13,554,70])

const arrayNumeros = [23,1,13,554,70]

arrayNumeros.sort((element1, element2) =>{
    return element2 - element1
})
console.log(arrayNumeros) */


// map() - permite crear un nuevo array con todos los elementos del array, pero transformados, no modifica el original array -- DE LOS MAS USADOS
/* console.log("numeritos: ", [12, 74, 6854, -4])
const numeritos = [12, 74, 6854, -4]

const copiaArrayBruta = numeritos
console.log("Bruta: ", copiaArrayBruta)

const copiaArrayMap = numeritos.map(x=>x)
console.log("MAP: ", copiaArrayBruta) */


// otro ejemplillo
/* const stockAltos = productos.map(elemento=>{
    if(elemento.stock>10){
        return elemento
    }
})
console.log(stockAltos) */

// otro ejemplito 
/* const inflacion = productos.map(elemento=>{
    let prod = new Producto (elemento.id, elemento.nombre, elemento.precio*1.05, elemento.stock)
    return prod
})
console.log(inflacion) */

/* const soloNombres = productos.map(element=>{
    return `producto: ${element.nombre}`
})
console.log(soloNombres) */


// reduce() -- permite obtener un único valor después de iterar sobre un array
// - parametros:
// -- valor a acumular
// -- elemento del array
// - con una, al final se pone el valor inicial del total

const carrito = []
let totalCarrito = 0

const calcularTotalCarrito = () =>{
    totalCarrito = carrito.reduce((total, elemento)=>{
        return total + (elemento.producto.precio*elemento.cantidad)
    }, 0)

}

const agregarCarrito = (producto, cantidad)=>{
    carrito.push({producto, cantidad})
}

agregarCarrito({id: '1', nombre: 'ALFAJOR', precio: 75, stock: 7}, 4)
agregarCarrito({id: '3', nombre: 'chicle', precio: 200, stock: 45}, 1)
agregarCarrito({id: '4', nombre: 'palitos de la serlva', precio: 10, stock: 500}, 21)

console.log("carrito: ", carrito)
calcularTotalCarrito()
console.log("total carrito:", totalCarrito, "$")