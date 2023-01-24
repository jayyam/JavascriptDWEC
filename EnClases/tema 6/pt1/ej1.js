/** Crea un map con varias keys y values de diferentes tipos.
 *  Recorre el map imprimiendo por pantalla el tipo de datos de cada key y de cada value, la key, y su value.
 */


let miMap = new Map();
miMap.set(87, 'Omar');
miMap.set('3', 'trillones');
miMap.set(true, 'falsi');


for (let entry of Map.entries())
{
    console.log("La clave es "+entry[0]+" y su valor es"+typeof entry[0]);
    console.log("La clave es "+entry[1]+" y su valor es"+typeof entry[1]);
    console.log("La clave es "+entry[2]+" y su valor es"+typeof entry[2]);
}
