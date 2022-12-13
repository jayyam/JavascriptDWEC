
let funcsion = window.setInterval(function()
{
    console.log(location.href);
    console.log(navigator.userAgent);

}, 2000);

document.getElementById("boton1").addEventListener("click", funcsion);

let funcsion2 = document.body.style.backgroundColor = 'red';

document.getElementById("boton2").window.addEventListener("click", funcsion2);

/**
 *
 * Botón 2. Al hacer doble clic deberás cambiar el fondo del cuerpo del documento HTML. Resuélvelo con ondblclick y con addEventListener
 *
 * setTimeout(() => location.href = "https://www.filmaffinity.com/es/film483861.html ", 5000);
 *
 *
 *
 * window.addEventListener('click', () => {
 *     document.body.style.backgroundColor = 'red';
 * });
 * function changeColor(e)
 * {document.body.style.backgroundColor = e.target.getAttribute('data-color');}
 * document.querySelectorAll('button').forEach(boton => {boton.addEventListener('click', changeColor);});
 * */