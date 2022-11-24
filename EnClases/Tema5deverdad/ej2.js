function crearCookie(clave, valor, segundos)
{
    let valore =  encodeURIComponent(valor);
    document.cookie= `${clave}=${valore} ";max-age=${segundos}`;
}

var delete_cookie = function()
{
    //document.cookie = `${clave} + '=;expires=Thu, 01 Jan 2022 00:00:01 GMT;'`;
    document.cookie = `${clave}=;max-age=0`;
};

crearCookie("cerveza","ambar", 5000);
delete_cookie("cerveza");
