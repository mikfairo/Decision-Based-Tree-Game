const prompt = require('prompt-sync')();

function firstRiddle() {
    console.log(' Im tall when Im young, and Im short when Im old. What am I?\n A. Measuring Tape\n B. A Candle\n C. Age\n D. A Tree\n');
    let userInput = prompt();
    userInput = userInput.toLowerCase();

    let correct = false;

    if (userInput === 'a') {
        console.log('Incorrect!');
    } else if (userInput === 'b') {
        console.log('Correct!');
        correct = true;
    } else if (userInput === 'c') {
        console.log('Incorrect!');
    } else if (userInput === 'd') {
        console.log('Incorrect!');
    } else {
        console.log('Invalid selection');
    };
    return correct;
}

let correct = firstRiddle(); 

if (correct) {
    secondRiddle();
}

