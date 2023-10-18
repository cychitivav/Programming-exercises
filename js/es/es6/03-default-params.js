// Basic default params
const createUser = (name, age) => {
    var name = name || 'Cristian';
    var age = age || 25;

    console.log(`My name is ${name} and I am ${age} years old.`);
}

createUser();

// Default params in ES6
const createUser2 = (name = 'Cristian', age = 25) => {
    console.log(`My name is ${name} and I am ${age} years old.`);
}

createUser2();