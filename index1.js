// Step to install npm
// npm init -y
// npm install --save <package-name>
// add node_modules in the .gitignore file
// create index.js
// require package name
// use the package method following the npm guide
// node index.js

const proper = require("proper-upper-case");
const now = require("./index2");

const result = proper("shRaBaN kuMAr SAH.");
console.log(result + " " + now.now());
