console.log("Condicionales");

alert("Te recordamos que para ingresar a esta fiesta debes cumplir con lo siguiente:\n\n- Debes ser de Mexico o Argentina\n- Debes ser mayor de 18 años\n- Debes portar ropa negra")
pais = prompt("Ingresa tu país de origen:").toLocaleLowerCase();
edad = Number(prompt("Ingresa tu edad:"));
inicialColorRopa = prompt("Ingresa la inicial de tu color de outfit:");

if((edad>18) && (inicialColorRopa == "n" || inicialColorRopa == "N") && (pais == "mexico" || pais == "argentina") ){
    alert("Bienvenido a la fiesta\nNo tomes en exceso XD")
}else{
    alert("Lo sentimos, no puedes ingresar a la fiesta :(")
}



