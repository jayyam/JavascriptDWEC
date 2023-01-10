let map = new Map();
map.set(3, 'Juan');   // un número como clave
map.set('3', 'millones');     // un string como clave
map.set(true, 'verdadero');  // un booleano como clave
// Map mantiene el tipo de dato en las claves, por lo que estas dos son diferentes:
console.log(map.get(3)); // 'Juan'
console.log(map.get('3')); // 'Millones'
console.log(map.get(true));//'Verdadero'
