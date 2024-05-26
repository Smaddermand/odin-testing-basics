// analyzeArray.js

function analyzeArray(array){
    object = {
        average: 0,
        min: 1,
    }

    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    object.average = sum / array.length



    return object;
}

module.exports = analyzeArray;