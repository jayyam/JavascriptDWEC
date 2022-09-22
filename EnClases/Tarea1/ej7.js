//Escribe un programa que pida 3 números y escriba en la consola el mayor de los tres.

var a = parseInt(prompt('Primer numero?', ));
var b = parseInt(prompt('Segundo numero?', ));
var c = parseInt(prompt('Tercer numero?', ));

if((a>=b&&a>=c))
{console.log(a);}
else if((b>=a&&b>=c))
{console.log(b);}
else
console.log(c)
