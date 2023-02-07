let respuesta = 'LISBOA';
let acierto = false;
for (let contador = 0; contador < 3 && !acierto; contador++) {
    let respUsuario = <string>prompt('Capital de Portugal: ');
    //let respUsuario2: any = prompt('Capital de Portugal: ');
    //let respUsuario3: string | null = prompt('Capital de Portugal: ');
    // @ts-ignore
    if (respUsuario.toUpperCase() === respuesta) {
        acierto = true;
        console.log('Enhorabuena, has acertado');
    }
}
if (!acierto) {
    console.log('Lo sentimos, has consumido tus 3 intentos');
}