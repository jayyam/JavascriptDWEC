/**
 * Crea una función que indique el número de letras de una cadena de caracteres.
 * */


function contletra(stringy)
{
    cadenaArray = Array.from(stringy.toLowerCase());
    let numletra = cadenaArray.filter((caracter)=>(caracter >= 'a' && caracter <= 'z') || caracter == 'ñ').length;
    console.log(numletra);
}
