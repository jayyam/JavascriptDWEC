/**
 *
 * Backtracking
 * */

function calculafact(value)
{
    if (value === 0)
    {
        return 1;
    }
    else
    {
        return value * calculafact(val - 1);
    }
}
console.log('El factorial de numero es ' + calculafact(8));