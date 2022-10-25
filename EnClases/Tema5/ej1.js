/**
 * Crea un documento html e incluye un script que te indique:
 * (1) url,
 * (2) browser usado,
 * (3) pasado 5 segundo redirige la página a https://duckduckgo.com/
 * */

console.log(location.href);
console.log(navigator.userAgent);

setTimeout(()=>{location.href = "http://www.duckduckgo.com"},5000);