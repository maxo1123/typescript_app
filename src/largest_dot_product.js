"use strict";
var multiply = function (arrayOne, arrayTwo) {
    var ar = arrayOne.sort().reverse();
    var ar2 = arrayTwo.sort().reverse();
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
        sum = sum + (ar[i].valueOf() * ar2[i].valueOf());
    }
    return sum;
};
console.log(multiply([2, 1, 4], [1, 6, 4]));
