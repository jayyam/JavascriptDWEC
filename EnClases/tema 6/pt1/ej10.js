//Porque este objeto iterable no es un Array, por lo tanto no funcionaría.

//Funcionaría así:

let map = new Map();
map.set('name', 'John');

let keysArray = Array.from(map.keys());
console.log(keysArray);
keysArray.push('name2');
console.log(keysArray);