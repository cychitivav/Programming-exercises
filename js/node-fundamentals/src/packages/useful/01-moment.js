const moment = require("moment");

let now = moment();

console.log(now.toString());
console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));
console.log(now.format("dddd"));

setTimeout(() => {
	console.log("2 seconds later:", moment() - now, "milliseconds");
}, 2000);
