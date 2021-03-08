export {};
const prompt = require('prompt-sync')();

/** JUSTIFICATION
 *  I decided to use a Map for this task as it would allow me to use the key as the card name and assign it a value that can be used for the sum total.
 *  This removes the need for a giant array with cards plus values or multiple arrays, one holding cards and the other holding values.
 * 
 *  A Map holds no set order aside from the key and its associated value, meaning that it is techincally shuffled already upon creation.
 * 
 *  By using a map, once the key has been randomly selected, the value of the card is already known. This allows me to skip if statements checking the 
 *  card dealt and then assigning it a value of 1 or 10 if it is ace, jack, queen, king. 
 */

const cardSuits:Array<string>  = ['Clubs','Diamonds','Spades','Hearts'];
let cardMap = new Map();
const deckOfCards = new Map();

/** loop over suits, create a set of suits for each card value */
for (let i = 0; i < cardSuits.length; i++) {
    var suit = cardSuits[i];
    cardMap = new Map([
        ['Ace of '   + suit,1],
        ['1 of '     + suit,1],
        ['2 of '     + suit,2],
        ['3 of '     + suit,3],
        ['4 of '     + suit,4],
        ['5 of '     + suit,5],
        ['6 of '     + suit,6],
        ['7 of '     + suit,7],
        ['8 of '     + suit,8],
        ['9 of '     + suit,9],
        ['10 of '    + suit,10],
        ['Jack of '  + suit,10],
        ['Queen of ' + suit,10],
        ['King of '  + suit,10]]);

    // add each value to deck of cards Map
    cardMap.forEach((value, key) => {
        deckOfCards.set(key, value);
    });
}

/** prompt user to input the number of cards they want to deal */
const cardsToDeal = (function ask():number {
    var num = prompt('How many cards would you like to deal? ');
    // accept input if value is a number and between 1-10
    return isNaN(num)|| +num > 10 || +num < 1 ? ask() : num;
}());

let dealCards = (numOfCards:number) => {
    let hand:Array<string> = [];
    let sumOfCards = 0;
    for (let i = 0; i < numOfCards; i++) {
        // get random key from map (shuffle)
        var card = Array.from(deckOfCards.keys())[Math.floor(Math.random() * Array.from(deckOfCards.keys()).length)];
        // get value of random key for total sum of cards
        sumOfCards = sumOfCards + deckOfCards.get(card);;
        // add card to hand array
        hand.push(card);
        // remove card after it has been assigned from the deck so it cannot be reassigned
        deckOfCards.delete(card);
    }
    return hand + " - Total Value: " + sumOfCards;
}

console.log(dealCards(cardsToDeal));