let myObject = {name: 'Joe', age: 16, gender: 'Male', likes:['running','swimming']};
// console.log(myObject.name);
// console.log(myObject.age);
delete myObject.name;
console.log(myObject);
let mySecondObject = {};
mySecondObject.name = 'Joe';
mySecondObject.age = 16;
mySecondObject.gender = 'Male';
mySecondObject.likes = myObject.likes;
console.log(mySecondObject);