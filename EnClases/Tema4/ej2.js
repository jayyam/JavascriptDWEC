/**
 * Crea una función que indique el número de letras de una cadena de caracteres.
 * */


function contletra(strign)
{
    cadenaArray = Array.from(strign.toLowerCase());
    let numletra = cadenaArray.filter((caracter)=>(caracter >= 'a' && caracter <= 'z') || caracter == 'ñ').length;
    console.log(numletra);
}
