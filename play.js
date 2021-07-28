const connect = require('./client');
const setupInput = require('./input');

// setup stdin
const userInput = setupInput();

// Connect to server
console.log("Connecting ...");
connect();
