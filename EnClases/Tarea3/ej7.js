/**
 * Realiza un script que pida una fecha y muestre cuál será la fecha pasada 80 días desde la fecha introducida.
 * */

let date = new Date(prompt('Escribe una fecha', ));
date.setDate(date.getDate()+80);
console.log('Su fecha sumada es' + date);