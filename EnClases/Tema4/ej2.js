/**
 * Crea una función que indique el número de letras de una cadena de caracteres.
 * */


function contletra(cadena)
{

    cadenaArray = Array.from(cadena.toLowerCase());
    let number = cadenaArray.filter((char)=>
    {
        (char >= 'a' && char <= 'z') || char == 'ñ'
    }).length;
    console.log(number);
}
contletra('asdsaSDwrthbhErafV');