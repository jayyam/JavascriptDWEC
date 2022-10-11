/**
 * Crea un objeto y recorre cada entrada (atributo) imprimiendo por consola el nombre de la propiedad y su valor.
 * */

let musicdb = [
    { grupo: 'maiden' },
    { grupo: 'sepultura' },
    { grupo: 'angra' },
    { grupo: 'opeth' },
    { grupo: 'avanstasia' },
    { grupo: 'alice in chains' },

];
musicdb.forEach(function(valor, posicion, array) {
    console.log(valor);
    console.log(posicion);

});
//console.log(array);

