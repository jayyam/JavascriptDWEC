/**
 * Transforma el siguiente bucle for en uno while o do while
 *
 *
 * let respuesta = 'LISBOA';
 * let acierto = false;
 * for (let contador = 0; contador < 3 && acierto === false; contador++) {
 *   let respUsuario = prompt('Capital de Portugal: ');
 *   if (respUsuario.toUpperCase() === respuesta) {
 *     acierto = true;
 *     console.log('Enhorabuena, has acertado');
 *   }
 * }
 * if (!acierto) {
 *   console.log('Lo sentimos, has consumido tus 3 intentos');
 * }

 * */

let respuesta = 'LISBOA';
let acierto = false;
let respUsuario;
let contador = 0;

do
{
    respUsuario = prompt('Capital de Portugal: ');
    if (respUsuario.toUpperCase() === respuesta)
    {
        acierto = true;
        console.log('Enhorabuena, has acertado');
        break;
    }
}
while(contador < 3 && acierto === false)
{
    contador++
}
console.log('Lo sentimos, has consumido tus 3 intentos');