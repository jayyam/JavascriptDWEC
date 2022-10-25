/**
 * Crea una función que reciba dos arrays de strings y de como resultado un array
 *que incluya los elementos del primero y los del segundo ordenados en orden inverso.
 * */

let ar1 = ['eones', 'dias', 'tiempo', 'mes', 'años'];

let ar2 = ['cosas', 'arte', 'ciencia', 'literatura'];

function arrayordnverso (ar1, ar2)
{
    let fullarray = ar1.concat(ar2);
    fullarray.sort();
    fullarray.reverse();
}
console.log(arrayordnverso(ar1, ar2));
