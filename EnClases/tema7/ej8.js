class Coche {
    _marca;
    _modelo;
    constructor(marca, modelo) {
        this._marca = marca;
        this._modelo = modelo;
    }
    get marca()
    {
        return this._marca;
    }
    set marca (marca)
    {
        this.marca = marca;
    }
    get modelo()
    {
        return this._modelo;
    }
    set modelo(modelo)
    {
        this._modelo = modelo;
    }
    toString()
    {
        return this.marca +" "+ this.modelo;
    }
}
class Quad extends Coche {
    _cilindrada;

    constructor(marca, modelo, cilindrada) {

        super(marca, modelo);
        this._cilindrada = cilindrada;
    }
    get cilindrada()
    {
        return this._cilindrada;
    }
    set cilindrada(cilindrada)
    {
        return this._cilindrada;
    }
    toString()
    {
        return this.cilindrada;
    }
    mostrarDetalles()
    {
        return super.toString() +"Con cilindrada "+ this._cilindrada;
    }
}

let miQuad = new Quad('Hummer', 'Simpsons', 1200);
console.log(miQuad.mostrarDetalles());

let miQuad2 = new Quad('Drummer', 'Flinstone', 4600);
console.log(miQuad2.mostrarDetalles());