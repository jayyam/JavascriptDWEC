/**Haz una llamada GET fetch (al hacer clic de ratón en el botón)
 * a https://jsonplaceholder.typicode.com/posts/1.
 * En caso de que el estado de la respuesta sea diferente a 200 lanza una excepción.
 * Si la respuesta tiene el código 200 muestra el contenido JSON en el documento HTML.*/


function Fetchs(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.status())
        .then(json => console.log(json))
}

document.getElementById("Fetch").innerHTML.addEventListener("click", Fetchs,);




















//POST/PUT
fetch('httpage' , {
    method: "POST/PUT",
    body: JSON.stringify({
        name: 'test',
        salary: '123',
        age: '23'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
    .then(response => response.json())
    .then(json => console.log(json))

//DELETE
fetch('httpage', {
    method: 'DELETE',
    body: JSON.stringify(
        {
            "status": "success",
            "message": "successfully! deleted Records"
        })
});