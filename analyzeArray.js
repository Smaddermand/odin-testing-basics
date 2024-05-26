// analyzeArray.js

function analyzeArray(array) {
    let object = {
        average: 0,
        min: 0,
        max: 0,
        length: 0,
    };

    // Calculate sum and average
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    object.average = sum / array.length;

    // Calculate min
    object.min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < object.min) {
            object.min = array[i];
        }
    }

    // Calculate max
    object.max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > object.max) {
            object.max = array[i];
        }
    }

    // Calculate length
    object.length = array.length

    return object;
}

module.exports = analyzeArray;


