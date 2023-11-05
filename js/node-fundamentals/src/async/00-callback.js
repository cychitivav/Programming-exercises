// function IAmAsynchronous(myCallback) {
// 	console.log("Hello, I am asynchronous");

// 	setTimeout(() => {
// 		console.log("I am being executed asynchronously");
// 	}, 1000);

// 	myCallback();
// }

// console.log("Starting process...");
// IAmAsynchronous(() => {
// 	console.log("Finishing process...");
// });

// More callbacks
function hello(name, callback) {
	setTimeout(() => {
		console.log(`Hello ${name}`);
		callback(name);
	}, 1500);
}

function bye(name, anotherCallback) {
	setTimeout(() => {
		console.log(`Bye ${name}`);
		anotherCallback(name);
	}, 1000);
}

console.log("Starting process...");
hello("Luis", (name) => {
	bye(name, () => {
		console.log("Finishing process(with callbacks)...");
	});
});

hello("Jorge", () => {});
bye("Jorge", () => {
	console.log("Finishing process(without callbacks)...");
});
