class Persona2
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
}

let persona = new Persona2("Omar", "García");
persona.nombre = 'Alfonso';
persona.apellidos = 'Santana';
let fullName = `nombre y apellidos : ${persona.nombre} ${persona.apellidos}`;
console.log(fullName);