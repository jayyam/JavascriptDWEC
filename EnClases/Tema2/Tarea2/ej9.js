let miArray = ['Cocacola', 'Pepsi', 'Fanta', 'ColaReal', 'Monster', 'Ron', 'Agua'];

let words = miArray.filter(function (key){return key.length<5;})

console.log(words.join(', '));