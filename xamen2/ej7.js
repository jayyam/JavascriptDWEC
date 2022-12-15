/**
 * Crea una función que reciba un parámetro opcional
 * (en la propia definición de la función) y en caso de no indicarse deberá ser inicializado a la cadena vacía “”.
 * La función devolverá el número de letras que contiene la cadena que se le pasa como parámetro.
 * */
function laFuncion(parrafo = '')
{
    let arra = Array.from(parrafo.toLowerCase());
    return arra.filter((character)=> (character >= 'a' && character <= 'z') || character == 'ñ').length;
}

let parrafo = 'tres3pe ñ';
console.log(laFuncion(parrafo));