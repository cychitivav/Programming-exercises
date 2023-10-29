const cows = 15;

const countCows = new Promise((resolve, reject) => {
	if (cows > 10) {
		resolve("There are too many cows!");
	} else {
		reject("There are not enough cows!");
	}
});

countCows
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	})
	.finally(() => {
		// finally is executed no matter what the result is (resolve or reject)
		console.log("We are done!");
	});
