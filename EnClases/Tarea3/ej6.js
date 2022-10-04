/**
 * Realiza un script que pida un nombre y dos apellidos e indique el tiempo que se tardó en introducir los datos. La salida sería algo así como:
 * En introducir ‘Soy un máquina y voy a sacar un 10’ ha tardado 5 segundos.
 * */


let inicio = Date.now();
let nombre = prompt('Escribe tu nombre', );
let apellidos = prompt('Escribe tus apellidos', );
let fin = Date.now();
let transcurso = (fin - inicio)/1000;
console.log('Has tardado en escribir ' + nombre +' '+ apellidos +' '+transcurso+' segundos');