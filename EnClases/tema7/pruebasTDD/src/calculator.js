module.exports = {
    sumar: function (a, b) {
        if ((typeof a !== "number") || (typeof b !== "number"))
        {
            throw new TypeError('Los parametros deben ser numericos');
        }
        return a + b;
    },
    restar(a,b) {return a - b;},//no hace falta especificar los objetos como clave/valor como en el anterior
    multiplicar (a,b) {return a*b;},
    dividir (a,b) {return a/b;},
    raiz (a) {return Math.sqrt(a)},
    aleatorio (min, max) {return Math.random() * ( max - min + 1 ) + min;}
}