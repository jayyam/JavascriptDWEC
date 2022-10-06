/**
 *  Crea un array con varios títulos de películas. Comprueba
 * si un título introducido por el usuario está incluido. Si no está incluido agrégalo al array.
 * */

let miArray = ['Robocop', 'Terminator', 'Resident Evil', 'Shrek', 'Dumbo'];
let pelicula = prompt('Escribe una pelicula', )

let existe = miArray.includes(pelicula);
if (!existe)
{
    miArray.push(pelicula)
    console.log(miArray)
}
else{console.log('La pelicula ya esta incluida')}