// ----------- Math operators --------------
// + - * / %
console.log(1 + 1);
console.log(1 - 1);
console.log(2 * 2);
console.log(4 / 2);

// Modulo operator
console.log(5 % 2); // 1
console.log(4 % 2); // 0

// Increment and decrement operators
var a = 1;
console.log(a++); // 1
console.log(a); // 2
console.log(++a); // 3
console.log(a); // 3

// ------------ String operators -------------
// + +=
var a = 'Hello';
var b = 'World';
console.log(a + ' ' + b); // 'Hello World'
a += ' ' + b;
console.log(a); // 'Hello World'

// ------------ Assignment operators -------------
// = += -= *= /= %=
var b = 1;
b += 1; // b = b + 1
console.log(b); // 2
b -= 1; // b = b - 1
console.log(b); // 1

// --------- Comparison operators -------------
// == != === !== > < >= <=
console.log(1 == 1); // true
console.log(1 != 1); // false
console.log(1 === 1); // true (strict equality, compares value and type)
console.log(1 !== 1); // false
console.log(1 > 1); // false
console.log(1 < 1); // false
console.log(1 >= 1); // true
console.log(1 <= 1); // true

// ------------ Logical operators -------------
// && || !
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// ------------ Bitwise operators -------------
// & | ^ ~ << >> >>>
console.log(1 & 1); // 1
console.log(1 | 1); // 1
console.log(1 ^ 1); // 0
console.log(~1); // -2
console.log(1 << 1); // 2
console.log(1 >> 1); // 0
console.log(1 >>> 1); // 0 (unsigned right shift)

// ------------ Other operators -------------
// spread operator
var a = [1, 2, 3];
var b = [...a, 4, 5, 6];
console.log(b); // [1, 2, 3, 4, 5, 6]

// typeof
var a = 1;
console.log(typeof a); // number

// instanceof
var a = [];
console.log(a instanceof Array); // true
console.log(a instanceof Object); // true
console.log(a instanceof String); // false

// delete
var a = {
    b: 1
};
console.log(a); // { b: 1 }
delete a.b;
console.log(a); // {}

// in (check if key or index exists in object or array)
var a = {
    b: 1
};

console.log('b' in a); // true
console.log('c' in a); // false

var l = [1, 2, 3];
console.log(0 in l); // true
console.log(3 in l); // false