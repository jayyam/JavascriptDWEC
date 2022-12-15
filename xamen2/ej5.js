/**
 * Crea una función que reciba tres parámetros
 * Parámetro 1 - Un parámetro de tipo booleano
 * Parámetro 2 - Una función A
 * Parámetro 3 - Otra función B
 * La función deberá ejecutar la función A si el parámetro es true y la función B si el parámetro es false.
 * La función A imprimirá por consola “El valor es true”, y la función B imprimirá por consola “El valor es false”.
 * */


par1 = false;
par2 = function A() {console.log("El valor es true")}
par3 = function B() {console.log("El valor es false")}

function receptor()
{
    let result = par1 ? par2 : par3;
    console.log(result());
}
receptor(par1);

