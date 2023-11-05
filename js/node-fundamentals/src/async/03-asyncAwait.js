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

async function conversation() {
	try {
		let name = await hello("Luis");
		await talk(name);
		await talk(name);
		await talk(name);
		await bye(name);
		console.log("Finish conversation");
	} catch (error) {
		console.error("There was an error");
	}
}

console.log("Starting process...");
conversation();
console.log("Finishing process...");
