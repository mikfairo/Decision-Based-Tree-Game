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

function secondRiddle() {
    console.log('What can fill a room but takes up no space?\n A. Air\n B. Feathers\n C. Light\n D. Gas\n');
    let userInput = prompt();
    userInput = userInput.toLowerCase();

    let correct = false;
    if (userInput === 'a') {
        console.log('Incorrect!');
    } else if (userInput === 'b') {
        console.log('Incorrect!');
    } else if (userInput === 'c') {
        console.log('Correct!');
        correct = true;
    } else if (userInput === 'd') {
        console.log('Incorrect!');
    } else {
        console.log('Invalid selection');
    };
}

let correct = firstRiddle(); 
while (true) {
    if (correct) {
        secondRiddle();   
    } else {
        firstRiddle();
    };
};


