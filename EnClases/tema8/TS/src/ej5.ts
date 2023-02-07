interface LocalStora {
    crearenLocS(key:string, value:any):void;
    obtenerenLocS(key:string):string;
    eliminardeLocS(key:string):void
}
class PruebaInterfaces implements LocalStora {
    crearenLocS(key: string, value: any) {window.localStorage.setItem(key, value);}
    obtenerenLocS(key: string): string | null {return window.localStorage.getItem(key);}
    eliminardeLocS(key: string):void {window.localStorage.removeItem(key);
    }
}

let test = new PruebaInterfaces();
let Objeto = {};
test.crearenLocS('nombre', JSON.stringify(Objeto));
//test.obtenerenLocS()