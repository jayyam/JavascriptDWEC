let arr = ['Audition', 'Old Boy', 'Ichi The Killer', 'Akira', 'aLgo'];
let movie = prompt('Introduce una pelicula');

if (arr.includes(movie)) {
    console.log('la pelicula ya existe!');
} else {
    console.log('la pelicula no existe, añadiendo...');
    arr.push(movie);
}
console.log('lista de peliculas:', arr.join('; '));

arr.splice(2, 0, 'Berserk'); // insertar pelicula posicion 2
console.log('lista de peliculas:', arr.join('; '));// concatenar valores array

let more7 = arr.filter((key) => key.length > 7);
console.log('lista de peliculas de mas de 7 caracteres:', arr.join('; '));

let searchL = arr.findIndex((key) => key[1] === 'L');
console.log('posicion primera pelicula con L en la segunda posicion:', searchL);