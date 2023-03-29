console.log("Control de Flujos")

// ################## CONDICIONALES 

//let edad = Number(prompt("¿Qué edad tiénes?")); //variable modificable

//IF:
/*
if(edad >= 18){
    alert("Acá tienes tu cerveza");
}
*/
//IF ELSE:
/*
if (edad>=18){
    alert("Acá está su vino")
}else{
    alert(`Al ser menor de edad con ${edad} año(s), solo serviré agua`)
}
*/
//IF ELSE ELSE IF: 
/* if (confirm("¿Desea coca-cola?")){
    alert("Acá está su coca-cola")
}else if(confirm("¿Desea vino?")){
    if(Number(prompt("¿Qué edad tiénes?"))>=18){
        alert("Acá está su vino")
    }else{
    alert(`Al ser menor de edad solo serviré agua`)
    }
}else{
    alert("Acá tienes agua")
} */

// EJEMPLO CONDICIONALES:

// let bienvenido = confirm("¿Estas con traje y corbata?")
// if(bienvenido ){
//     alert("Ingrese")
// }


/* let endulzar = prompt("Desea azucar o sacarina? \n Ingrese 'a' para azucar o 's' para sacarina")
if (endulzar == 'a'){
    alert("Acá tenes tu azucar")
}else if(endulzar == 's'){
    alert("Acá está su sacarina")
}else{
    alert("Ingreso un dato incorrecto")
} */

/* let num = 2;
if (num == 1){
    console.log("es 1")
}else if(num == 2){
    console.log("es 2")
}else{
    console.log("no se que es")
} */

//SWITCH:

//let nombre = prompt("¿Cuál es su nombre?").toLocaleLowerCase();
//console.log(nombre)

// El break interrumpe el condicional y no se sigue con los demás 

/* switch(nombre){
    case "juan":
        alert("Su cuarto es el 1A")
        break
    case "jose":
        alert("Su cuarto es el 2C")
        break
    case "maxi":
        alert("Su cuarto es el 4A")
        break
    case "franco":
        alert("Su cuarto es el 2B")
        break
    case "andres":
        alert("Su cuarto es el 1B")
        break
    default:
        alert("No lo tenemos registrado en el sistema, por favor verifique sus datos")

} */

// ######################### OPERADORES DE COMPARACIÓN
// == ES IGUAL(similar, solo valor)
// === ES ESTRICTAMENTE IGUAL(identico, mismo valor y tipo)
// ! NOT (invierte veracidad)
// != ES DISTINTO (solo valor)
// !== ES ESTRICTAMENTE DISTINTO ( valor y tipo)
// < ES MENOR A a<b a es menor a b
// <= ES MENOR O IGUAL A a<=b a es menor o igual a b
// > ES MAYOR A a>b a es mayor a b
// >= ES MAYOR O IGUAL A a>=b a es mayor o igual a b

// AND &&: solo si los dos son verdaderos
// Ambos verdaderos:
/*  let mayorEdad = confirm("sos mayor de edad?")
let vinno = confirm ("¿Quiéres vino?")
if (mayorEdad && vino){
    alert("Acá esta el vino")
}else{
    alert("Acá tenes tu vaso de agua che")
}  */

// OR ||: con que uno sea verdadero 
/*  let agua = confirm("¿Quiéres agua?")
let vino = confirm("¿Quiéres vino?")
if (agua || vino){
    alert("Acá está su bevida")
}else{
    alert("Entonces no venga al bar anymore")
}  */