let nodo = window.document.querySelector('div');

console.log(nodo.innerHTML);

nodo.innerHTML = "<h1>HEY</h1><p>I'm a new div</p>";

nodo.style.backgroundColor = 'AntiqueWhite';
nodo.style.color = 'white';
nodo.style.width = 'fit-content';
nodo.style.border = '2px solid black';

let subnodo = nodo.querySelector('p');
subnodo.style.color = 'black';