type Beer = {
    nambre : string;
    alcohol : number;
    marca?: string;
}

type Snack = {
    nameSnack: string;
    price: number;
}

function muestra(beer: Beer): void {
    console.log(`info: ${beer.nambre} con alcohol ${beer.alcohol} marca ${beer.marca}`);
}

class Sale
{
    protected amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

     getTotal (): number{
        return this.amount;
    }
}


class SaleWithTax extends Sale
{
    private tax: number;

    constructor(tax: number, amount: number) {
    super(amount);
    this.tax = tax;
    }

    override getTotal (): number {
        return this.tax + super.getTotal();//
    }
}

let sale = new Sale(100);
const res = sale.getTotal();
console.log(res);
let salewithtax = new SaleWithTax(10, 100);
const res2 = salewithtax.getTotal();
console.log(res2);
/------/
const myBeer: Beer = {
    nambre: 'embrau',
    alcohol: 15.4,
}
muestra(myBeer);

const myBeer2: Beer = {
    nambre: 'ipa',
    alcohol: 16.8,
    marca: 'erdiger',
}
muestra(myBeer2);

const combo: Beer & Snack = {
    nambre: 'aupa',
    alcohol: 20.8,
    marca: 'alhambra',
    nameSnack: 'palomitas',
    price : 50,
}
console.log(combo);
/----/

interface drinks {
    nombreInterface : string;
    marca?: string;
}

interface alcoholicsDrinks extends drinks {
    alcoholInterface : number;
    showInfo(): string
}

interface mezclaDrinks {
    ingredientesInterface : string[];
    showInfo(): string
}

class Vino implements alcoholicsDrinks {
    alcoholInterface : number;
    nombreInterface : string;

    constructor(nombreInterface: string, alcoholInterface: number) {
        this.nombreInterface = nombreInterface;
        this.alcoholInterface =alcoholInterface;
    }
    showInfo(): string {
        return (`info: ${this.nombreInterface} con alcohol ${this.alcoholInterface}`);
    }
}

class Cocktail implements alcoholicsDrinks, mezclaDrinks {
    alcoholInterface : number;
    nombreInterface : string;
    ingredientesInterface: string[];

    constructor(nombreInterface: string, alcoholInterface: number, ingredientesInterface: string[]) {
        this.nombreInterface = nombreInterface;
        this.alcoholInterface = alcoholInterface;
        this.ingredientesInterface = ingredientesInterface;
    }
    showInfo(): string {

        const ingredientesInfo = this.ingredientesInterface.reduce((ac, e) =>
            ac + " " + e + ", ", "");

        return (`info: ${this.nombreInterface} con alcohol
                       ${this.alcoholInterface}`+ ` 
                       ${ingredientesInfo}`);
    }
}

const calimocho = new Cocktail("miniCalimocho",
    15.4,
    ['vino', 'cocacola', 'hielo', 'licor de mora']);

const rioja = new Vino('Rioja', 8.3);
const juanGil = new Vino('Ribera del Segura', 23.2);

const ad: alcoholicsDrinks[] = [calimocho, rioja, juanGil];

function muestraBebidas(drinks: alcoholicsDrinks[]): void {
    drinks.forEach(e=>console.log(e.showInfo()));
}
muestraBebidas(ad);