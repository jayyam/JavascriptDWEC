/**
 * Crea un documento html que tenga una tabla con 4 filas.
 * Mediante JS modifica el estilo para que las filas pares tengan un fondo gris y las impares un fondo rosa.
 * */



let np = document.querySelector("#lista");

let nh1 = document.createElement("li");
nh1.innerText = "NODO HIJO 1";

let nh2 = document.createElement("li");
nh1.innerText = "NODO HIJO 1";
np.append(nh1);

let nh2 = document.createElement("li");
nh1.innerText = "NODO HIJO 1";
np.prepend(nh2);

let nh2 = document.createElement("li");
nh1.innerText = "NODO HIJO 1";
np.prepend(nh2);

let nh2 = document.createElement("li");
nh1.innerText = "NODO HIJO 1";
np.prepend(nh2);