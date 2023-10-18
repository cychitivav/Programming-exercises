const entries = new Map([
	["name", "John"],
	["age", 30],
	["country", "US"],
]);

console.log(entries); // Map(3) {"name" => "John", "age" => 30, "country" => "US"}

const obj = Object.fromEntries(entries);

console.log(obj); // {name: "John", age: 30, country: "US"}
