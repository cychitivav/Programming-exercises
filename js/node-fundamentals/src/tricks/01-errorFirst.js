// Error first callback pattern
// The first argument of the callback is always the error

function asynchronous(callback) {
	setTimeout(() => {
		try {
			let a = 3 + z;
			callback(null, a);
		} catch (e) {
			callback(e, null);
		}
	});
}

asynchronous((err, data) => {
	if (err) {
		console.error(err);
		return false;
	}
	console.log(data);
});
