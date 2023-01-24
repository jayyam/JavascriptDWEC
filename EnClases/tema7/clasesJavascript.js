//----clases----/
class Persona
{//constructor
    constructor(nombre, apellidos) {
        this._nombre = nombre;//propiedad privada ya que se usa = '_variable'.
        this.apellidos = apellidos;//propiedad
    }
    //---getters & setters----/

    get nombre()
    {
        console.log("hola");
        return this._nombre;
    }
    set nombre(nombre)
    {
        this._nombre = nombre;
    }
}
let persona = new Persona("Omar", "García");
persona.nombre = 'Alfonso'; // Indirectamente llamará al método nombre
console.log(persona.nombre);
//let name = persona.nombre; // Indirectamente va a llamar al método nombre();


//---------/
class PersonaEnfermo
{
    #enfermo = false// clase privada. Se le mete almohadilla. Hay que crearlas como tal antes de usarlas
}



