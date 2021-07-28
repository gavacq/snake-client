const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "135.23.223.133", // IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Process incoming data
  conn.on("data", data => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Succesfully connected to the game server");
    conn.write("Name: GAA");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });

  // conn.on("error", err => {
  //   console.log(err);
    
  //   return err;
  // });

  return conn;
};

module.exports = connect;
