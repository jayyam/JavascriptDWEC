/**
 * Cree un script que solicite un valor numérico al usuario en base octal (8) y posteriormente muestre su equivalente en base decimal (10).
 * Muestra por consola el resultado.
 *
 * */

let numeroctal = prompt('Escribe un numero en octal', )

console.log('Su numero en decimal es: ' + Number.parseInt(numeroctal,8));
