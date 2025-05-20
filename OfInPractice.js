let myObject = {name: 'Mia', age: 23};
let myArray = [1,2,3];

for (let i in myObject) {
    console.log(i);
    console.log(myObject[i]);
}

for (let i of myArray) {
    console.log(i);
}
