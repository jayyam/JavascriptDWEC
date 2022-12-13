let nodo = window.document.querySelector('div'); // selecciona el primer div
nodo.style.backgroundColor = "red";

let myFunction = function () {
    console.log('width', nodo.getBoundingClientRect().width);
    console.log('height', nodo.getBoundingClientRect().height);
    console.log('top', nodo.getBoundingClientRect().top);
    console.log('bottom', nodo.getBoundingClientRect().bottom);
    console.log('left', nodo.getBoundingClientRect().left);
    console.log('right', nodo.getBoundingClientRect().right);
}

window.setInterval(myFunction, 5000);