const fs = require("fs");

function read(path, callback) {
	fs.readFile(path, (err, data) => {
		// This is an asynchronous function, use readFileSync for synchronous
		callback(data.toString());
	});
}

function write(path, content, callback) {
	fs.writeFile(path, content, (err) => {
		if (err) {
			console.error("I couldn't write the file");
		} else {
			console.log("File written successfully");
		}
	});
}

function delFile(path, callback) {
	fs.unlink(path, callback);
}

read(__dirname + "/file.txt", console.log);
write(__dirname + "/file1.txt", "I am a new file", console.log);
delFile(__dirname + "/file1.txt", console.log);
