const calculator = require('./calculator');

test('add 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

test("subtract 5 - 3 to equal 2", () =>{
    expect(calculator.subtract(5, 3)).toBe(2);
})

test("divide 12 with 3 to equal 4", () => {
    expect(calculator.divide(12, 3)).toBe(4);
})

test("multiply 3 with 5 to equal 15", () => {
    expect(calculator.multiply(3, 5)).toBe(15);
})