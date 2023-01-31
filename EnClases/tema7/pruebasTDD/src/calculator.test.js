const calculator = require ("./calculator");

describe('Tests de sumar', () => {

    test("sumar dos numeros", () => {
        expect (calculator.sumar(3,4)).toBe(7);
    });

    test("sumar. comprobar tipos", () => {
        expect (() => { calculator.sumar("hdasgfa",4);
        }).toThrow(TypeError);
    });
});

test("restar", () => {expect (calculator.restar(4,3)).toBe(1);});
test("multiplicar" , () => {expect (calculator.multiplicar(3,4)).toBe(12);});
test("dividir" , () => {expect (calculator.dividir(10,5)).toBe(2);});
test("raiz" , () => {expect(calculator.raiz(16)).toBe(4);})
test("aleatorio" , () => {
    const resultado = calculator.aleatorio(3,6);
    expect (resultado).toBeGreaterThanOrEqual(3);
    expect (resultado).toBeLessThanOrEqual(6);
});