const multiply = (arrayOne:Array<number>, arrayTwo:Array<number>) => {
    let ar = arrayOne.sort().reverse();
    let ar2 = arrayTwo.sort().reverse();
    let sum: number = 0;
    // after sorting and reversing both arrays times each instance of i together 
    for (let i = 0; i < ar.length; i++) {
        sum = sum + (ar[i].valueOf() * ar2[i].valueOf());    
    }

    return sum;
}

console.log(multiply([2,1,4], [1,6,4]));