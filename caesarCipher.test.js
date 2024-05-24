// ceasarCipher.test.js

const ceasarCipher = require("./caesarCipher")

test("expect hi to return kl", () => {
    expect(ceasarCipher("hi")).toBe("kl");
})