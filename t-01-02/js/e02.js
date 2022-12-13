let text = 'hewo wOrld - Awo';
let arr = Array.from(text.toLowerCase());

let searchA = arr.filter((key) => key === 'a');
console.log('num de veces que aparece letra \'a\':', searchA.length);

let vocals = arr.filter((key) => key === 'a' || key === 'e' || key === 'i' || key === 'o' || key === 'u');
console.log('num de vocales:', vocals.length);

console.log('longitud de la cadena:', arr.length);