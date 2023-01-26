/*let objeto =
    {
        Nombre : Juan,
        Section : Juguetes,
        Financiacion :true
    }
*/
document.cookie = "Nombre=Juan";
document.cookie = "Section=Juguetes";
document.cookie = "Financiacion=true";

console.log(document.cookie);

let objetoCookies = {};
document.cookie.split("; ").forEach((cookie) =>
{
    const [clave, valor] = cookie.split("=");
    objetoCookies[clave] = valor;
});

console.log(objetoCookies);