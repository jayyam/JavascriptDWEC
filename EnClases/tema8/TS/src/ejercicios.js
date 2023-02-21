//ejercicio 1 -----------------------------------------------------------------------
"outDir": "./scripts/",

    "rootDir": "./src",

//ejercicio 2 -----------------------------------------------------------------------

//a)
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

//b)
let pelicula: [string, boolean, number] = ["Iron Man", true, 2001];

//c)
let miArray: string[] = ["hola", "adiós"];

//d)
let nombre: boolean | number = 5;
nombre = true

//ejercicio 3 -----------------------------------------------------------------------

let respuesta = 'LISBOA';
let acierto = false;
for (let contador = 0; contador < 3 && acierto === false; contador++) {
    let respUsuario: string | null = <string>prompt('Capital de Portugal: ');
        if (respUsuario.toUpperCase() === respuesta) {
            acierto = true;
        console.log('Enhorabuena, has acertado');
    }
}
        if (!acierto) {
            console.log('Lo sentimos, has consumido tus 3 intentos');
}

        //ejercicio 4 -----------------------------------------------------------------------

        abstract class Persona {
            public nombre: string;
        private apellido1: string;
        protected apellido2: string;

        constructor(nombre: string, apellido1: string, apellido2: string) {
            this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
  }

        showFullName(): string {
    return `${this.nombre} ${this.apellido1} ${this.apellido2}  `;
  }

        abstract getDepartamento(): string;
}

        class Empleado extends Persona {
            getDepartamento(): string {
    return 'prueba';
  }
}

        let persona: Empleado = new Empleado('aaa', 'bbb', 'ccc');
        console.log(persona.showFullName());
        console.log(persona.getDepartamento());

        //ejercicio 5 -----------------------------------------------------------------------
        interface prueba {
            setItem(key: string, value: any): void;
        getItem(key: string): string | null;
        removeItem(key: string): void;
}

        class ls implements prueba {
            setItem(key: string, value: any): void {
            window.localStorage.setItem(key, JSON.stringify(value));
    }

        getItem(key: string): string | null {
        return window.localStorage.getItem(key);
    }

        removeItem(key: string): void {
            window.localStorage.removeItem(key);
    }
}

        let algo = new ls();
        let miObjeto = { };
        algo.setItem('nombre', JSON.stringify(miObjeto));


        //ejercicio 6 -----------------------------------------------------------------------

        class Queue<a> {
            private data: a[] = [];

            enqueue(item: a) {
                this.data.push(item);
  }

            dequeue(): a | undefined {
    return this.data.shift();
  }
}

            const prueba1 = new Queue<string>();
                prueba1.enqueue('First');
                prueba1.enqueue('Second');
                prueba1.enqueue('Third');

                console.log(prueba1.dequeue());
                console.log(prueba1.dequeue());
                console.log(prueba1.dequeue());

                const prueba2 = new Queue<number>();
                    prueba2.enqueue(1);
                    prueba2.enqueue(2);
                    prueba2.enqueue(3);

                    console.log(prueba2.dequeue());
                    console.log(prueba2.dequeue());
                    console.log(prueba2.dequeue());