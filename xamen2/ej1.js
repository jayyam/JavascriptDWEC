let objeto =
    {
        cad1 : 'cadenaca1',
        cad2 : 'cadenosa2',
        cad3 : 'cadeneta3'
    }

for (let key of objeto)
{
 prop = key
}
for (let value in objeto)
{
    atrib = value;
}
console.log("La key es: "+prop+" y el valor es : "+atrib);