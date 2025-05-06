const prompt = require('prompt-sync')();

console.log(' A.Cat\n B.Dog\n C.Bunny\n D.Hamster')
let userInput = prompt();
userInput = userInput.toLowerCase();

if (userInput === 'a') {
    console.log('Meow!');
} else if (userInput === 'b') {
    console.log('Woof!');
} else if (userInput === 'c') {
    console.log('Squeakk!');
} else if (userInput === 'd') {
    console.log('Kekeke!');
} else {
    console.log('Invalid selection');
};

