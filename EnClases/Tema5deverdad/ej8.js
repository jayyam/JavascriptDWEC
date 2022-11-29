fetch('https://dummy.restapiexample.com/api/v1/employees')
    .then(function (respuesta)
    {
        console.log(respuesta.status)
        document.getElementById("imagen").outerHTML="<img src='https://http.cat/" + respuesta.status + "'>";
    })