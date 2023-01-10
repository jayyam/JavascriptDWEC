let number = 5;
let string = 'esto es una cadena';
let array = [2, 'tres', 6.5];
let objeto =
    {
        Nombre : 'cosa',
        Section : 5,
        Existe :true
    };

//Guarda valores

window.sessionStorage.setItem('numero', number);
window.sessionStorage.setItem('cadena', string);
window.sessionStorage.setItem('arreglo', array);
let jsonString = JSON.stringify(objeto);
window.sessionStorage.setItem("object2", jsonString);

//Obteniendo valores

window.sessionStorage.getItem('numero');
window.sessionStorage.getItem('cadena');
let array2 = sessionStorage.getItem('array').split(",");
console.log(array2);
let objetoBack = JSON.parse(sessionStorage.getItem("object2"));
console.log(objetoBack);

//Borrando valores

window.sessionStorage.removeItem('numero');
window.sessionStorage.removeItem('cadena');
window.sessionStorage.removeItem('arreglo');
window.sessionStorage.removeItem('object');