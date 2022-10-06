/**Escribe un programa que pida una frase y escriba el número de veces
 * que aparece la letra a y el número de vocales. NO USAR BUCLES
 */

let frase = Array.from(prompt('Escribe una frase', ));
let myArray = frase.filter(function (letra)
{
return letra === 'a';
})
console.log('La cantidad de Aes son ' +  myArray.length);

let myArray2 = frase.filter(function (letra)
{
    return letra.toLowerCase() === 'a' ||
           letra.toLowerCase() === 'e' ||
           letra.toLowerCase() === 'i' ||
           letra.toLowerCase() === 'o' ||
           letra.toLowerCase() === 'u';
});

console.log('La cantidad de vocales son ' + myArray2.length);
