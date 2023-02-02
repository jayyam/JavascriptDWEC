"use strict";
let respuesta = 'LISBOA';
let acierto = false;
for (let contador = 0; contador < 3 && !acierto; contador++) {
    let respUsuario = prompt('Capital de Portugal: ');
    if (respUsuario.toUpperCase() === respuesta) {
        acierto = true;
        console.log('Enhorabuena, has acertado');
    }
}
if (!acierto) {
    console.log('Lo sentimos, has consumido tus 3 intentos');
}
