///asinc await

function imprimirAdios()
{
    console.log('adios')
}

async function imprimirPantalla()
{
    for (let i=0;i<=1000;i++)
    {
        i++
    }
    return 'hola';
}
async function wrapper() {
    let resultado = await imprimirPantalla();
    console.log(resultado);
}
wrapper();
imprimirAdios();


/----------------/

async function llamarAPI()
{
    let resultado = await fetch('https://jsonplaceholder.typicode.com/posts');
    let resultado2 = await resultado.json;
    console.log(resultado2);
}

let hola = llamarAPI();
console.log(hola);