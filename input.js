let connection;

const handleUserInput = data => {
  const ctrlC = "\u0003";
  const up = "\u0077";
  const down = "\u0073";
  const right = "\u0064";
  const left = "\u0061";

  switch (data) {
  case ctrlC:
    process.exit();
    break;
  case up:
    connection.write("Move: up");
    break;
  case down:
    connection.write("Move: down");
    break;
  case right:
    connection.write("Move: right");
    break;
  case left:
    connection.write("Move: left");
    break;
  }
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  connection = conn;
  stdin.on("data", handleUserInput);
  
  return stdin;
};

module.exports = setupInput;
