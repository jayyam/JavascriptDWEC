Boolean : par1;

par2 = function A()
{
    console.log("El valor es true")
}

par3 = function B()
{
    console.log("El valor es false")
}
function receptor(par1, par2, par3)
{
    let result = par1 ? par2 : par3;
}

console.log(receptor(result));