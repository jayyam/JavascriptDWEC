/* Implementación con promesas */
function doTask (iterations) {
    return new Promise((resolve, reject) => {
        const numbers = [];
        for (let i = 0; i < iterations; i++) {
            const number = 1 + Math.floor(Math.random() * 6);
            numbers.push(number);
            if (number === 6) {
                reject({
                    error: true,
                    message: "Se ha sacado un 6"
                });
            }
        }
        resolve(resultado);
    });
}
doTask(10).then(bien).catch(mal);

function bien(resultado)
{
    console.log("Tiradas correctas: ", result.value);
}
function mal(resultado)
{
    console.error("Ha ocurrido algo: ", err.message);
}