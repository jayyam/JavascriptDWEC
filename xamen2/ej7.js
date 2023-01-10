/**
 * Crea una función que reciba un parámetro opcional
 * (en la propia definición de la función) y en caso de no indicarse deberá ser inicializado a la cadena vacía “”.
 * La función devolverá el número de letras que contiene la cadena que se le pasa como parámetro.
 * */

function otraFuncion(texto='')
{
    let rayaa = Array.from(texto.toLowerCase());
    result = rayaa.filter((char) => ((char>='a' && char<='z') || char === 'ñ').length)
}
let texto = 'llfweofmdfs'
console.log(otraFuncion(texto));


function laFuncion(parrafo = '')
{
    let arra = Array.from(parrafo.toLowerCase());
    return arra.filter((character)=> (character >= 'a' && character <= 'z') || character == 'ñ').length;
}

let parrafo = 'tres';
console.log(laFuncion(parrafo));