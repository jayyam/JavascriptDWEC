/**
 * Cree un script que defina un objeto que incluya a su vez otro objeto, y este a su vez otro.
 * Imprime por consola todas las propiedades del objeto más interno. Finalmente elimina el objeto más interno.
 * */


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