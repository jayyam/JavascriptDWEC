/**class ColaEnteros {
    private vec: x[] = [];

    insertar(x: vec) {
        this.vec.push(x);
    }
    extraer (): vec | null | undefined {
        if (this.vec.length > 0 ){
            return this.vec.shift();
        }
        else return null;
    }
}

let ColaEntera = new ColaEnteros<string>();
ColaEntera.insertar('uno');
ColaEntera.insertar('dos');
let extraidoEnteros: number = pilaEnteros.extraer();*/

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