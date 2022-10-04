

let hoy = new Date;
//Variable con fecha actual
let x = 100*60*60*24*7;
//variable con milisecs de una semana
let suma = hoy.getTime()+x;
//sumamos los milisegundos que hay desde 1970
console.log(new Date(suma.toString()));
//Construyo la variabloe con los resultados obtenidos