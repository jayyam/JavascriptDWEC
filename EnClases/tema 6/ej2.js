/** Haz lo mismo que el anterior pero con un objeto.*/


let objeto = {
    nombre: function() {
    },
    29: 4,
    true: true,
}
let valores = object.entries(objeto);
valores.forEach(([key, value]) => {
    console.log("El tipo de dato de la clave " +key+ " es "+value);
    console.log("El tipo de dato de la clave " +key+ " es "+value);
    console.log("El tipo de dato de la clave " +key+ " es "+value);
});