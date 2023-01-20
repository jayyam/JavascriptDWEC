let array = [3,2,4];

array.foreach ((value, key, array) =>
{
    //donde value = cada valor del array
    //donde key es el indice del array
    //donde array es el array completo
});

Map


let map = new map();
map.set(3, "caden");

map.foreach ((value, key, map) => {

});

Set

let set = new set();
set.add(3, "caden");

map.foreach ((value, key, set) => {
//aqui el key se corresponde con el value
});

/*
* las promesas son concurrentes en js
* las promesas son asincronas
* ok, ko = callbacks que significarian aqui return y reject
* new Promise() = constructor promesa
*
* */

const promesa = new Promise((ok, ko) =>
{
    let error = true;
    if (!error) {ok}
    else{ko}
});
function mostrarOK()
{
    console.log('ok');
}
function mostrarKO()
{
    console.log('ko');
}

promesa.then((mostrarOK).catch(mostrarKO));
//otraforma
promesa.then(() => console.log('hola')).catch(() => console.log('adios'));

const promesa2 = new Promise(((resolve, reject) =>
{
    let error =true;
    if (error){
        reject();
    }
    else{
        resolve();
    }
});

promesa2.then(todoOk).catch(todoMal);

function todoOk(res){
    console.log(res);
}
function todoMal(res){
    console.log('todomal');
}