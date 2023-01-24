class Persona3
{
    constructor(nombre, apellidos) {
        this._nombre = nombre;
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

let persona = new Persona3("Omar", "García");
persona.nombre = 'Alfonso';
persona.apellidos = 'Santana';
let fullName = persona.showFullName();
console.log(fullName);