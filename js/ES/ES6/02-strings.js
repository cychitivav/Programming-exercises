// Normal strings
const name = 'Cristian';
const age = 25;

const sentence = 'My name is ' + name + ' and I am ' + age + ' years old.';
console.log(sentence);

// ------------------ Template strings ----------------- 
// This uses backticks (`) instead of single quotes (')
const sentence2 = `My name is ${name} and I am ${age} years old.`;
console.log(sentence2);

// ----------------- Multiline strings -----------------
// Normal strings
const sentence3 = 'Hello\n' + 'my name is\n' + 'Cristian';
console.log(sentence3);

// Template strings
const sentence4 = `Hello
my name is
Cristian`;
console.log(sentence4);