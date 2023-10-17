const noRepeat = new Set();

noRepeat.add(1);
noRepeat.add(2).add(3);
noRepeat.add(3); // 3 is already in the set, so it won't be added again

console.log(noRepeat); // Set { 1, 2, 3 }
console.log(new Set([1,2,3]));
console.log(noRepeat.size); // 3
console.log(noRepeat.has(1)); // true
console.log(typeof noRepeat); // object
