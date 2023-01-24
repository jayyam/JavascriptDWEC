async function leerArchivo(e)
{
    var archivo = e.target.files[0];
    var lector = new FileReader();
    lector.onload = function (e){
        var contenido = e.target.result;
        let separados = contenido.split(/\r\n|\n|;/);
        let dniER = /\d{8}-?[A-Z]/gi;
        let resultado = separados.filter(palabra => (dniER.test(palabra)));
        resultado = Array.from(new Set(resultado));
        console.log(resultado);
        document.getElementById('daw').innerHTML = `<br>{resultado}<br>`
    };
    lector.readAsText(archivo);
}
async function wrapper (e)
{
    await leerArchivo(e);
}

document.getElementById('file-Input').addEventListener(wrapper('change', wrapper, false));