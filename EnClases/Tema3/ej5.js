/**
 * Escribir un programa que pida al usuario o no un número entero y muestre por pantalla un triángulo rectángulo como el de más abajo,
 * de altura el número introducido.
 */

let numero = prompt('Escribe un numero ', );
let star = '*';
for (let i=1; i<=numero; i++)
{
    console.log(star.repeat(i))
}