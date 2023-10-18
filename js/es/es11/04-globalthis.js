// In a browser:
// console.log(this === window); // true

// In Node:
// console.log(this === global); // true

// For any JavaScript environment:
console.log(this === globalThis); // true
