console.log("Some text");

// Same as console.log but in some terminals it shows a different color
console.info("Info text");
console.warn("Warning text");
console.error("Error text");

var table = [
	{
		a: 1,
		b: "2",
		c: 8,
	},
	{
		a: "3",
		c: "Other",
	},
];

let data = {
	name: "John",
	age: 32,
	department: "Software",
};

console.table(table);
console.table(data);

// Grouping console logs
function f1() {
	console.group("Function 1");
	console.log("This is from function 1");
	console.log("This is from function 1");
	f2();
	console.groupEnd("Function 1");
}

function f2() {
	console.group("Function 2");
	console.log("This is from function 2");
	console.log("This is from function 2");
	console.groupEnd("Function 2");
}

console.log("Starting");
f1();
f2();

// Counting
console.count("Times");
console.count("Times");
console.count("Times");
console.countReset("Times");
console.count("Times");
