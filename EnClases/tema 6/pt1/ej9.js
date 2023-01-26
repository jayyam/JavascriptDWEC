/**anagrama*/

/*let anagram = ['OMAR', 'MORA', 'ROMA', 'RAMO', 'AMOR', 'PAN', 'NAP',];

function aclean(arr)
{
    let clean = new Set();
    let aux = [];

    arr.forEach((value) =>{
        let text= value.toLowerCase().split('').sort().join('');
        let size = clean.size
        clean.add(text);
        if ()
    })
}
*/
function array(arr) {
    let map = new Map();
    for (let word of arr) {
        let palabra = word.toLowerCase().split('').sort().join('');
        map.set(palabra, word);
    }
    return Array.from(map.values());
}
console.log(
    array(['OMAR', 'MORA', 'ROMA', 'RAMO', 'AMOR', 'PAN', 'NAP',])
);





