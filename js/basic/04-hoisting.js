// ---------------- Var hoisting -------------------
console.log(a); // undefined (the variable is declared in the creation phase but not initialized)
var a = 1;

// Code above is equivalent to:
var a;
console.log(a); // undefined
a = 1;

// -------------- Function hoisting -----------------
smile(); // Returns ':)' (the function is declared and initialized in the creation phase)

function smile() {
    console.log(':)');
}

// When a function is assigned to a variable, only the variable is hoisted (or declared), not the function
// frown(); // TypeError: frown is not a function

var frown = function() {
    console.log(':(');
}
