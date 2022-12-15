console.warn('FOR');
for (let n = 5; n <= 15; n++) {
    console.log(n ** 2);
}

console.warn('WHILE');
let n = 5;
while (n <= 15) {
    console.log(n ** 2);
    n++;
}

console.warn('DO WHILE');
let n2 = 5;
do {
    console.log(n2 ** 2);
    n2++;
} while (n2 <= 15)