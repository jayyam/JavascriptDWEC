let objeto =
    {
        Nombre : Juan,
        Section : Juguetes,
        Financiacion :true
    }

document.cookie = "Nombre=Juan";
document.cookie = "Section=Juguetes";
document.cookie = "Financiacion=true";

console.log(document.cookie);

let myarray = document.cookie.split("; ");
let objetoCookies = {};
myarray.forEach((cookie) =>
{
    let aux = cookie.split("=");
    let clave = aux[0];
    let valor = aux[1];
    objetoCookies[clave] = valor;
});

console.log(objetoCookies.Nombre);

//--------------------------------------------------

let fecha =  new Date (2022, 10, 23, 17, 34);
console.log(fecha.toUTCString());
let valor = window.encodeURIComponent("PACO\;àèñì ");
document.cookie= "Nombre=" + valor + ";expires=" + fecha.toUTCString();

//---------------------LOCALSTORAGE--------------------------------

let variable = [2, 'tres', 6.5]
window.localStorage.setItem('variable', variable);//meter variable en localstorage
console.log(window.localStorage.getItem('variable'));//obtener datos de variable de localstorage
window.localStorage.removeItem('variable');//borrar un item deseado de localstorage
window.localStorage.clear();//borrar todos de localStorage

let variable2 = localStorage.getItem('variable').split(',');

let objeto =
    {
        Nombre : Juan,
        Apellidos : Sanchez,
    }

window.localStorage.setItem('objeto', JSON.stringify(objeto));

let objeto2 = JSON.parse(localStorage.getItem('objeto'));
//-------------------------------------------------------------------------------

//GET - PEDIR RECURSOS - PARAMETROS EN URL

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))

//POST - CREAR RECURSOS - PARAMETROS EN EL CUERPO DE LA SOLICITUD

fetch('https://jsonplaceholder.typicode.com/posts' , {
    method: "POST",
    body: JSON.stringify({
        title: 'titulo de prueba',
        bosy: '5fsdfsdas',
        userId: '3'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'//tipo MIME de lo que le voy a enviar en el cuerpo: aplication/json
    }
})
    .then(response => response.json())
    .then(json => console.log(json))

//DELETE - ELIMINAR

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
});

//PUT - CREAR/MODIFICAR
fetch('https://jsonplaceholder.typicode.com/posts' , {
    method: "PUT",
    body: JSON.stringify({
        title: 'titulo de prueba',
        bosy: '5fsdfsdas',
        userId: '3'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'//tipo MIME de lo que le voy a enviar en el cuerpo: aplication/json
    }
})
    .then(response => response.json())
    .then(json => console.log(json))