let num = 5;

for (let i = 0; i < num; i++) {
    let star = '';
    let guion = '';

    if (i % 2 === 0) {
        for (let j = 0; j <= i; j++) {
            star += '*';
        }
    } else {
        for (let j = 0; j <= i; j++) {
            guion += '-';
        }
    }
    console.log(`${star} ${guion}`);
}