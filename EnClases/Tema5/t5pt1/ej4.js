/**
 * Crea un documento html con un div. Imprime por consola las siguiente propiedades respecto al viewport
 * (usa getBoundingClientRect()): (1) left, (2) right, (3) top, (4) bottom, (5) height, (6) width
 * NOTA: Ten en cuenta que las propiedades respecto al viewport pueden no coincidir con las de CSS.
 * */

let nodo = window.document.querySelector("div");

let funccion = function () {
    console.log("IZQUIERDA" + nodo.getBoundingClientRect().left);
    console.log("DERECHA" + nodo.getBoundingClientRect().right);
    console.log("ARRIBA" + nodo.getBoundingClientRect().top);
    console.log("ABAJO" + nodo.getBoundingClientRect().bottom);
    console.log("ALTO" + nodo.getBoundingClientRect().height);
    console.log("ANCHO" + nodo.getBoundingClientRect().width);
}
window.setInterval(funccion, 5000);