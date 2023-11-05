let sum = 0;

console.time("benchmark");
for (let i = 0; i < 1000000000; i++) {
	sum += i;
}
console.timeEnd("benchmark");

let sum2 = 0;

console.time("async");
asynchronous().then(() => {
	console.timeEnd("async");
});

function asynchronous() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("done");
		}, 1000);
	});
}
