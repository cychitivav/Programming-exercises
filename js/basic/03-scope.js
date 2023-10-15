// Global scope
var a = 1;

function one() {
    // Local scope
    var b = 2;
    
    console.log(a); // 1
    console.log(b); // 2
}

one();
console.log(a); // 1
// console.log(b); // ReferenceError: b is not defined