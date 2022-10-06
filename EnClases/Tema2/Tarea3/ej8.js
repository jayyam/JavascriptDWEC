/**
 * Crea una variable con la fecha actual. Imprime el siguiente texto: ‘Hoy es D de MM de YYYY’
 * */


const fecha = new Date;
let año = fecha.getFullYear();
let mes = fecha.getMonth()+1;
let dia = fecha.getDay();
console.log('Hoy es '+dia+' de '+mes+' de '+año);