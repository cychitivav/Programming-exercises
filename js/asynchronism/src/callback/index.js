const sum = (num1, num2) => num1 + num2;

const calc = (num1, num2, callback) => callback(num1, num2);

console.log(calc(6, 2, sum));

// Timeouts

setTimeout(() => console.log("Hello World"), 3000);

function greeting(name) {
	console.log(`Hello ${name}`);
}

setTimeout(greeting, 2000, "John");

for (let i = 0; i < 1000000000; i++) {
	// Block Node.js Event Loop
	if (i === 999999999) {
		console.log("Loop finished");
	}
}

console.log("Finish");
