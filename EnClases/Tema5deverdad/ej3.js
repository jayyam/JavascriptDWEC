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