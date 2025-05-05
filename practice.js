const prompt = require('prompt-sync')();

let userInput = prompt('What is your name?');
console.log(userInput);
if (userInput === 'Kim') {
    console.log('Hi Kim!');
} else {
    console.log('Who?');
}