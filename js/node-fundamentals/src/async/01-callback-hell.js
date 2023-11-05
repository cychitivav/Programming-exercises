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

function talk(name, callback) {
	setTimeout(() => {
		console.log(`Talking with ${name}`);
		callback(name);
	}, 1000);
}

// This is the callback hell, too many callbacks
hello("Luis", (name) => {
	talk(name, (name) => {
		talk(name, (name) => {
			talk(name, (name) => {
				bye(name, () => {
					console.log("Finish conversation");
				});
			});
		});
	});
});

// A way to handle this is using a recursive function
function conversation(name, times, callback) {
	if (times > 0) {
		talk(name, () => {
			conversation(name, --times, callback);
		});
	} else {
		bye(name, callback);
	}
}

conversation("James", 3, () => {
	console.log("Finish conversation");
});
