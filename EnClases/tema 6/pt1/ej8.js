/**Indica cómo obtener la longitud de un array, de un string, de un objeto, de un map y de un set.
 *  Eliminar una propiedad de la posición dos del array, del objeto, del map y del set.
 *  Agrega una propiedad en la posición dos del array, del objeto, del map y del set.*/


let myArray = [3, 2, 1, 4, 5]
console.log(myArray.length);
myArray.splice(2,0,3);
console.log(myArray);
myArray.push(7);

let myString = "babay34pork";
console.log(myString.sort);

let myObject = {a:1, b:2, c:3}
console.log(Object.keys(myObject).length);
delete myObject[b];
console.log(myObject)
myObject.letra='d';

let myMap = new Map();
myMap.set(a, 1);
myMap.set(b, 2);
myMap.set(c, 3);
console.log(myMap.size);
myMap.delete(c);
console.log(myMap);
myMap.set(d, 4);

let mySet = new Set();
mySet.add(1);
mySet.add(2)
mySet.add(3)
console.log(mySet.size);
mySet.delete(3)
console.log(mySet.size);
mySet.add(4);