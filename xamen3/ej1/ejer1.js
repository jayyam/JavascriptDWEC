let div = window.document.querySelector('div');

// BEFORE
let newElementBefore = document.createElement('h1'); // crear elemento
// let text = document.createTextNode('HEWO'); // generar contenido al nuevo elemento
// newElementBefore.appendChild(text); // añadir contenido al nuevo elemento

newElementBefore.innerText = 'HEWO'; // añadir contenido directamente al nuevo elemento

div.before(newElementBefore);

// AFTER
let newElementAfter = document.createElement('img'); // crear elemento img
// agregar atributos
newElementAfter.src = "https://64.media.tumblr.com/e37d346e22ac533b0c1ebadcb1553cef/d693e485a89eaa5b-21/s100x200/c5442721866337a61d5009d0e5e2631ac629700e.gifv";
newElementAfter.alt = 'alt text';

div.after(newElementAfter);





let filas = window.document.querySelector('tr');

for (let i = 0; i < filas.length; i++) {
    if (i % 2 != 0) {
        filas[i].style.backgroundColor = 'blue';
    } else {
        filas[i].style.backgroundColor = 'white';
    }
}

// FOREACH
filas.forEach((element, index) => {
    if (index % 2 == 0) {
        element.style.backgroundColor = 'pink';
    } else {
        element.style.backgroundColor = 'grey';
    }
});