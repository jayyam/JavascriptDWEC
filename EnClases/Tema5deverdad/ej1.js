function crearCookie(clave, valor, fechaExp)
{
    let valore =  encodeURIComponent(valor);
    document.cookie= `${clave}=${valore} ";expires=` + fechaExp.toUTCString();
}
let fechaExp =  new Date (2022, 10, 24, 15, 59);
crearCookie("cerveza","ambar", fechaExp);
console.log(document.cookie);