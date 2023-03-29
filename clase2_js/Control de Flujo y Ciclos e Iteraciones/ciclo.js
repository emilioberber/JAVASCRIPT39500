console.log("Ciclo")

/* let saludo = true
while(saludo){
    nombre = prompt("Ingresa tu nombre:")
    alert(`¡Hola, ${nombre}!😁`)
    saludo = confirm("¿Otro saludo?")
} 
 */

let total = 0;

for(let i = 0; i<5; i ++){
    let pregunta = Number(prompt(`Ingresa la nota del alumno ${i+1}`))
    console.log(`Nota del alumno ${i+1}: `, pregunta)
    total = total + pregunta
}
