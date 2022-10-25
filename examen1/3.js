/**
 * Crea un array con varios títulos de películas.
 * Comprueba si un título introducido por el usuario está incluido y si no lo está incluido agrégalo al array.
 * Inserta en la posición 2 otro título desplazando el resto una posición
 * Concatena todos los valores incluyendo un punto y coma en cada uno de ellos.
 * Crea un filtro (usa el método filter de Array) que sólo deje las películas de más de 7 caracteres
 * Busca la posición del primer elemento (usa el método find de Array) cuya segunda letra sea una L.
 * */

myArray = ["terminator","robocop","demolition man","algo","seven"];

check = myArray.find(prompt('Escribe pelicula'));

myArray.join(',');
console.log(myArray);

myArray.filter(function (key){return key.length>7;})
console.log(myArray);

myArray[1] = "huracan carter";
console.log(myArray);

myArray.find()
