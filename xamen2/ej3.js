let numero =8;
let star = '*';
let guion = '-';

function triangulo(star,guion) {
    for (let i = 0; i <= numero; i++) {
        if (i % 2 == 0) {
            starres = star.repeat();
        } else {
           guionres = guion.repeat();
        }
    }
}
triangulo(numero)