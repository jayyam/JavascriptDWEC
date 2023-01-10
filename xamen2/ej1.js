/**
 * Crea un objeto con varias propiedades de tipo string.
 * Recorre el objeto con un bucle, en cada iteración imprime por consola
 * “La key es: ______ y el valor es : ______”
 * */


let objeto =
    {
        cad1: 'cadenaca1',
        cad2: 'cadenosa2',
        cad3: 'cadeneta3'
    };

for (let key in objeto)
{
    console.log(`La key es: ${key} y el valor es : ${objeto[key]}`);
}

let objeto = {
    cad1 : 'cadenica1',
    cad2 :'cadenosa2',
    cad3 : 'cadeneta3'
}

for (let key of objeto)
{
    console.log(`La key es: ${key} y el valor es : ${objeto[key]}`);
}