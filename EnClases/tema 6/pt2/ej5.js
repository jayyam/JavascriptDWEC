async function api()
{
    try
    {
        let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let resJSON = await respuesta.json();
        let estado = respuesta.status;
        console.log(estado);
        console.log(resJSON)
    }
    catch (error)
    {
        return(error)
    }
}
api();