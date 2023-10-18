// Arrays destructuring
let fruits = ['apple', 'banana'];

let [first, second] = fruits;

console.log(first, second); // apple banana


// Objects destructuring
let person = {
    name: 'Cristian',
    age: 25
};

let {name, age} = person;

console.log(name, age); // Cristian 25 

// Spread operator
fruits = ['apple', 'banana', 'orange', 'strawberry'];

[first, second, ...restFruits] = fruits;

console.log(first, second, restFruits); // apple banana ['orange', 'strawberry']

// Spread operator in objects
let person2 = {
    name: 'Cristian',
    age: 25
};

let person3 = {
    ...person2,
    country: 'Colombia'
};

// Rest
function sum (...numbers) {
    return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
