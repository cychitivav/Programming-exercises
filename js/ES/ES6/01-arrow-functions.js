// Normal function
function square1(x) {
  return x * x;
}

// Arrow function
const square2 = (x) => { // If it has just one parameter, we can remove the parentheses
    return x * x;
}

// Arrow function with implicit return
const square3 = x => x * x;


console.log(square1(2));
console.log(square2(2));
console.log(square3(2));
