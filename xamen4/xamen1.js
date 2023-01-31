
/*Crea un método que devuelva un objeto con todas las cookies. Ten en cuenta los caracteres especiales.*/

document.cookie = "Nombre=Omar";
document.cookie = "Apellidos=Santana";
document.cookie = "Movil=Android";

function crearCookies() {
    let objetoCookies = {};
    let decodedCookie = decodeURIComponent(document.cookie);
    document.cookie.split("; ").forEach((cookie) =>
    {
        const [clave, valor] = cookie.split("=");
        objetoCookies[clave] = valor;
    });
}

document.getElementById("crearCookie").innerHTML.addEventListener("click", crearCookies,);