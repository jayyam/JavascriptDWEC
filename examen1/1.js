
/**
 * Crea un programa que asigne a una variable el valor ‘No molestar’ o ‘Disponible’
 * en función de otra variable booleana llamada ESTADO. Utiliza el operador ternario. En caso de que
 * no esté definida la variable ESTADO debería ser el valor true por defecto (utiliza el operador Nullish para esto).
 * */

let ESTADO = false;
ESTADO ??= true;

let result = ESTADO ? 'Disponible' : 'No molestar';
console.log(result);






