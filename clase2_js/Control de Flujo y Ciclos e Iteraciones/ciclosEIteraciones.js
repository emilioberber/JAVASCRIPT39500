console.log("Ciclos e iteraciones")


// CICLOS:

//############ FOR: 
//for(desde; hasta; actualización){
//  codigo  
//}

/* for(let i = 0; i<=5; i = i+1){
    console.log(i)
} */

// Ejemplo - calculador de promedios
// 5 alumnos en el curso

/* let total = 0;

for(let i = 0; i<5; i ++){
    let pregunta = Number(prompt(`Ingresa la nora del alumno ${i+1}`))
    console.log(`Nota del alumno ${i+1}: `, pregunta)
    total = total + pregunta
}

let promedio = total / 5;
console.log("Promedio", promedio) */

//############# WHILE:

//while(condicion){
//  condicion a ejecutar
//}

/* let ahorrando = true;
let bolsillo = 10000;
let ahorros = 0;

while(ahorrando){
    let meter = Number(prompt(`¿Cuánto dinero desea ahorrar? Tiene: \nBolsillo: ${bolsillo}\nAhorrado: ${ahorros}`))
    if((meter !== NaN) && (meter <= bolsillo)){
        ahorros = ahorros + meter;
        bolsillo = bolsillo - meter;
    }else if((meter !== NaN) && (meter > bolsillo)){
        alert("Lo siento, no tiene tanto dinero en el bolsillo")
    }else{
        alert("Ingresó datos incorrectos")
    }
    ahorrando = confirm("Desea seguir ahorrando?")
}
 */
/* let saludo = true
while(saludo){
    alert("¡HOLA!😀")
    saludo = confirm("¿Otro saludo?")
} */


// ############# DO WHILE:

/* do{
    //código a ejecutar por el ciclo
}while(condicion) */


let contrasenia = "qwerty"
let input = ''
let intentos = 0
do{
    input = prompt("Ingrese contraseña: ")
    intentos++
    if(intentos<3){
        alert(`Te quedan ${3-intentos} intentos de 3`)
    }else{
        alert("Te quedaste sin intentos")
    }
}while((input !== contrasenia) && (intentos<3))
