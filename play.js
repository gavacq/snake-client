const connect = require('./client');
const setupInput = require('./input');

// Connect to server
console.log("Connecting ...");
const conn = connect();

// setup stdin
const userInput = setupInput(conn);
