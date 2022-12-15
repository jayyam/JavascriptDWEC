/**
 * Escribir un programa que dado un número entero y muestre por pantalla un triángulo rectángulo
 * como el de más abajo, de altura el número introducido.
 * En la fila par hay guiones y en la impar asteriscos.
 * *
 * - -
 * * * *
 * - - - -
 * * * * * *
 * */


let numero =5;
let star = '*';
let guion = '-';

function triangulo(numero)
{
    for (let i = 1; i <= numero; i++)
    {

    if (i % 2 == 0)
        {
        console.log(guion.repeat(i));
        }
    else
        {
        console.log(star.repeat(i));
        }
    }
}
triangulo(numero);