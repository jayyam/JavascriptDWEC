/**
 * a) Crea un JSON string y parsearlo a un objeto.
 * b) Haz lo mismo pero a la inversa. c) Crea un documento HTML e incluye el JS que acabas de crear.
 * */
let thing2 =
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

console.log(thing2);

let thingJSON = JSON.stringify(thing);
var thingParse =JSON.parse(thingJSON);