"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
var isPrimeNum = function (numToCheck) {
    for (var i = 2; i < numToCheck; i++)
        if (numToCheck % i === 0)
            return false;
    return numToCheck > 1;
};
/** prompt user to input the number they want to evaluate */
console.log(isPrimeNum(prompt('Enter number to prime check: ')));
