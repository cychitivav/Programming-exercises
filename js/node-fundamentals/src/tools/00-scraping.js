const puppeteer = require("puppeteer");

(async () => {
	console.log("Launching browser...");
	const browser = await puppeteer.launch();

	console.log("Opening new page...");
	const page = await browser.newPage();

	console.log("Going to Google...");
	await page.goto("https://google.com");

	var title1 = await page.evaluate(() => {
		const h1 = document.querySelector("h1");
		console.log(h1.innerHTML);
		return h1.innerHTML;
	});

	console.log(title1);

	console.log("Closing browser...");
	await browser.close();
})();
