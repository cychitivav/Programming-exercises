console.log(global); // global is a global object in Node.js (like window in the browser)
console.log(globalThis === global); // true

// Some global functions
console.log(setInterval); // setInterval is a global function in Node.js

let i = 0;
let interval = setInterval(() => {
	if (i === 3) {
		clearInterval(interval);
	}
	console.log(i++);
}, 1000);

console.log(setImmediate); // setImmediate is a global function in Node.js
setImmediate(() => {
	console.log("Hello");
});

console.log(__dirname); // __dirname is a global variable in Node.js
console.log(__filename); // __filename is a global variable in Node.js
