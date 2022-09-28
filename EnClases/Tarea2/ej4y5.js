/**
 * Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7
 * (sólo hay que comprobar si lo es por uno de los cuatro)
 *
 * Añadir al ejercicio anterior que nos diga por cuál de los cuatro
 * es divisible (hay que decir todos por los que es divisible)
 */

let a = parseInt(prompt('Escriba un numero', ));
if (a % 2 === 0 || a % 3 === 0 || a % 5 === 0 || a % 7 === 0)
{
    console.log(a + ' Es divisible por 2,3,5 o 7');

    if (a % 2 === 0) {console.log(a + ' Es divisible por 2')}
    if (a % 3 === 0) {console.log(a + ' Es divisible por 3')}
    if (a % 5 === 0) {console.log(a + ' Es divisible por 5')}
    if (a % 7 === 0) {console.log(a + ' Es divisible por 7')}
}
else {console.log(a + 'No es divisible por 2,3,5 o 7');}