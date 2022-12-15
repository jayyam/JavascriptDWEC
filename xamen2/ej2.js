/**
 * Crea una función que reciba un número y devuelva un array con cuatro posiciones:
 * Primera posición. Sólo la parte entera
 * Segunda posición. Redondeo al entero más cercano.
 * Tercera posición. Redondeo al alza
 * Cuarta posición. Redondeo a la baja
 *
 * */

function creArray(numero)
{
    let arr = new Array(4);
    for (let i = 0; i < arr.length; i++)
    {arr[i] = numero;}
    return [Math.trunc(arr[0]),Math.round(arr[1]),Math.ceil(arr[2]),Math.floor(arr[3])];
}
console.log(creArray(22.65));


