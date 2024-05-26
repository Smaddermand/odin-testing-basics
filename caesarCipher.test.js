// caesarCipher.test.js

const caesarCipher = require("./caesarCipher")

test("expect hi to return kl", () => {
    expect(caesarCipher("hi", 3)).toBe("kl");
})

test("expect hello to return olleh", () => {
    expect(caesarCipher("hello", 3)).toBe("khoor");
})

test("expect hi to be ij test shift 1 ", () => {
    expect(caesarCipher("hi", 1)).toBe("ij");
})

test("test capitalization", () => {
    expect(caesarCipher("Hi", 3)).toBe("Kl");
})

test("punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})

test("wrapping", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
})
