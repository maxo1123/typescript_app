export {};
const prompt = require('prompt-sync')();

const isPrimeNum = (numToCheck:number) => {
    for(let i = 2; i < numToCheck; i++)
      if(numToCheck % i === 0) return false;
    return numToCheck > 1;
  }

/** prompt user to input the number they want to evaluate */ 
console.log(isPrimeNum(prompt('Enter number to prime check: ')));