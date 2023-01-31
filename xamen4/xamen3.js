/**Inserta/recupera un objeto literal JS en LS (al hacer clic de ratón en el botón)
 */

let object1 =
            {
                uno: 1,
                dos: 2,
                tres: 3,
            }

function crearObjetoCookiess(){

    let jsonString = JSON.stringify(object1);
    window.localStorage.setItem("object2", jsonString);
    let object3 = JSON.parse(localStorage.getItem("object2"));
    alert(object3);
}
document.getElementById("crearObjetoCookies").innerHTML.addEventListener("click", crearObjetoCookiess);
