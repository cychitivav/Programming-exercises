// let buffer = Buffer.alloc(5);
// let buffer = Buffer.from([1, 2, 3, 4, 256]);
let buffer = Buffer.from("Hola");

console.log(buffer, `${buffer.length} bytes`);

let abc = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
	abc[i] = i + 97;
}

console.log(abc.toString());
