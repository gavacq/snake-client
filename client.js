const net = require("net");
const {IPADDR, PORT} = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IPADDR, // IP address here,
    port: PORT
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
  });

  return conn;
};

module.exports = connect;
