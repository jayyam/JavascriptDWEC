function search300(...movies) {
    return movies.some((movie) => movie.duracion > 300);
}

let movies = [
    {
        nombre: 'Audition',
        duracion: 166,
    },
    {
        nombre: 'The End of Evangelion',
        duracion: 400,
    },
    {
        nombre: 'Ichi the Killer',
        duracion: 105,
    },
    {
        nombre: 'Akira',
        duracion: 320,
    },
];

console.log(
    search300(...movies)
        ? 'Se encontro al menos una pelicula !'
        : 'No se encontraron peliculas de mas de 300 min...'
);