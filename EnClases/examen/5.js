/**
 * Genera un número aleatorio entre 10 y 76 (ambos incluidos). Una vez obtenido ese número haz
 * los siguientes cálculos (el radio invéntalo):
 * PI * r^2 + numero_aleatorio
 * 2 * PI * r + numero_aleatorio
 * 4/3 * PI *r^3 + numero_aleatorio
 * */

let number = Math.floor(Math.random()*(76)+(10));
let r = 5;

num1 = Math.PI*(r**2)+number;
console.log(num1);

num2 = 2*Math.PI*r+number;
console.log(num2);

num3 = (4/3)*Math.PI*(r**3)+number;
console.log(num3);


