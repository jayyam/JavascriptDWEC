/**
 * Crea una función que devuelva true o false en función de si el parámetro que se le pase por valor es positivo o negativo. El parámetro es opcional y en caso de no indicarse deberá ser el 1. El valor 0 será considerado positivo.
 *
 * */

function esPositivo(num = 1)
{
    if(!Number.isNaN(num)) return 'error';
    return num >= 0;
}
console.log(esPositivo(asdsadfre));