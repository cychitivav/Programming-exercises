const bcrypt = require("bcrypt");

const password = "1234Secure!";

bcrypt.hash(password, 10, (err, hash) => {
	console.log(hash);

	bcrypt.compare(password, hash, (err, result) => {
		console.log("Same?", result);
	});
});
