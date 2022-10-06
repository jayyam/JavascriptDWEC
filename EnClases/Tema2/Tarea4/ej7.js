let miObjeto1 =
    {
        miObjeto2:
            {
                miObjeto3 :
                    {
                        valor1,
                        valor2,
                        valor3,
                    }
            }
    }

console.log(miObjeto1.miObjeto2.miObjeto3);
delete miObjeto1.miObjeto2.miObjeto3;

let miObjetoString = JSON.stringify(miObjeto1);
console.log(miObjetoString);