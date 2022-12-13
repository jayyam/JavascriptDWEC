let myObject = {
    nombre: 'neku',
    edad: 23,
    anio: 6000n,
    saludo: () => 'hewo',
    object2: {
        value1: 1,
        value2: 'prpr',
    },
    arr: [1, 0, 0, 1],
};

myObject.apellido = 'tear';
delete myObject.anio;

console.log(myObject);