// Same as blockingDemo.js, but using the cluster module
// Send multiple requests, and see that they're independent of each other's blockign operations
const express = require("express");
const fibInRange = require("./fibInRange");
const { spawn, exec, fork } = require("child_process");

const cluster = require("cluster");
const os = require("os");

const app = express();

if (cluster.isMaster) {
  console.log(`This is the master process. Process ID: ${process.pid}`);
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
  cluster.on("exit", () => {
    cluster.fork();
  });
} else {
  app.get("/", (req, res, next) => {
    fibInRange(1000000000);
    res.send("Hello universe.\n");
  });
  app.listen(3000, () => {
    console.log(`This is a worker process. Process ID: ${process.pid}`);
    console.log("Listening on port 3000.");
  });
}
