let objeto = {
    nombre: function() {
    },
    29: 4,
    true: true
}
//En un objeto las claves las transforma a string
console.log(objeto);
Object.keys(objeto).forEach( (a) => console.log(typeof a));
Object.values(objeto).forEach( (a) => console.log(typeof a));

//Para acceder a una propiedad de un objeto podíamos hacerlo de dos formas
console.log(objeto[nombre]);
console.log(objeto.nombre);

//Para borrar
delete objeto.nombre;
delete objeto[nombre];
