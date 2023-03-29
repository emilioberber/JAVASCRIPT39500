// Función sin parametos
/* function holaMundo(){
    console.log("Hola Mundo!")
} */

// Función con parametos:
/* function calcuadora(a, b, operacion){
    if (operacion === "+"){
        let suma = a+b;
        return suma;
    }else if (operacion === "-"){
        let resta = a-b;
        return resta;
    }else if (operacion === "*"){
        let multi = a*b;
        return multi;
    }else if (operacion === "/"){
        let divi = a/b;
        return divi;
    }
    
    
} */

// --- LLAMAR ---
// Sin parametos:
//holaMundo();

// con parametos:
/* console.log("calculadora(2,3): ",calcuadora(2,3)) */

// SCOPE:
// Scope local y scope global 


// Funciones anónimas:
/* const multiplicador = function(a,b){
    return a*b
}

console.log(multiplicador(2,6)) */

//Ejemplo de tabla de multiplicación:
/* function tablaMulti(num1){
    for (let i = 0; i<=num1; i++){
        for(let j = 0; j<= num1; j++){
            console.log(`${i} x ${j} = ${i*j}`)
        }
    }
}

tablaMulti(10) */

// Función flecha --> forma más avanzada de hacer una función anónima
/* const funcFlecha = ()=>{
    //codigo a ejecutar
} */

/* const ataqueEspada = (defensa,danio )=>{
    let paraPegar = Math.floor(Math.random()*20)+1 // Math.floor = redondear hacia abajo y Math.random = aleatorio
    console.log(paraPegar)
    if (paraPegar >= defensa){
        let danioRandom = Math.floor(Math.random()*danio)
        console.log(danioRandom)
        alert(`Le pegaste por ${danioRandom} al enemigo`)
    }else{
        alert("Le erraste")
    }
} */

// return implicito
/* const corrector = (num1, num2, retaAlumno)=>num1*num2 === retaAlumno
console.log(corrector(2,3,6)) // true
console.log(corrector(5,5,24)) // false */


/* const sumando = (num1, num2) => num1+num2
console.log(sumando(2,3)) */

// parametro único
// const nombre = PARAMETRO => //codigo a retornar
/* const divisibleEnTres = num1 => num1%3 === 0 

console.log(divisibleEnTres(5))
console.log(divisibleEnTres(3))
console.log(divisibleEnTres(6))
console.log(divisibleEnTres(12))
console.log(divisibleEnTres(17)) */

// -- PARADIGMAS, convenciones, conceptos y buenas prácticas:
// DRY - Dont Repeat Yourself
// KISS - Keep It Simple Stupid
// YAGNI - You Ain't Gonna Need It

// Funcional vs Procedimental
// Abstracción
// Expresividad
// Modularidad: variables llamando a otras variables para así tener la posibilidad de llamar a als variables
// de afuera en varias ocasiones

// -- ver errores --
// Caja Negra: ver los datos que ingresan y los datos que salen
// Caja Blanca: ver el proceso independientemente del input


// valores predeterminados - en caso de que el usuario no le ponga valores

const division = (num1, num2 = 5)=>num1/num2

// Elijamos el más grande de 5 números
const retornaMasGrande = (num1, num2)=>{
    if(num1>num2){
        return num1
    }else {
        return num2
    }
}

const elegirMasGrande5=()=>{
    //Valor más grande
    let masGrande = 0

    // 5 números que ingresa el usuario
    let primero = Number(prompt("Ingrese el primer número"))
    let segundo = Number(prompt("Ingrese el segundo número"))
    let tercero = Number(prompt("Ingrese el tercer número"))
    let cuarto = Number(prompt("Ingrese el cuarto número"))
    let quinto = Number(prompt("Ingrese el quinto número"))

    // comparo y elijo el más grande
    masGrande = retornaMasGrande(primero, segundo)
    masGrande = retornaMasGrande(masGrande, tercero)
    masGrande = retornaMasGrande(masGrande, cuarto)
    masGrande = retornaMasGrande(masGrande, quinto)

    alert(masGrande)
}

/* elegirMasGrande5() */

const mayor5EnterosPositivos =()=>{
    let mayor = 0;
    for( let i = 0; i <5; i++){
        let comparar = Number(prompt("Ingrese número mayor o igual a 0"))
        while(comparar <0){
            comparar = Number(prompt("Ingrese número mayor o igual a 0"))
        }
        mayor= retornaMasGrande(mayor, comparar)
    }
    alert(mayor)
}

mayor5EnterosPositivos()