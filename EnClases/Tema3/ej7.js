/**
 * Crea un programa que muestre por pantalla las tablas de verdad de la operación lógica AND, OR, y NOT.
 * */


console.table
    (

        {
        true_trueA: true && true,
        true_falseA: true && false,
        false_trueA: false && true,
        false_falseA: false && false,

        //OR
        true_trueO: true || true,
        true_falseO: true || false,
        false_trueO: false || true,
        false_falseO: false || false,

        //NOT
        a1: !true,
        b1: !false,
        c1:'', //vacio
        d1: 'algo',//contenido
        }
    )
