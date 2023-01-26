try {
    let map = new Map();
    map.set('name', 'algo');
    let keys = map.keys();
    keys.push('more');
    console.log(keys);
} catch (e) {
    console.log('a -> ' + e);
}
console.log('prueba');
