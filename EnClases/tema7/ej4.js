class Persona4 {

    static numPersonas()//creando metodos estaticos
    {
        return 120;
    }
    #enfermo = false
    get enfermo() {
        return this.#enfermo;
    }
    constructor(nombre, apellidos) {
        this.#nombre = nombre;
        this._apellidos = apellidos;
    }
    get nombre()
    {
        return this._nombre;
    }
    set nombre(nombre)
    {
        this._nombre = nombre;
    }
    get apellidos()
    {
        return this._apellidos;
    }
    set apellidos(apellidos)
    {
        this._apellidos = apellidos;
    }
    showFullName()
    {
        return this.nombre +" "+ this.apellidos;
    }
}
let persona = new Persona4("Omar", "García");
console.log(Persona4.numPersonas());
