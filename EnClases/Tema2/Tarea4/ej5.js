/**
 * Crea un array con 5 valores (uno en cada posición, de la 0 a la 4) e inserta en la posición 2 un objeto de manera que
 * los valores que habían en la posición 2, 3 y 4 deberán desplazarse una posición (usa la función splice).
 * */


var palabras = new Array('botella', 'zeta', 'androide', 'minuto', 'viaje');

palabras.splice(2,0, 'elemento');

console.log(palabras);


