const renameMe = () => {
    return true;
};

module.exports = {renameMe};

function arbol (ramas)
{
  let arbol = "x\n|"
  if (ramas ==1){arbol ="x\n |";}
  else if (ramas ==2){arbol ="xx\n |";}
  else if (ramas ==3){arbol ="xxxx\n |";}
  return arbol;
  for (let i=0; i<= ramas; i++)
  {
    for (let columna=0; columna< ramas*2-1;columna++)
    {
      arbol+="";
    }
  }
}

module.exports = {createArbol}
