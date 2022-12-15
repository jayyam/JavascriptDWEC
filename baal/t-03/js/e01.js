let myObject = {
    name: 'neku',
    lastName: 'tear',
    game: 'final fantasy xiv'
};

let entradas = Object.entries(myObject);

console.warn('FOREACH');
entradas.forEach((element) => {
    console.log(`La key es ${element[0]} y el valor es ${element[1]}`);
});

console.warn('FOR OF');
for (let [k, v] of entradas) {
    console.log(`La key es ${k} y el valor es ${v}`);
}