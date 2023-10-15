// ------------ if statements --------------
var a = 1;

if (a === 1) {
    console.log('a is 1');
} else if (a === 2) {
    console.log('a is 2');
} else {
    console.log('a is not 1 or 2');
}

// ------------ switch statements --------------
var a = 1;

switch (a) {
    case 1:
        console.log('a is 1');
        break;
    case 2:
        console.log('a is 2');
        break;
    default:
        console.log('a is not 1 or 2');
}

// switch with break
var a = 1;

switch (a) { // This will print 'a is 1' and 'a is 2' because there is no break statement
    case 1:
        console.log('a is 1');
    case 2:
        console.log('a is 2');
        break;
    case 3:
        console.log('a is 3');
    default:
        console.log('a is not 1 or 2');
}


// ternary operator
var a = 1;

var b = a === 1 ? 2 : 3;
console.log(b); // 2



