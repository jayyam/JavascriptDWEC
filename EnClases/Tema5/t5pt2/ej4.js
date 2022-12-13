/**
 * Crea 3 div uno dentro de otro. Modifica el comportamiento para que en lugar de bubbling se comporte como capturing.
 * */
function mensaje1()
{
    console.log('fuera');
}
function mensaje2()
{
    console.log('medio');
}
function mensaje3()
{
    console.log('dentro');
}

document.querySelector("fuera").addEventListener("click", mensaje1,);
document.querySelector("medio").addEventListener("click", mensaje2,);
document.querySelector("dentro").addEventListener("click", mensaje3,);

//event.target.innerText
//document.querySelectorAll("div").forEach((element, indice) => let mifunc = window.mensaje1.addEventListener("click", mensaje1,);
//stack overflow