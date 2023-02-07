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
/-----/;
function mostrarConsola(nombre) {
    console.log(nombre);
}
function sumar(a, b) {
    return a + b;
}
function acabar() {
    throw new Error('Aplicacion ha dado error');
}
mostrarConsola('Omar');
console.log('a');
acabar();
console.log('b'); // por la funcion acabar(), este ultimo console.log no es alcanzado
function mostrar(a, b) {
    if (a && b) {
        return a + b;
    }
    return a;
}
let aa = 'adasfds';
let bb = 'vvvvv';
console.log(Boolean(aa && bb));
/-----/;
let variableAfuncion = (parametro) => {
    console.log(parametro);
    return parametro + 'adasdsafds';
};
//let variableBfuncion: (parametro: string) => string{}
/---------/;
let x;
//x = 2; // da error por que no se corresponde con el type donde no hemos declarado number
class Persona {
    constructor(nombre, apellido, apellido2) {
        this._nombre = nombre;
        this.apellido = apellido;
        this.apellido2 = apellido2;
    }
    showFullName() {
        return `${this.nombre}${this.apellido}${this.apellido2}`;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get apellido2() {
        return this._apellido;
    }
    set apellido2(apellido2) {
        this._apellido2 = apellido2;
    }
}
let persona = new Persona('Omar', 'Garcia', 'Santana');
console.log(persona.showFullName());
class PilaEnteros {
    constructor() {
        this.vec = [];
    }
    insertar(x) {
        this.vec.push(x);
    }
    extraer() {
        if (this.vec.length > 0) {
            return this.vec.pop;
        }
        else
            return null;
    }
}
let pilaEnteros = new PilaEnteros();
pilaEnteros.insertar(3);
pilaEnteros.extraer(2);
let extraidoEnteros = pilaEnteros.extraer();
class PilaStrings {
    constructor() {
        this.vec = [];
    }
    insertar(x) {
        this.vec.push(x);
    }
    extraer() {
        if (this.vec.length > 0) {
            return this.vec.pop;
        }
        else
            return null;
    }
}
let pilaString = new PilaStrings();
pilaEnteros.insertar('adsafsda');
pilaEnteros.extraer('adsafsda');
let extraidoString = pilaString.extraer();
class PilaGenerica {
    constructor() {
        this.vec = [];
    }
    insertar(x) {
        this.vec.push(x);
    }
    extraer() {
        if (this.vec.length > 0) {
            return this.vec.pop;
        }
        else
            return null;
    }
}
