// Flat
const array = [1, 2, [5, 6, [7, 3, 1]], 3];

console.log(array.flat(3));

// FlatMap
const array2 = [1, 2, 3, 4, 5];

console.log(array2.flatMap((value) => [value, value * 2]));
