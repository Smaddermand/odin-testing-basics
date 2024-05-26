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

test("return array min 1 at the end", () => {
    const data = [6, 8, 3, 4, 2, 6, 1]
    expect(analyzeArray(data).min).toEqual(1);
});

test("return array max", () => {
    const data = [1, 8, 3, 4, 2, 6];
    expect(analyzeArray(data).max).toBe(8);
});

test("return array max, largest first", () => {
    const data = [8, 1, 3, 4, 2, 6]
    expect(analyzeArray(data).max).toEqual(8);
});

test("return array length", () => {
    const data = [8, 1, 3, 4, 2, 6]
    expect(analyzeArray(data).length).toEqual(6);
});

