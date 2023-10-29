import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

async function fetchData(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

const anotherFn = async (url) => {
	try {
		const products = await fetchData(`${API}/products`);
		const product = await fetchData(`${API}/products/${products[0].id}`);
		const category = await fetchData(
			`${API}/categories/${product.category.id}`
		);

		console.log(product.title);
		console.table(category);
	} catch (error) {
		console.log("Error", error);
	}
};

console.log("Before");
anotherFn();
console.log("After");
