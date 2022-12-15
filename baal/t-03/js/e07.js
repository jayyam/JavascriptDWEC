function myFunction(text = '') {
    let arr = Array.from(text.toLowerCase());
    return arr.filter((char) => char >= 'a' && char <= 'z' || char === 'ñ').length;
}

let text = 'hewo29!!!!!';
console.log(myFunction(text));