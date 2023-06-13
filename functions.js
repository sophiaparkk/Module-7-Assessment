const perf = require('execution-time')();


//1) sum zero
let sumZeroArray = [0, 0, 5 ,1]

let value = false
let sumZeroArrayFunction = (Array) => {
    for (let i=0; i < Array.length; i++) {
        for (let j=0; j<Array.length; j++) {
            if (i!==j) {
                if (Array[i]+Array[j] === 0) {
                    return value = true
                }
            }
        }
    }
}

perf.start()
sumZeroArrayFunction(sumZeroArray);
let sumZeroResults = perf.stop()
console.log("sumZero", sumZeroResults.preciseWords);
//run time = 84.4 microseconds//


//2) unique characters
let uniqueValue = true
function uniqueFunction(String) {
    for (let i=0; i<String.length; i++) {
        for (let j=0; j<String.length; j++) {
            if (i!==j) {
                if (String[i]===String[j])
                return uniqueValue = false
            }
        }
    }
}

perf.start()
uniqueFunction('hello');
let uniqueFunctionResults = perf.stop()
console.log("unique", uniqueFunctionResults.preciseWords);
//run time = 34.1 microseconds//




//3) pangram sentence


// perf.start()
// uniqueFunction('hello');
// let uniqueFunctionResults = perf.stop()
// console.log("sumZero", uniqueFunctionResults.preciseWords);
//run time = 34.1 microseconds//

//4)longest word
let longestArray = ['hi','hello','bye','goodbye']
let find_longest_word = (longestArray) => {
    for (let i=0; i<longestArray.length; i++) {
        if (longestArray[i].length<longestArray[i++].length) {
            return longestArray[i++]
        } else return longestArray[i]

    }
}

perf.start()
find_longest_word(longestArray)
let longestResults = perf.stop()
console.log("longest", longestResults.preciseWords);