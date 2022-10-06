/**
 * Crea un objeto con 5 propiedades/claves/atributos: vocal1, vocal2, vocal3, vocal4, y vocal5 cuyo valor sea á, é, í, ó, ú respectivamente.
 * Muestra por consola cada uno de los valores del objeto en unicode.
 * */


let vocales =
    {
                vocal1: 'á',
                vocal2: 'é',
                vocal3: 'í',
                vocal4: 'ó',
                vocal5: 'ú',
    };

console.log(vocales.vocal1.codePointAt(0).toString(16));
console.log(vocales.vocal2.codePointAt(0).toString(16));
console.log(vocales.vocal3.codePointAt(0).toString(16));
console.log(vocales.vocal4.codePointAt(0).toString(16));
console.log(vocales.vocal5.codePointAt(0).toString(16));