/**
 * Crea un objeto e introduce en él varias propiedades con los siguientes valores:
 * Un string, un número, un número bigint, una función, otro objeto, un array.
 * En un paso posterior inserta una nueva propiedad de tipo string
 * Elimina una de las propiedades.
 * */

let thing =
    {
    A1 : 'primero',
    A2 : 2,
    A3 : 3n,
    A4 : function cuatro()
        {
            return this.A2;
        },
    A5 : {
            B1: datObjeto,
            B2: datoobjeto2,
         },
    A6: ['siete','8','nueve']
    };

console.log(thing);
