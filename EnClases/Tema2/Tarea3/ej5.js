/**
 * Adivinar un número. Al principio del programa se genera número aleatorio entre 1 y 99 y le pide mediante un mensaje que escriba un número,
 * dando en cada caso una pista de si es mayor o menor según corresponda hasta que acierte,
 * una vez adivinado indicará el número de intentos. Comprobar si el valor introducido es un número o no.
 * */

//Aprender a implementar contador
let intent = prompt('Escribe un numero', )

var count = 0;
function checkeo()
{
    let num = Math.floor(Math.random()*(99)+(1));
    if ( intent =! num )
    {
        if (intent > num)
        {
            console.log('Te has pasao');
        }
        else if (intent < num)
        {
            console.log('Te falta');
        }
        count++
    }
    else {console.log('Premio');}
    console.log(checkeo())
}
