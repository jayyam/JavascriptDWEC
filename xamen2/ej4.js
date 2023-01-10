/**
 * Crea una función que se le pase como parámetro un conjunto de objetos películas
 * (haz uso de destructuring),
 * cada objeto tendrá dos propiedades,
 * nombre y duración. Haz uso del método “some” de la clase Array para que indique
 * si alguna película tiene una duración de más de 300 min.
 * */


let pelis = [
    {nombre: 'aldo', duracion :30},
    {nombre: 'aldo', duracion: 30},
    {nombre: 'aldo', duracion: 30}
];

function cimena(...pelis)
{
    for (let object of pelis)
    {
        let nombre = object.nombre;
    }   let duracion = object.duracion;
        let largas = pelis.some(function (duracion)
        {
            if (duracion >30)
            {
                console.log(nombre, duracion)
            }
        })
}
cimena(...pelis)










let peliculas = [
    { nombre: "teminator", duracion: 350 },
    { nombre: "robocop", duracion: 450 },
    { nombre: "demolition man", duracion: 250 },
    { nombre: "saw", duracion: 400 },
    { nombre: "inception", duracion: 300 },
];
function Cine(...peliculas)
{
    for (let object of peliculas)
    {
        let nombre = object.nombre;
        let duracion = object.duracion;
        let largas = peliculas.some(function(peliculas)
        {
            if (duracion>300)
            {
                console.log(nombre, duracion);
            }
        })
    }
}
Cine(...peliculas);

