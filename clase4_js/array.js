// Array = tipo de dato que es comouna lista

// Declarar un array
/* const array = [
    "hola",
    123,
    "mundo"
] */

/* const array2 = [123, "array en linea", false] */

// cada elemento tiene un índice y empieza con el 0
//array[0] //"hola"

// for y arrays
// sabiendo el largo del array
/* for ( let i = 0; i<3; i++){
    console.log(array[i])
} */

// Sin saber el largo del array 
/* console.log("Largo de array", array.length)
for ( let i = 0; i < array.length; i++){
    console.log(array[i])
} */

// Metodos de array

const verduras = ["cebolla", "tomate", "aguacate", "champinion", "papa", "moras"]
 
//METODOS para agregar valores al array
// push()-- agrega cosas al final del array

/* verduras.push("sandia")
console.log(verduras) */

// unshifgt() -- agrega cosa al principio del array
/* verduras.unshift("zanahoria")
console.log(verduras) */

//METODOS para quitar valores al array
// pop() -- elimina el ultimo valor del array
/* verduras.pop();
console.log(verduras); */

// shift() -- elimina el primer elemento de la lista
/* verduras.shift();
console.log(verduras) */

// splice() -- elimina uno o varios elementos del array
// splice(x,y) x = es el indice a cortar (posición), y = es cuantos elementos cortamos (# elementos a sacar)
/* console.log(verduras)
verduras.splice(1,2)
console.log(verduras) */

// slice() -- elimina uno o varios elementos de un array -- se utiliza más map()
// slice(x,y) x = es el indice a copiar, y=cuantos elementos quiero copiar(1 menos)
// NO modifica el original
/* console.log(verduras)
console.log(verduras.slice(1,3)) */

// join() -- genera un string con los elementos del array y lo especificado dentro del () 
// NO modifica el array original
/* console.log(verduras.join(", ")) */

// concat() -- une dos arrays, retornando uno nuevo
const carne = ["churrasco", "rib eye", "alitas", "pollo" ]
const alimentos = verduras.concat(carne)
/* console.log(verduras)
console.log(alimentos) */

// indexOf() -- retorna el índice de un elemento por su nombre

/* console.log("Índice del tomate: ", verduras.indexOf("tomate"))
const a = [123,12,322,1342,24,-23]
console.log("Índice del 24: ", a.indexOf(24)) */

// includes()-- retorna un bool si encuentra el elemento 
// -NO MODIFICA EL ARRAY ORIGINAL
/* console.log("includes cebolla ?",verduras.includes("cebolla")) */

// reverse() -- invierte los lementos del array
// SI modifica el array inicial
/* console.log(verduras)
verduras.reverse()
console.log(verduras) */

// for of
for(const verdura of verduras){
    console.log(verdura)
}

//EJEMPLOS:
/* const listaNombres = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n")); */

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
// recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    // busco su índice en el array
    let index = nombres.indexOf(nombre)

     // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1 ) {
        nombres.splice(index, 1)
    } 
}
eliminar('Pedro') */

// EJEMPLO: agregar productos a su lista de productos tipo carrito

class Producto{
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio
        this.stock = stock
    }
} 

const productos = []

const agregarProducto = ()=>{
    // Crear productos y los agrega al array

    // pedimos los datos al cliente 
    let nuevoId = prompt("Ingresar el id del producto")
    let nuevoNombre = prompt("Ingresar el nombre del producto")
    let nuevoPrecio = Number(prompt("Ingresar el precio del producto"))
    let nuevoStock = Number(prompt("Ingresar el stock del producto"))

    // usamos los datos generados para crear un producto
    let nuevoProducto = new Producto(nuevoId, nuevoNombre, nuevoPrecio, nuevoStock)

    // agregar productos al array
    productos.push(nuevoProducto)
}

/* console.log(productos)
agregarProducto()
console.log(productos) */

let condicionalBucle = true;

function iniciarPrograma(){
    while(condicionalBucle){
        let pregunta = confirm("¿Agregar un producto?")
        if(pregunta){
            agregarProducto()
            console.log(productos)
        }
        condicionalBucle = confirm("¿Desea agregar más productos?")
    }
}

// iniciarPrograma()