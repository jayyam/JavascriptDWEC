/** Importar las librerías getJson y postJson
import getJson from 'getJson';
import postJson from 'postJson';*/

const fetchData = (url, options = {}) => {
    return fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        ...options,
    }).then(res => res.json())
};

export const getJson = (url, params) => {
    const urlParams = params && Object.entries(params)
        .reduce((acc, [name, value]) => `${acc}${name}=${value}&` , '?')
        .slice(0, -1);
    return fetchData(url + urlParams);
};

export const postJson = (url, params) => {
    return fetchData(url, {
        method: 'POST',
        body:JSON.stringify(params)
    });
};




// URI a la que se quiere hacer petición GET
const getUrl = 'https://www.example.com/get';

// URI a la que se quiere enviar petición POST
const postUrl = 'https://www.postSson.html';

// Realizar una petición GET a la URL especificada
getJson(getUrl)
    .then(response => {
        // Procesar la respuesta obtenida
        // ...
    })
    .catch(error => {
        // Procesar el error en caso de que ocurra
        // ...
    });

// Crear un objeto con los datos que se quieren enviar en la petición POST
const data = {
    id: 1,
    name: 'John Doe'
};

// Realizar una petición POST a la URL especificada, enviando los datos del objeto
postJson(postUrl, data)
    .then(response => {
        // Procesar la respuesta obtenida
        // ...
    })
    .catch(error => {
        // Procesar el error en caso de que ocurra
        // ...
    });