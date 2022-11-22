let valor = '';
let IBANRegEx = /([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10})/
var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
let visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

switch (true)
{
    case IBANRegEx.test(valor):
        console.log ('IBAN');
        break;

    case mastercardRegEx.test(valor):
        console.log ('MASTERCARD');
        break;

    case visaRegEx.test(valor):
        console.log ('VISA');
        break;

    default:
        console.log('No es una tarjeta ni un numero de cuenta');
        break;
}
