const os = require("os");

// System info
console.log("Architecture: ", os.arch());
console.log("Platform: ", os.platform());
console.log("CPUs: ", os.cpus().length);
console.log("Constants: ", Object.keys(os.constants));

// Memory info (RAM)
console.log("Free memory: ", os.freemem() / 1024 ** 2, "MB");
console.log("Total memory: ", os.totalmem() / 1024 ** 2, "MB");

// Directory info
console.log("Home directory: ", os.homedir());
console.log("Temporary directory: ", os.tmpdir());

// Hostname
console.log("Hostname: ", os.hostname());

// Network interfaces
Object.keys(os.networkInterfaces()).forEach((nic) => {
	console.log("NIC: ", nic);
	console.log(
		"IPs: ",
		os.networkInterfaces()[nic].map((iface) => iface.address)
	);
});
