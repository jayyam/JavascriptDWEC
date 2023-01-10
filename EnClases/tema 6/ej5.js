

function ejercicio5(...palabras) {
    console.log("las palabras son: " + palabras.join(';'));
    let mimap = new Map();
    palabras.forEach((palabra) => {
        if (mimap.has(palabra)) {
            mimap.set(palabra, mimap.get(palabra) + 1);
        } else {
            mimap.set(palabra, 1)
        }
    });
    return mimap;
}

let array = ["Fuen", "alba", "omar", "Antonio", "Fuen", "alba", "Antonio", "Fuen"];
let resultado = ejercicio5(array);
resultado.forEach((valor, palabra) => {
console.log(`la palabra ${palabra} se repite ${valor} vez/ces`)
})
