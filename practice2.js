// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         console.log(`this is ${i} an even number`);
//     } else {
//         console.log(`this is ${i} an odd number`);
//     };
// }; 
for (let i = 0; i < 1000; i++) {
    if (i === 0) {
        continue
    } else {
        if (i % 9 === 0) {
            console.log(`this number ${i} is divisible by 9`);
        } else if (i % 12 === 0) {
            console.log(`this number ${i} is divisible by 12`);
        } else if (i % 13 === 0) {
            console.log(`this number ${i} is divisible by 13`);
        }
    }
}



