var cadena ='vaina que son vainas 5 lobos de la loba';

switch (true)
{
    case /vaina/.exec(cadena)://expresion regular
        console.log('exacta');
        break;
    case /lobos/.exec(cadena)://expresion regular

        console.log('lob@')
        break;
    case /vainas/.exec(cadena)://expresion regular
        console.log('vaina+')
        break;
    case /[0-9]/.exec(cadena)://expresion regular
        console.log('numero')
        break;
}

let str = "Mr red owns a red bike and a red car.";

let newstr = str.replace(/red/gi, 'blue');
console.log(newstr);

let newstr2 = str.replaceAll(/expresionRegular/, 'valor a sustituio');
console.log(newstr2);