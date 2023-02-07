class ColaEnteros {
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
let extraidoEnteros: number = pilaEnteros.extraer();