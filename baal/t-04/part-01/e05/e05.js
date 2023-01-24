let filas = window.document.querySelectorAll('tr'); // devuelve una NodeList con todos los elementos 'tr'

// FOR
for (let i = 0; i < filas.length; i++) {
    if (i % 2 === 0) {
        filas[i].style.backgroundColor = 'pink';
    } else {
        filas[i].style.backgroundColor = 'grey';
    }
}

// FOREACH
filas.forEach((element, index) => {
    if (index % 2 === 0) {
        element.style.backgroundColor = 'pink';
    } else {
        element.style.backgroundColor = 'grey';
    }
});