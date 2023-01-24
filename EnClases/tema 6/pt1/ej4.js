/** Crea un objeto y transfórmalo en un map. Ahora haz el proceso inverso.
 */

let objeto = {
    funcion: function() {
    },
    numero: 4,
    booleano: true,
}
 let miMap =new Map(Object.entries(objeto));
miMap.forEach((clave, valor) => {
    console.log(clave);
    console.log(valor);
});

let objeto2 = Object.fromEntries(miMap.entries());