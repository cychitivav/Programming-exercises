import hello from "./module.js";
import haha from "./noPackage.mjs"; // To import a module without a package, you need to add the extension .mjs in both the import and the export statements

hello(); // Hello World!
haha(); // haha