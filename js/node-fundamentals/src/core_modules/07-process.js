// Write buffer
process.stdout.write("Hello");
process.stdout.write(" world!\n");

process.on("beforeExit", () => {
	console.log("Process is going to end");
	// setTimeout(() => {
	// 	console.log("This will run infinite times"); // Event loop is still open
	// }, 0);
});

process.on("exit", () => {
	console.log("Process ended");
	setTimeout(() => {
		console.log("This never will run"); // Event loop is already closed
	}, 0);
});

process.on("unhandledRejection", (err, origin) => {
	console.error(`Oops, I forgot to catch a promise: ${err} ${origin}`);
});

process.on("uncaughtException", (err) => {
	console.error(`Oops, I forgot to catch an error: ${err.message}`);
});

const p = new Promise((_, reject) => {
	reject("I forgot to catch this promise");
});

inexistentFunction();
