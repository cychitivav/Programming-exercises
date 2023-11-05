const http = require("http");

const server = http.createServer(router).listen(3000);

function router(req, res) {
	console.log("New request: ", req.url);

	res.writeHead(200, { "Content-Type": "text/plain" });

	switch (req.url) {
		case "/hello":
			res.write("Hello world from NodeJS");
			break;
		case "/favicon.ico":
			res.write("I know you want the favicon, but I don't have one :(");
			break;
		default:
			res.write("404 Not found");
			break;
	}

	res.end();
}
