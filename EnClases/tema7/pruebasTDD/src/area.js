class Area
{
    static getAreaCuadrado(lado){
        return lado ** 2;
    }
    static getAreaRectangulo(base, altura){
        return base * altura;
    }
    static getAreaRombo(DiagonalMayor, DiagonalMenor){
        return (DiagonalMayor * DiagonalMenor)/2;
    }
}
module.exports = Area;