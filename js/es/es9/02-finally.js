const anotherFunction = () => {
	return new Promise((resolve, reject) => {
		false ? resolve("Hey!!") : reject("Whoops!");
	});
};

anotherFunction()
	.then((response) => console.log(response))
	.catch((err) => console.log(err))
	.finally(() => console.log("Finalizo"));
