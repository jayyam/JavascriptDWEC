/**
 * Expresiones regulares
 * */

let tex ="a";

let er = /[a-z]/i;// 'i' ignora mayusculas/minusculas
let er2 = new RegExp('[a-z]','i');

let DNI = /^\d{8}-{0,1}(?![^IÑOU])[A-Z]$/
let IBAN = /([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10})/
let IBAN2 = /^ES\d{22}(?<=\s*)/
let matricula = /^(\d){4}(\s?|-?)(?![^AEIOUQ]{1,3}$)[A-Z]{3}$/


console.log(er.test(tex));
console.log(er2.test(tex));

