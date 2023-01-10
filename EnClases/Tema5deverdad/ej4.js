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

window.localStorage.setItem("numero", number);
window.localStorage.setItem('cadena', string);
window.localStorage.setItem("arreglo", array);
let jsonString = JSON.stringify(objeto);
window.localStorage.setItem("object2", jsonString);

//Obteniendo valores

window.localStorage.getItem("numero");
window.localStorage.getItem('cadena');
let array2 = localStorage.getItem("array").split(",");
console.log(array2);
let objetoBack = JSON.parse(localStorage.getItem("object2"));
console.log(objetoBack);

//Borrando valores

window.localStorage.removeItem("numero");
window.localStorage.removeItem('cadena');
window.localStorage.removeItem("arreglo");
window.localStorage.removeItem("object");