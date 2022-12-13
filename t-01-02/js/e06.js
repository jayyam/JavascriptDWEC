let fecha = new Date();
fecha.setDate(fecha.getDate() + 70);
console.log(fecha.toString());

let before = Date.now();
let text = prompt('escribe algo');
let after = Date.now();
let time = (after - before) / 1000;

console.log('has tardado ' + time + ' segundos!');