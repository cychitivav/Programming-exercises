let saludo = "hello";

// console.log(saludo);

// If we don' want variables in the code (like passwords), we can use environment variables

let logName = process.env.LOGNAME || "without name";

console.log(saludo, logName);

// To set an environment variable, we can use export in the terminal
