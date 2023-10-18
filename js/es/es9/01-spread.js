const user = {
	name: "John",
	age: 30,
	country: "US",
};

const { name, ...rest } = user;

console.log(name); // John
console.log(rest); // {age: 30, country: "US"}
