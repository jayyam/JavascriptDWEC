"use strict";
let message = "hello world";
message = "3"; // ha de ser del mismo tipo de dato declarado
/-----/;
let texto = "asasdasd";
let numero = 123;
let booleano = true;
/-----/;
let myArray = []; // hay que inicializar los array. sino da error
myArray.push("asdasd");
//myArray.push(3); no se puede si se declara antes como string
/-----/;
let myobcjetc = {
    nombre: 'omar',
    apell: 4
};
/-----/;
let variableDoble; //doble tipo de datos en una variable
variableDoble = true;
variableDoble = 2343;
/-----/;
let cualquier = 3;
console.log(typeof (cualquier));
cualquier = 'asdasda';
console.log(typeof cualquier);
/-----/;
let desconocida;
desconocida = 'asdfasfsad';
console.log(typeof desconocida);
let conociendo;
//conociendo = desconocida; asignada directamente no se puede
let asignando;
if (typeof desconocida == 'string') // hay que hacerle un casting o hacerle una comprobacionde tipo
 {
    asignando = desconocida;
}
/-----/;
let prueba;
//prueba = 2; aqui da error
let prueba2 = 'Omar';
//prueba2 = null; aqui tambien
let prueba3;
prueba3 = 'OMar'; //aqui funciona
/-----/;
let myArray2 = [2, 'garcia', true]; // han de estar en secuencia con la declaracion
/-----/;
var Color;
(function (Color) {
    Color[Color["Posicion"] = 1] = "Posicion";
    Color[Color["Posicion2"] = 2] = "Posicion2";
    Color["Posicion3"] = "verde";
})(Color || (Color = {})); // para seleccionar opciones
let posiciones = Color.Posicion3;
console.log(Color.Posicion3);
/-----/;
let casting = '3';
