const Area = require("./area.js");

it("Area de un cuadrado", () => {
   const result = Area.getAreaCuadrado(3);
   expect(result).toBe(9);
});

it("Area de un rectangulo", () => {
   const result = Area.getAreaRectangulo(2,3);
   expect(result).toBe(6);
});

it("Area de un Rombo", () => {
   const result = Area.getAreaRombo(8, 4);
   expect(result).toBe(16);
});