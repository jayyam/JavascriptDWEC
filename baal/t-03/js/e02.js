function myFunction(num) {
    return [Math.trunc(num), Math.round(num), Math.ceil(num), Math.floor(num)];
}

let num = 6.69;
console.table(myFunction(num));