"use strict";
/** PROBLEM 1 - FizzBuzz */
for (var i = 1; i <= 100; i++) {
    // Use ternarary operators to evalute all possible combinations on a single line
    console.log((i % 15 == 0) ? "FizzBuzz" : (i % 3 == 0) ? "Fizz" : (i % 5 == 0) ? "Buzz" : i);
}
/** More readable solution */
//  for (let i = 1; i <= 100; i++) {
//    if (i % 15 == 0){
//       console.log("FizzBuzz");
//    } else if (i % 3 == 0){
//       console.log("Fizz");
//    } else if (i % 5 == 0){
//       console.log("Buzz");
//    } else {
//       console.log(i);
//    }
// }
