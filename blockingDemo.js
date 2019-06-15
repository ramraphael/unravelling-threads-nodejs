const http = require('http');
const fibInRange = require("./fibInRange");
const { spawn, exec, fork } = require("child_process");

const server = http.createServer((req, res) => {
  // Uncomment line 8 for a blocking demo
  // Uncomment lines 9-12 to demonstrate how this can be made non-blocking with a child process
  // fibInRange(1000000000);
  // const fibChild = fork("./fibInRange.js");
  // fibChild.send("start");
  // fibChild.on("stdout", data => process.stdout.write(data));
  // res.end("Hello universe.\n");
})

server.listen(3000, () => {
  console.log("Listening on port 3000.");
})