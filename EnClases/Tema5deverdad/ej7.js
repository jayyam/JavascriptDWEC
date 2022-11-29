//GET -----

fetch('https://dummy.restapiexample.com/api/v1/employees')
    .then(response => response.json())
    .then(json => console.log(json))

//GET2 -----

fetch('https://dummy.restapiexample.com/api/v1/employees/1')
    .then(response => response.json())
    .then(json => console.log(json))

//POST -----{"name":"test","salary":"123","age":"23"}

fetch('https://dummy.restapiexample.com/api/v1/create' , {
    method: "POST",
    body: JSON.stringify({
        name: 'test',
        salary: '123',
        age: '23'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'//tipo MIME de lo que le voy a enviar en el cuerpo: aplication/json
    }
})
    .then(response => response.json())
    .then(json => console.log(json))

//PUT ----

fetch('https://dummy.restapiexample.com/api/v1/update/21' , {
    method: "PUT",
    body: JSON.stringify({
        "name": "test",
        "salary": "123",
        "age": "23",
        "id": 25
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'//tipo MIME de lo que le voy a enviar en el cuerpo: aplication/json
    }
})
    .then(response => response.json())
    .then(json => console.log(json))

//DELETE --

fetch('https://dummy.restapiexample.com/api/v1/delete/2', {
    method: 'DELETE',
    body: JSON.stringify(
        {
            "status": "success",
            "message": "successfully! deleted Records"
        })
});
