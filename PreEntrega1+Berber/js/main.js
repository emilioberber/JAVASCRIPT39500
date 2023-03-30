// Cotizaciones de viajes por continente

function cotizar(){
    // cotización
    let agregarPerosnas = true
    let personas = 0
    let cotTotal = 0
    while(agregarPerosnas){
        personas++
        //  alumnos = alumnos+1
        let nombre = prompt(`Ingrese el nombre del pasajero ${personas}:`).toLocaleUpperCase()
        let noches = Number(prompt(`Ingrese el número de noches TOTALES que se hospedará ${nombre}:`))
        let comidas = Number(prompt(`Ingrese el número de comidas de ${nombre}\n\n- Ingrese 1 si SOLO desea tener DESAYUNO\n- Ingrese 2 si SOLO desea tener COMIDA\n- Ingrese 3 si SOLO desea tener CENA\n- Ingrese 4 si desea tener las tres comidas\n`))
        cotTotal += (noches*comidas)*100 /* POR 100 DOLARES */
        agregarPerosnas = confirm("Irá otro pasajero?")
    }
    alert(`DESGLOCE COTIZACIÓN:\nLa cotización total para ${personas} personas es: ${cotTotal} USD\nPor persona es: ${cotTotal/personas} USD\n\n`)
}


alert("Hola bienvenido a Continent Travel")
let continente = prompt("Ingrese las primeras 2 letras del continente al que le interesa viajar:\n\n- Europa\n- América\n- Asia\n- Africa\n- Oceanía")
let continenteLowerCase = continente.toLocaleLowerCase()
if(continenteLowerCase === "eu"){
    alert("Bienvenido a viajes en EUROPA\n\nEste viaje te llevará a:\n- Francia\n- Inglaterra\n- España")
    cotizar()
    
}else if(continenteLowerCase === "am"){
    let aceptar = true
    while(aceptar){
        confirm("Bienvenido a viajes en AMÉRICA\n\nEste viaje te llevará a:\n- Estados Unidos\n- México\n- Canadá")
        cotizar()
    }
}else if(continenteLowerCase === "as"){
    let aceptar = true
    while(aceptar){
        confirm("Bienvenido a viajes en ASIA\n\nEste viaje te llevará a:\n- Japón\n- Indonesia\n- China")
        cotizar()
    }
}else if(continenteLowerCase === "af"){
    let aceptar = true
    while(aceptar){
        confirm("Bienvenido a viajes en AFRICA\n\nEste viaje te llevará a:\n- Sudáfrica\n- Nigeria\n- Marruecos")
        cotizar()
    }
}else if(continenteLowerCase === "oc"){
    let aceptar = true
    while(aceptar){
        confirm("Bienvenido a viajes en OCEANÍA\n\nEste viaje te llevará a:\n- Nueva Zelanda\n- Australia\n- Fiyi")
        cotizar()
    }
}else{
    alert("Lo siento, no agregaste una opción válida!")
}