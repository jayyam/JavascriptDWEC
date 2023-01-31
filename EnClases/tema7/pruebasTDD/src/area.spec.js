const Area = require("./area.js");

it("Area de un cuadrado", () => {
   const result = Area.getAreaCuadrado(3);
   expect(result).toBe(9);
});

it("Area de un rectangulo", () => {
   const result = Area.getAreaRectangulo(2,3);
   expect(result).toBe(6);
});