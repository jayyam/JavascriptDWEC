async function request() {
    document.getElementById("resultado").innerHTML = `<img src="loading-gif.gif" alt="" srcSet="">`;
        try {
            let respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            let miJSON = await respuesta.json();
            if (respuesta.status === 200){
            document.getElementById(resultado).innerHTML =`
            <b>Respuesta</b>
            <p>
                ${JSON.stringify(miJSON)}
             </p>
             `;}
            else
            {
                document.getElementById("resultado")
                    .innerHTML = `<img src="http://cats.com/${respuesta.status}.jpg" alt="" srcSet="">`;
            }
            }
            catch (error)
            {
                return error;
            }
}
document.getElementById('boton').addEventListener('click', request);
