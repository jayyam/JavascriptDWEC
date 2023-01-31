class Area
{
    static getAreaCuadrado(lado){
        return lado ** 2;
    }
    static getAreaRectangulo(base, altura){
        return base * altura;
    }
}
module.exports = Area;