function hello(name) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Hello ${name}`);
			resolve(name);
		}, 1500);
	});
}

function bye(name) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Bye ${name}`);
			resolve(name);
		}, 1000);
	});
}

function talk(name) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Talking with ${name}`);
			resolve(name);
		}, 1000);
	});
}

console.log("Starting process...");
hello("Luis")
	.then(talk)
	.then(talk)
	.then(talk)
	.then(bye)
	.then(() => {
		console.log("Finish conversation");
	})
	.catch((error) => {
		console.error("There was an error");
	});
