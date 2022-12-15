function myFunction(param, f1, f2) {
    if (typeof param === 'boolean') {
        return param ? f1() : f2();
    } else {
        console.log(`No has introducido un parametro valido`);
    }
}

function a() {
    console.log(`El valor es true`);
}

function b() {
    console.log(`El valor es false`);
}

myFunction(false, a, b);