const users = {
	gndx: {
		country: "MX",
	},
	ana: {
		country: "CO",
	},
};

// without optional chaining
try {
	console.log(users.luis.country);
} catch {
	console.log("Error");
}

// Optional chaining
console.log(users?.luis?.country);
