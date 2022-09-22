'use strict';

var x = 3;
console.log('El tipo de dato de la variable X es: ' + typeof x);

x = 'HOLA';
console.log('El tipo de dato de la variable X es: ' + typeof x);

x = true;
console.log('El tipo de dato de la variable X es: ' + typeof x);

x = 3n;
console.log('El tipo de dato de la variable X es: ' + typeof x);

var edad;
console.log('El tipo de dato de la variable X es: ' + typeof edad);

x = null;
console.log('El tipo de dato de la variable X es: ' + typeof x);

x = [123132, 234234, 456456, 678678];
console.log('El tipo de dato de la variable X es: ' + typeof x);
console.log(x instanceof Array);
console.log(Array.isArray(x));

x = {
    altura: 168,
    peso: 85,
};
console.log('El tipo de dato de la variable X es: ' + typeof x);

var x = function () {
    console.log('hola');
};
console.log('El tipo de dato de la variable X es: ' + typeof x);
x();

x = Symbol();
console.log('El tipo de dato de la variable X es: ' + typeof x);
