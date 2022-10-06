/**
 * Declara una variable de tipo número constante ¿puedes cambiar el valor?.
 * A continuación crear un array de tipo constante con un par de valores e intenta modificar
 * alguno de ellos ¿puedes cambiar el valor?
*/

const IVA = 21;
//IVA = 4; //Es una constante por lo tanto el valor no cambia. El programa no continua ejecutandose

const miArray = [3,4,6,7];
console.log(miArray);

//miArray =[35,454,55,12];
miArray[0] = 233;
console.log(miArray);
console.log(miArray instanceof Array);
console.log(miArray.length);//Tamaño del array.Propiedad

miArray.push(343);//Entrando cosas al array. Metodo
console.log(miArray);

miArray.pop();//Sacando cosas del array. Metodo
console.log(miArray);

miArray.shift();//Desplazando una posicion en el array. Metodo
console.log(miArray);

