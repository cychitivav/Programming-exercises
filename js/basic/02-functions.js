// Function declaration
function sayHello() {
    console.log('Hello');
}

sayHello();

// Function expression
let sayHi = function() {
    console.log('Hi');
}

sayHi();

// Parameters
function greet(name, lastName = '') { // default parameter
    console.log(`Hello ${name} ${lastName}`);
}

greet('Cristian');
