var tasks =
    [
        { title: 'Hacer Nacho' },
        { title: 'Hacer tienda' },
        { title: 'Hacer servidores' },
        { title: 'Hacer xml' },
        { title: 'Hacer cthulu' },
        { title: 'Eliminando' },
    ];
//Variable Array
var todoListElement = document.querySelector('#EnClases');//Se le pasa CSS aqui//https://htmlcheatsheet.com/css/
<!--Cuando se usa class para referirse a elementos del arbol DOM, se le pasa al querySelector . -->
for (var i = 0; i < tasks.length; i += 1)//Iterando en la variable task que va a recorrer nuestro arbol DOM
{
    var task = tasks[i];//Igualando el contenido de la variable en el Array, por cada iteracion,
    var li = document.createElement('li');//Creando elemento HTML con javascript en el arbol DOM. en este caso una lista
    li.textContent = task.title;//Diciendole con textContent tiene que ser lo que tenga task el li(elemento creado del arbol DOM)
    todoListElement.appendChild(li);//Diciendole que el li(elemento del arbol creado) tiene que estar dentro del ul
}
setTimeout(function deFlecha()
{var deleteando = document.getElementById(li.textContent='Eliminando');
    todoListElement.removeChild(li);},2000)//timer que recibe una funcion anonima en y el timepo en ms en el segundo parametro

