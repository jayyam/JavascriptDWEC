let myObject = {
    nombre: 'neku',
    edad: 23,
    saludo: () => 'hewo',
    object2: {
        value1: 1,
        value2: 'prpr',
    },
    arr: [1, 0, 0, 1],
};

let json = JSON.stringify(myObject);
console.log(json);

let toObject = JSON.parse(json);// se pierde la funcion
console.log(toObject);

/** INCUSTRAR CODIGO JS EN HTML
 * Linea: 27
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>EXAM U1-U2 E08</title>
        <script src="./exam.js" defer></script> // atributo defer para cargar primero el html y despues el codigo js
    </head>
    <body>
    </body>
</html>
*/