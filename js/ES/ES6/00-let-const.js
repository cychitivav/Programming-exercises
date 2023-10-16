// Before ES6, variables are declared using var keyword
var name = 'Cristian';
name = 'Lucas';

console.log(name); // Lucas

// ES6 introduces two new ways to declare variables: let and const
let fruit = 'apple';
fruit = 'banana';

console.log(fruit); // banana

const vegetable = 'carrot';
// vegetable = 'potato'; // TypeError: Assignment to constant variable.


// var is function scoped and let and const are block scoped
// var
if (true) {
    var a = 1;
}

console.log(a); // 1

// let and const
if (true) {
    let b = 1;
    const c = 2;
}

// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined
