let message:string = "hello world";
message = "3";// ha de ser del mismo tipo de dato declarado

/-----/

let texto:string = "asasdasd";
let numero:number = 123;
let booleano: boolean = true;

/-----/

let myArray: string[] = [];// hay que inicializar los array. sino da error
myArray.push("asdasd");
//myArray.push(3); no se puede si se declara antes como string

/-----/

let myobcjetc: object = {
    nombre : 'omar',
    apell : 4
};

/-----/

let variableDoble: boolean | number; //doble tipo de datos en una variable
variableDoble = true
variableDoble = 2343;

/-----/

let cualquier: any = 3;
console.log(typeof (cualquier));
cualquier ='asdasda';
console.log(typeof cualquier);

/-----/

let desconocida :unknown;
desconocida ='asdfasfsad';
console.log(typeof desconocida);
let conociendo: string;
//conociendo = desconocida; asignada directamente no se puede
let asignando :string;
if (typeof desconocida == 'string')// hay que hacerle un casting o hacerle una comprobacionde tipo
{
    asignando = desconocida;
}

/-----/

let prueba: null;
//prueba = 2; aqui da error
let prueba2: string = 'Omar';
//prueba2 = null; aqui tambien
let prueba3: string | null;
prueba3 = 'OMar';//aqui funciona

/-----/

let myArray2: [number, string, null | boolean] = [2, 'garcia', true];// han de estar en secuencia con la declaracion

/-----/

enum Color {
    Posicion = 1,
    Posicion2 = 2,
    Posicion3 = 'verde',
}// para seleccionar opciones

let posiciones : Color = Color.Posicion3;
console.log(Color.Posicion3);

/-----/

let casting: unknown = '3';

/-----/

function mostrarConsola(nombre: string): void
{
    console.log(nombre);
}

function sumar(a: number, b: number):number {
    return a + b;
}

function acabar(): never {
    throw new Error('Aplicacion ha dado error');
}

mostrarConsola('Omar');
console.log('a');
acabar();
console.log('b');// por la funcion acabar(), este ultimo console.log no es alcanzado

function mostrar(a:string, b?:string):string {//b es opcional cuando lleva (?)
    if (a && b){ return a+b;
    }
 return a;
}

let aa = 'adasfds';
let bb = 'vvvvv';
console.log(Boolean(aa && bb));

/-----/


let variableAfuncion = (parametro: string): string =>
{
    console.log(parametro);
    return parametro + 'adasdsafds';
}

//let variableBfuncion: (parametro: string) => string{}

/---------/

type Prueba = boolean | string; // para definir en una variabl tipos de datos y usarlos enmascarados
let x: Prueba;
//x = 2; // da error por que no se corresponde con el type donde no hemos declarado number

class Persona {
    public _nombre: string;// todo el mundo
    private apellido: string;// no se va a poder acceder, solo la clase donde esta
    protected apellido2: string;// clases heredadas

    constructor(nombre:string, apellido:string, apellido2:string) //si no le pasas el tipo de dato, asume que es any
    {
        this._nombre = nombre;
        this.apellido = apellido;
        this.apellido2 = apellido2;
    }

    public showFullName(): string{
        return `${this.nombre}${this.apellido}${this.apellido2}`
    }

    get nombre()
    {
        return this._nombre;
    }
    set nombre(nombre)
    {
        this._nombre = nombre;
    }
    get apellido()
    {
        return this._apellido;
    }
    set apellido(apellido)
    {
        this._apellido = apellido;
    }
    get apellido2()
    {
        return this._apellido;
    }
    set apellido2(apellido2)
    {
        this._apellido2 = apellido2;
    }
}
let persona: Persona = new Persona('Omar', 'Garcia', 'Santana');
console.log(persona.showFullName());