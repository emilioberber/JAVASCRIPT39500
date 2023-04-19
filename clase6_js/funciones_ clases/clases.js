// ¿Qué es una clase?
// Es cualquier cosa que puede interactuar con el mundo real va a ser una entidad, ejemplo: persona, auto, animal,etc.
// entidad = atributo de objeto (edad, name, nacionalidad, etc)
// static = características en común de la clase 


// Creación de la clase
class Persona {
    // constructos (atributos)
    constructor(nombre){
        this.nombre = nombre
    }
    static especie = "Humano"

    // funciones/métodos
    saludar = () =>{
        console.log(`Hola yo soy ${this.nombre}`);
    }

    obtenerEspecie = () =>{
        console.log(`Soy ${Persona.especie}`);
    }
};

// Hacer objetos/instancias
const persona1 = new Persona("Emilio");
const persona2 = new Persona("Luciana");

const personas = [persona1, persona2];
console.log(personas);

// Instanciarlo = acceder a la clase y acceder a sus metodos
persona1.saludar();
persona1.obtenerEspecie();

persona2.saludar();
persona2.obtenerEspecie();