// Objects are a collection of properties
// Properties are a key-value pair
// Key is a string
// Value can be anything

// Object literal
const person = {
	name: "Cristian",
	age: 25,
	hobbies: ["cycling", "reading", "coding"],
	location: {
		city: "Bogota",
		country: "Colombia",
	},
	greetings: function () {
		console.log("Hello" + " " + this.name); // this refers to the object
	},
};

// OOP
// Class: blueprint for creating objects
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greetings() {
		console.log("Hello" + " " + this.name);
	}
}

const person1 = new Person("Cristian", 25);
person1.greetings();

// Or
function DifferentPerson(name, age) {
	this.name = name;
	this.age = age;

	this.greetings = () => {
		// Same as Person.prototype.greetings = function () {...
		console.log("Hello" + " " + this.name);
	};
}

const person2 = new DifferentPerson("Cristian", 25);
person2.greetings();

// Inheritance
class Customer extends Person {
	constructor(name, age, balance) {
		super(name, age); // Calls the parent constructor
		this.balance = balance;
	}

	info() {
		console.log(`${this.name} owes ${this.balance}`);
	}
}

const customer1 = new Customer("Cristian", 25, 1000);
customer1.info();

// or
function DifferentCustomer(name, age, balance) {
	DifferentPerson.call(this, name, age);
	this.balance = balance;

	this.info = () => {
		console.log(`${this.name} owes ${this.balance}`);
	};
}
require("util").inherits(DifferentCustomer, DifferentPerson);

const customer2 = new DifferentCustomer("Cristian", 25, 1000);
customer2.info();

// Prototypes
// Every object has a prototype and inherits methods and properties from it Object.prototype
Customer.prototype.payBill = function (amount) {
	this.balance -= amount;
	console.log(`${this.name} pays ${amount}`);
};
