/**Inserta un array en LS y recupéralo (al hacer clic de ratón en el botón - sólo puntúa la recuperación).*/

let miArray = [1,2,4,3,5,6];
function insertarArrayLSS(){
    window.localStorage.setItem('miArray', Array);

    let array2 = localStorage.getItem('miArray').split(",");
    alert(array2);
}
document.getElementById("insertarArrayLS").innerHTML.addEventListener("click", insertarArrayLSS,);
