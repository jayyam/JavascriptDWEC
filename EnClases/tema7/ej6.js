class Persona6 {

    static numPersonas()//creando metodos estaticos
    {
        return 120;
    }
    #nombre;
    #apellidos;
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
class Empleado extends Persona6 {
    #sueldo;

    constructor(nombre, apellidos, sueldo) {

        super(nombre, apellidos);
        this.#sueldo = sueldo;
    }
    showFullName()
    {
        return super.showFullName +"Cuartos"+ this.#sueldo;
    }

}

let miEmpleado = new Empleado('Alfonso', 'Santana', 1200);
console.log(miEmpleado.showFullName());