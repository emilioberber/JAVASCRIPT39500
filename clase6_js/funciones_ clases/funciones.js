// ¿Qué es una FUNCIÓN?
// Una función es cualquier lenguaje de porgramación es un bloque de instrucciones
// de código que nosotros podemos trabajar dentro de un scope (las llaves)
// Hay dos maneras de decalarlas en JS: con las palabra reservada function y con
// las flechas que es algo bastante más nuevo

// 1) funcioón tradicional/clásica (function);
/* function sumar (parametro1, parametro2){
    return parametro1 + parametro2
};

const resultadoSuma = sumar(15,22);
console.log(resultadoSuma); */

//2) función flecha (=>): es otra forma de definir una función, es mas resumida
// NO necesita la palabra function:

/* const resultadoFlecha = (parametro1, parametro2) => {
    return parametro1 + parametro2
};
console.log(resultadoFlecha(15,22)); */

// 2.1) Optimizado: se usa SOLO cuando tiene una sola linea de instrucción:

const resultadoFlecha2 = (parametro1, parametro2) => parametro1+parametro2;
console.log(resultadoFlecha2(15,22));