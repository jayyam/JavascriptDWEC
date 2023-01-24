class Persona5 {

    static numPersonas()//creando metodos estaticos
    {
        return 120;
    }
    #enfermo = false
    #nombre;
    #apellidos;
    get enfermo() {
        return this.#enfermo;
    }
    constructor(nombre, apellidos) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
    }
    get nombre()
    {
        return this.#nombre;
    }
    set nombre(nombre)
    {
        this.#nombre = nombre;
    }
    get apellidos()
    {
        return this.#apellidos;
    }
    set apellidos(apellidos)
    {
        this.#apellidos = apellidos;
    }
    showFullName()
    {
        return this.nombre +" "+ this.apellidos;
    }
}
let persona = new Persona5("Omar", "García");
console.log(Persona4.numPersonas());