/**
 * Crea una función que reciba como parámetro otra función y la ejecute.
 * */
let mifuncion = function ()
{
    return 'hola';
}

function matrioska()
{
    return mifuncion();
}
matrioska(mifuncion());