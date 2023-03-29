// objeto con propiedades

const mascota1 ={
    nombre: "Roberto",
    edad: 16,
    especie: "Loro"
}

const mascota2 ={
    nombre: "Orion",
    edad: 12,
    especie: "Gato"
}

const mascota3 ={
    nombre: "Firulais",
    edad: 3,
    especie: "Perro",
    amigo: mascota1
}

console.log(mascota1)
console.log(mascota1.nombre)
console.log(mascota2)
console.log(mascota2.especie)

mascota3.nombre = "Chimuelo"

console.log(mascota3.nombre)
console.log(mascota3)


// Objeto con propiedades y métodos:

mascota3.acariciar = function(){
    alert("Acariciaste a la mascota")
}
/* mascota3.acariciar() */



const robot={
    fechaDeNacimiento: new Date(),
    decirTiempo: ()=>{
        let tiempoActual = new Date()
        console.log(tiempoActual)
    }
}

// Otro ejemplo:

const claseCoder ={
    profesor:{
        nombre: "Lu",
        cursos: "DW, JS y Back End",
        estado: "descanzando"
    },
    comision: 39500,
    grabarClase: ()=>{
        alert("La clase se está grabando")
    },
    tutorAdjunto:{
        nombre: "Andres",
        cursos: "DW, JS y React",
        estado: "dando clase"
    },
    nombrarProfe: ()=>{
        alert(this.profesor.nombre)
    }
}
console.log(claseCoder.tutorAdjunto)
/* console.log(claseCoder.grabarClase()) */
console.log(claseCoder.profesor.cursos)

// Creación de los contructores - función constructora--> debe llevar los métodos dentro del constructor 

function Mascota(nombre, edad, raza){
    this.nombre = nombre
    this.edad = edad
    this.raza = raza
    acariciar = ()=> alert("Acariciaste a tu mascota")
}

const michifus = new Mascota(prompt("Nombre"), 7, "Gato")
console.log(michifus)

// CLASES: Otra forma de crear objetos --> diferencia de constructor--> lleva el metodo fuera del constructor  pero dentro de la clase
// se usan clases 
class ProductosKiosko{
    constructor (nombre, stock, precio){
        this.nombre = nombre
        this.stock = stock
        this.precio = precio
    }
}

const alfajor = new ProductosKiosko("Alfajor Jorgito", 20, 150)
console.log(alfajor)

class MascotaClase{
    constructor(nombre, edad, raza){
        this.nombre = nombre
        this.edad = edad
        this.raza = raza
    }
    acariciar = ()=> alert("Acariciaste a tu mascota")
}
const perrito = new Mascota(prompt("Nombre"), 7, "Perrito")
console.log(perrito)


//operadores IN y FOR...IN

// IN
//el operador IN nos permite saber si un objeto tiene una propiedad o no (booleanos). Me va a devolver true false. 
console.log("nombre" in alfajor)

//FOR... IN
//NOS PERMITE RECORRER LAS PROPIEDADES DE UN OBJETO.

for(propiedad in michifus){
    console.log(propiedad)
}

// Si queda tiempo extends + super en clases


// actividad