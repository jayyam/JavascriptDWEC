/**
 * Escribe un programa que dada una frase muestra por consola:
 * el número de veces que aparece la letra a
 * el número de vocales
 * la longitud de la cadena.
 * */

const name = Array.from(prompt('Escribe algo'));

let counta = Array.length(name.match(/a/g));
console.log(counta);

let countv = Array.length(name.match(/aeiou/g));
console.log(countv)

let count = Array.length(name);
console.log(count);