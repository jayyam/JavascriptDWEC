const { renameMe, createArbol} = require('../src/kata');

describe("Kata", function () {
  it("shouldReturn1Rama", function () {
   var result = createArbol(1);
      expect(result).toBe("x\n|");
  });
});

describe("2Rama", function ()
{
  it("shouldReturn2Rama", function (){
  var result = createArbol(2);
  expect(result).toBe("x\nxxx\n |");
});
});
describe("3Rama", function ()
{
  it("shouldReturn3Rama", function (){
    var result = createArbol(3);
    expect(result).toBe("x\nxxx\nxxxx\n |");
  });
});
