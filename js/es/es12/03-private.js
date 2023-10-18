class user {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	// Methods
	#speak() {
		return "Hello";
	}
	greeting() {
		return this.speak() + " my name is " + this.name;
	}
}

const gndx = new user("Gndx", 20);
console.log(gndx.greeting()); // Hello my name is Gndx
console.log(gndx.speak()); // Uncaught TypeError: gndx.speak is not a function
