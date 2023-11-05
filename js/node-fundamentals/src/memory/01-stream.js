const fs = require("fs");
const stream = require("stream");

let data = "";
let readableString = fs.createReadStream(__dirname + "/input.txt");
readableString.setEncoding("UTF8");

readableString.on("data", (chunk) => {
	data += chunk;
});

readableString.on("end", () => {
	console.log(data);
});

class Caps extends stream.Transform {
	constructor() {
		super();
	}
	_transform(chunk, codif, callback) {
		let chunkCaps = chunk.toString().toUpperCase();
		this.push(chunkCaps);
		callback();
	}
}

let caps = new Caps();

readableString.pipe(caps).pipe(process.stdout);
