/**
 * Crea una variable de tipo string que incluya un JSON. A partir de esta variable crea un objeto JS.
 * */

let miString = '{"nombre":"alberto", "apellido": "rodriguez"}'
let miObjetoString = JSON.parse(miString);
console.log(miObjetoString);
