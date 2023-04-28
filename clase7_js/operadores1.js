//  operadores matemáticos



// siempre el símbolo antes del =

// x = x+1
// x+=1
// x++

// x = x-1
// x-=1
// x--

// +=
// ++
/* for(let i =0; i<5;i++){
    console.log(i)
} */
// -=
// --

// Cuidado al usarlo con constantes!!!

// operador ternario !!! IMPORTANTE !!!!!!!!!!
//  if es el ? 
//  else es el :
// condicion ? caso1 : caso2

/* let a = false
let x= "condicion es verdadera"
let y= "condicion es falsa" */


/* if(a){
    return x
}else {
    return y
} */

/* console.log(a ? x : y) */


//  Operador lógico AND &&  !!! IMPORTANTE para react !!!!
// el && es un if simple

// if(a){ 
//     return x
// }

/* console.log(a && x) */

//  Operador lógico OR ||  !! IMPORTANTE !!
// a || b
// revisa la veracidad de a, retorna a si es verdadero y retorna b si es falso



// Nullish Coalescing ??
// ?? me permite saber si un dato es nulo, solo agarra null y undefined

/* const usuario = {
    nombre: "Emilio Berber",
    edad: 22,
    cursos: {
        javascript: "aprobado"
    }
}

console.log(usuario?.cursos?.javascript || "La propiedad no existe")

console.log(usuario?.trabajos?.coderhouse || "La propiedad no existe") */



// DESTRUCTURING (DESTRUCTURACION) !!

class Producto{
    constructor(nombre, id, precio){
        this.nombre=nombre
        this.id=id
        this.precio=precio
    }
}

const alfajor = new Producto("alfajor", 1, 200)

/* let {nombre, id, precio} = alfajor
console.log(nombre)
console.log(id)
console.log(precio) */


// Alias !! cambiar de nombre para facilitar el código

/* let {nombre:nombreAlfajor, id, precio:price} = alfajor
console.log(nombreAlfajor)
console.log(price) */

// destructuración en parametros!!

/* const agregarCartaProducto = ({nombre, id, precio})=>{
    const contenedorCartas = document.getElementById("contenedorCartas")
    contenedorCartas.innerHTML=`<div>${producto.nombre}|${producto.id}|${producto.precio}</div>`
} */
/* const agregarCartaProducto = ({precio, id, nombre})=>{
    const contenedorCartas = document.getElementById("contenedorCartas")
    contenedorCartas.innerHTML=`<div>${nombre}|${id}|${precio}</div>`
} */

/* agregarCartaProducto(alfajor)
 */



// destructuración en arrays !!
// se descontructura en orden

const arrayEjemplo = ["A", "B", "C", "D"]

const [primero, segundo, tercero] = arrayEjemplo

console.log(primero)
console.log(segundo)