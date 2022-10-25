/**
 * Transforma la siguiente función definida en Python en JS. "Pablo gil economista blockchain"

    def cuenta_atras(num):
    num -= 1
    if num > 0:
    print(num)
    cuenta_atras(num)
    else:
    cuenta_atras(5)
 */

function cuenta_atras(num)
{
    num--;
    if (num>0)
    {
        console.log(num);
        cuenta_atras(num);
    }
    else
    {
        console.log("Boooooooom!")
        console.log("Fin de la función", num)
    }
}