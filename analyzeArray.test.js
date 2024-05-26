// analyzeArray.js

const analyzeArray = require("./analyzeArray");

test("return array average", () => {
    const data = [1, 8, 3, 4, 2, 6]
    expect(analyzeArray(data).average).toEqual(4);
});

test("return array min", () => {
    const data = [1, 8, 3, 4, 2, 6]
    expect(analyzeArray(data).min).toEqual(1);
});