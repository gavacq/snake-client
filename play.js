const net = require("net");
const connect = require('./client');
//initialize functions before calling them
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  return stdin;
};

const handleUserInput = data => {
  const ctrlC = "\u0003";

  if (data === ctrlC) {
    process.exit();
  }
};

// Connect to server
console.log("Connecting ...");
connect();

// create stdin object
const userInput = setupInput();

userInput.on("data", handleUserInput);
