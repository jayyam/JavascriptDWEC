let numero = 5;
let cadena = 'esto es una cadena';
let array = [2, 'tres', 6.5];
let objeto =
    {
        Nombre : Juan,
        Section : Juguetes,
        Financiacion :true
    };


let chips = document.cookie;
let myarray = document.cookie.split("; ");
let objetoCookies = {};
myarray.forEach((cookie) =>
{
    let aux = cookie.split("=");
    let clave = aux[0];
    let valor = aux[1];
    objetoCookies[clave] = decodeURI(valor);
});

console.log(objetoCookies);