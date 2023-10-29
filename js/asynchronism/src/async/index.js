const fnAsync = () => {
	return new Promise((resolve, reject) => {
		true
			? setTimeout(() => {
					resolve("Async!");
			  }, 3000)
			: reject(new Error("Error"));
	});
};

const anotherFn = async () => {
	console.log("Hello");

	const something = await fnAsync();
	console.log(something);

	console.log("World");
};

console.log("Before");
anotherFn();
console.log("After");
