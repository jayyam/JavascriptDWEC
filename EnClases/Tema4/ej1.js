/**
 * Crea una función que sume todos los valores pasados por parámetro. Usa destructuring para ello.
 * */

function suma(...numbers)
{
    let suma = 0;
    numbers.forEach((numero) => (suma +=numero));
    return suma;
}
console.log(suma(1,2,3,4,5,6));