/**
 * Crea un bucle que imprima la serie n^2, donde n va desde 5 hasta 15 incluido.
 * Hazlo con un bucle for
 * Hazlo con un bucle while
 * Hazlo con un bucle do while
 */

function bucleFor() {
    for (let i = 5; i <= 15; i++) {
        console.log(i ** 2);
    }
}
/**------------*/
console.warn('---');
function bucleDoWhile(){
    let j = 5;
    do {
        console.log(j ** 2);
        j++;
    }
    while (j >= 5 && j <= 15)
}
/**---------------------*/
console.warn('---');
function bucleWhile() {
    k = 5;
    while (k >= 5 && k <= 15) {
        console.log(k**2);
        k++
    }
}
console.warn('---');
bucleFor();
console.warn('---');
bucleDoWhile();
console.warn('---');
bucleWhile();