//EXPORTAR CON NOMBRE

function imprimirArray(miArray)
{
    miArray.forEach(function(elemento)
    {
        console.log(elemento);
    })

    miArray.forEach(elemento =>
    {
        console.log(elemento);
    })
    return miArray;
};

function imprimirSaludo()
{
    let res = 'hola';
    console.log(res);
    return res;
}


export default
{
    utilidades.imprimirArray(miArray);
    utilidades.imprimirSaludo();
    imprimirSaludo2,
}

