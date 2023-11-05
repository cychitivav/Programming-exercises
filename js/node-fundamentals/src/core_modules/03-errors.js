function broken() {
	return 1 + z;
}

function caller() {
	broken();
}

try {
	caller();
} catch {
	console.error("Oops, something went wrong!");
} finally {
	console.log("This will always run");
}

console.log("This will run");

// Async
async function asyncBroken() {
	setTimeout(() => {
		try {
			return 1 + z;
		} catch {
			console.error("Caught an error inside asyncBroken");
		}
	}, 1000);
}

try {
	asyncBroken();
} catch {
	console.error("Caught an error outside asyncBroken"); // This will not run
}
