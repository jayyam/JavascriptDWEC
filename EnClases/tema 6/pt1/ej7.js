/*
Dado un array con un string en cada posición y valores repetidos deberás eliminar
 los repetidos y ordenarlo a) Haciendo uso de Set b) Sin usar Set
**/


let DesArray = ['uno', 'cuatro', 'dos', 'cinco', 'dos', 'tres', 'siete', 'seis', 'dos', ];
let miSet = new Set(DesArray.sort());//se elmininan los repetidos
let DesArray2 = ['uno', 'cuatro', 'dos', 'cinco', 'dos', 'tres', 'siete', 'seis', 'dos', ];

let correcto =DesArray2.filter((valor, indice) => { return DesArray2.indexOf((valor) === indice)});
console.log(correcto.sort);


