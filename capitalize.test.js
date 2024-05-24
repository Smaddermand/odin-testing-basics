const capitalize = require('./capitalize');

test('capitalize first character', () => {
  expect(capitalize("soren")).toBe("Soren");
});