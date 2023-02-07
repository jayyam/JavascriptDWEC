class Persona6 {

    static numPersonas()//creando metodos estaticos
    {
        return 120;
    }

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
class Empleado extends Persona6 {
    #sueldo;

    constructor(nombre, apellidos, sueldo) {

        super(nombre, apellidos);
        this.#sueldo = sueldo;
    }
    get sueldo()
    {
        return this.#sueldo;
    }
    set sueldo(sueldo)
    {
        try
        {
            if (sueldo < 0)
            {
                new Error("Sueldo no puede ser un valor negativo");
            }
        }
        catch(err)
            {
                console.log(err);
            }
        return this.sueldo;
    }
    showFullName()
    {
        return super.showFullName +"Cuartos"+ this.#sueldo;
    }
}
let miEmpleado = new Empleado('Alfonso', 'Santana', 1200);
console.log(miEmpleado.showFullName());