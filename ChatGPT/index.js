//https://platform.openai.com/account/api-keys
function enviarPregunta() {

    document.getElementById("pensando").innerHTML = "<img style='width: 150px' src='loading.gif'/>";

    let pregunta = document.getElementById("pregunta").value;
    let model = document.getElementById("model").value;
    let temperature = new Number(document.getElementById("temperature").value);
    let max_tokens = new Number(document.getElementById("max_tokens").value);
    let top_p = new Number(document.getElementById("top_p").value);
    let frequency_penalty = new Number(document.getElementById("frequency_penalty").value);
    let presence_penalty = new Number(document.getElementById("presence_penalty").value);
    let n = new Number(document.getElementById("n").value);
    let stop = document.getElementById("stop").value;

    fetch('https://api.openai.com/v1/completions', {//para crear mi clave personalizada
        method: 'POST',
        body: JSON.stringify({
            "model": model,
            "prompt": pregunta,
            "temperature": temperature,
            "max_tokens": max_tokens,
            "top_p": top_p,
            "n": n,
            "stop": stop,
            "frequency_penalty": frequency_penalty,
            "presence_penalty": presence_penalty
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ....'//aqui va la clave
        },
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("pensando").innerHTML = "";
            let chatRespuesta = `<br><b>YO: </b> ${pregunta}`;

            data.choices.forEach(element => {
                chatRespuesta += `<br><b>MÁQUINA: </b> ${element.text}`;
            });
            document.getElementById("respuesta").innerHTML = '<br></br>' + chatRespuesta + document.getElementById("respuesta").innerHTML;

        })
        .catch(error => {
            document.getElementById("pensando").innerHTML = "";
            document.getElementById("respuesta").innerHTML = error + "<br><br>" + document.getElementById("respuesta").innerHTML;

        });
}

document.getElementById("pregunta").addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        enviarPregunta();
        return false;
    }
});

function showParameters() {
    document.getElementById("parametros").classList.toggle("ocultar");
}