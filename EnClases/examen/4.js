/**
 * Dada una cadena de texto
 * Elimina los espacios en blanco del principio y el final e imprime la longitud de dicha cadena.
 * Imprime el 2 carácter de la cadena en caso de que la longitud sea mayor de dos.
 * Pasa a mayúsculas y minúsculas la cadena.
 * */

let cadena = '   FM_54ferwweda   ';
let espacios = cadena.trim();
console.log(espacios);

let pos2 = cadena(2);
console.log(pos2);

let may = cadena.toUpperCase();
console.log(may);

let min = may.toLowerCase();
console.log(min);

