import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

async function fetchData(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

async function* anotherFn(url) {
	try {
		const products = await fetchData(`${url}/products`);
		yield console.log(products[100]);

		const product = await fetchData(`${url}/products/${products[0].id}`);
		yield console.log(product);

		const category = await fetchData(
			`${url}/categories/${product.category.id}`
		);
		yield console.log(category);
	} catch (error) {
		console.log("Error", error);
	}
}

const g = anotherFn(API);

console.log("Before");
g.next().value;
g.next().value;
g.next().value;
