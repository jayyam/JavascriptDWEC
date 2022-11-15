/**
 * Expresiones regulares
 * */

var texDNI ='48499585X';
let texIBAN ='EA00 0051 1265 4598 8541 7851';
let texmatricula ="3654TGF";
let texfecha ="21/10/2001";
//let er = /[a-z]/i;// 'i' ignora mayusculas/minusculas
//let er2 = new RegExp('[a-z]','i');
function validateDNI(texDNI)
{
    var DNI = /^\d{8}-{0,1}(?![^IÑOU])[A-Z]$/
    return DNI.test(texDNI);
}

let IBAN = /([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10})/
//let IBAN2 = /^ES\d{22}(?<=\s*)/
let matricula = /^(\d){4}(\s?|-?)(?![^AEIOUQ]{1,3}$)[A-Z]{3}$/
let fecha = /(\d{2})\/(\d{2})\/(\d{4})/



console.log(mydni);
console.log(IBAN.test(texIBAN));
console.log(matricula.test(texmatricula));
console.log(fecha.test(texfecha));

var texRegex;
let DNI = /^\d{8}-{0,1}(?![^IÑOU])[A-Z]$/
while (texRegex = DNI.exec(str) != null)
{
    console.log(texRegex[0]);
}


let mydni = texDNI.match(DNI);


