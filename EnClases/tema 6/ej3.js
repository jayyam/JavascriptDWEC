/** Crea un set con varios valores repetidos.
 * Recorre el set imprimiendo por pantalla el tipo de datos y el valor de cada posición.
 */

let miSet = new Set();

let nombre = { nombre: "Juan" };
let numero = { numero: 50 };
let booleano = { boolean: false };

miSet.add(nombre);
miSet.add(numero);
miSet.add(booleano);

miSet.forEach((valor) => {
    console.log('Tipo de dato '+typeof valor+'del Valor: '+valor);
});

