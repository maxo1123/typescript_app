"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
var anagramChecker = function (wordOne, wordTwo) {
    // lowercase both words, split each string into an array, sort the array, join the array elements into a string and compare both inputs
    return wordOne.toLowerCase().split('').sort().join('') == wordTwo.toLowerCase().split('').sort().join('');
};
/** prompt user to input the words they want to evaluate */
console.log(anagramChecker(prompt('Enter your first word: '), prompt('Enter your second word: ')));
