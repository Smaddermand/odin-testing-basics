// reverseString.js

function reverseString(string) {
    
    const reversedString = string.split("").reverse().join("");

    return reversedString
}

module.exports = reverseString;