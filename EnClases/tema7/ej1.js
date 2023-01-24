class Persona1 {
    constructor(nombre, apellidos) {
        this._nombre = nombre;
        this.apellidos = apellidos;
    }
}

//A: devuelve un objeto
//B:
let persona = new Persona1("Omar", "García");
persona.nombre = 'OMar';
persona.apellidos = 'Santana'
console.log(JSON.stringify(persona)); //devuelve un objeto de la clase persona