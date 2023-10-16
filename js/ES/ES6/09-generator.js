function* iterator(array) {
    for (const element of array) {
        yield element;
    }
}

const gen = iterator([1, 2, 3]);
console.log(gen.next().value); // 1
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }