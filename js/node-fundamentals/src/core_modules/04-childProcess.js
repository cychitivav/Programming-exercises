const { exec } = require("child_process"); // Equivalent to: const exec = require("child_process").exec;

exec("ls", (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error.message}`);
		//return;
	}
	// console.log(`stdout: ${stdout}`);
	// console.log(`stderr: ${stderr}`);
});

const { spawn } = require("child_process"); // Equivalent to: const spawn = require("child_process").spawn;

const child = spawn("ls", ["-la"]); //

console.log(`Child process pid: ${child.pid}`);
console.log(`Child process connected: ${child.connected}`);

child.stdout.on("data", (data) => {
	console.log(`stdout: ${data.toString()}`);
});

child.on("exit", () => {
	console.log("Child process exited");
});

console.log(`Died?: ${child.killed}`);
