var fruits = [];
fruits = ['apple', 'banana', 'orange'];

console.log(typeof fruits); // object
console.log(fruits.length); // 3

// Accessing array elements (Indexing)
console.log(fruits[1]); // banana

// Adding and removing elements
fruits.push('pear'); // add to end
console.log(fruits); // ['apple', 'banana', 'orange', 'pear']

fruits.pop(); // remove from end
console.log(fruits); // ['apple', 'banana', 'orange']

fruits.unshift('pear'); // add to beginning
console.log(fruits); // ['pear', 'apple', 'banana', 'orange']

fruits.shift(); // remove from beginning
console.log(fruits); // ['apple', 'banana', 'orange']

// Finding elements
fruits.push('banana'); // add to end
console.log(fruits.indexOf('banana')); // 1 (returns first index of the element)
console.log(fruits.indexOf('pear')); // -1 (returns -1 if the element is not found)

// Copying arrays
var fruitsCopy = fruits.slice(); // copy array
var fruitsCopy2 = [...fruits]; // copy array
var fruitsCopy3 = fruits; // reference array (not a copy)


// Methods for iterating over arrays without editing them
// forEach
fruits.forEach(function(item, index, array) { // function(<currentValue>, <currentIndex>, <array>)
    console.log(item, index, array);
});

// map
var mappedFruits = fruits.map(function(item, index, array) {
    return item + ' is a fruit';
});

console.log(mappedFruits); // ['apple is a fruit', 'banana is a fruit', 'orange is a fruit']

// filter
var filteredFruits = fruits.filter(function(item, index, array) {
    return item === 'banana';
});

console.log(filteredFruits); // ['banana']

// Methods for iterating over arrays and editing them
// sort
fruits.sort(); // sorts the array alphabetically
console.log(fruits); // ['apple', 'banana', 'orange']

// reverse
fruits.reverse(); // reverses the array
console.log(fruits); // ['orange', 'banana', 'apple']

// splice
fruits.splice(1, 1); // remove 1 element from index 1
console.log(fruits); // ['orange', 'apple']

fruits.splice(1, 0, 'pear', 'grape'); // add 2 elements at index 1
console.log(fruits); // ['orange', 'pear', 'grape', 'apple']

fruits.splice(1, 2, 'pear', 'grape'); // add 2 elements at index 1 and remove 2 elements
console.log(fruits); // ['orange', 'pear', 'grape']

// reduce
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function(total, num) { // function(<total>, <currentValue>, <currentIndex>, <array>)
    return total + num;
}, 0);
console.log(sum); // 15

// every
var numbers = [1, 2, 3, 4, 5];
var allPositive = numbers.every(function(value) {
    return value > 0;
});
console.log(allPositive); // true

// some
var numbers = [1, 2, 3, 4, 5];
var atLeastOnePositive = numbers.some(function(value) {
    return value > 0;
});
console.log(atLeastOnePositive); // true

