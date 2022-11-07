/**
 * Crea una función que se le pase como parámetro un conjunto de strings con nombres de películas (haz uso de destructuring).
 * utiliza del método filter de la clase Array para que elimine todos los valores cuyo título tenga más de 7 caracteres.
 * */

function conjunto(... strings)
{
    let peliculas = strings.filter((validos) =>
        validos.length > 7 ? delete validos : validos);
    return peliculas;
}

console.log(conjunto('Palabras','ola','zapatos', 'Medicina', 'mano'));

