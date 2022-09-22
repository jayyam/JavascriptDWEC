//Escribe un programa que te indique el IMC a partir del peso y la altura introducidos por el usuario.

var a = parseInt(prompt('Indique su peso en KG?', ));
var b = parseFloat(prompt('Indique su altura en metros ', ));

imc = (a/(b**2))
console.log(imc)