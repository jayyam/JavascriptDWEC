abstract class Persona {
    public _nombre: string;// todo el mundo
    private apellido: string;// no se va a poder acceder, solo la clase donde esta
    protected apellido2: string;// clases heredadas

    constructor(nombre: string, apellido: string, apellido2: string) //si no le pasas el tipo de dato, asume que es any
    {
        this._nombre = nombre;
        this.apellido = apellido;
        this.apellido2 = apellido2;
    }

    public showFullName(): string {
        return `${this.nombre}${this.apellido}${this.apellido2}`
    }

    public abstract getDepartamento(): string;
}

class Empleado extends Persona {

    getDepartamento(): string {
        return 'prueba';
    }
}

let persona: Empleado = new Empleado('aaa', 'bbb', 'ccc');
console.log(persona.showFullName());
console.log(persona.getDepartamento());