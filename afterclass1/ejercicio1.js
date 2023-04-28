// Como resultado final tengo que poder ver la cuenta global del banco y la cuenta individual del usuario.

class Contador {
    constructor(responsable){
        this.responsable = responsable;
        this.conteo = 0;
    }

    static contadorGlobal = 0; // variable estática

    obtenerResponsable = () =>{
        return this.responsable;
    }


cuenta = () => {
    this.conteo++;
    Contador.contadorGlobal++; // forma de acceder a una variable estática, primero con el nombre de la clase
}

obtenerCuentaIndividual = () =>{
    return this.conteo;
}

static obtenerCuentaGlobal = () =>{
    return Contador.contadorGlobal;
}
};

Contador.obtenerCuentaGlobal()

const contador1 = new Contador("Alejandro");
contador1.cuenta();

console.log(contador1.obtenerCuentaIndividual());
console.log(contador1.obtenerCuentaGlobal());

