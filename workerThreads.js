const http = require('http');
const {
  Worker,
  isMainThread,
  parentPort
} = require('worker_threads');
const PORT = 3000;

if (isMainThread) {
  // we pass in the current file name to be run by the worker thread
  const worker = new Worker(__filename);
  // Main server logs messages received from the worker thread
  worker.on('message', (data) => {
    console.log('Data from worker thread: ', data);
  })
  // Start server on main thread
  const server = http.createServer((req, res) => {
    res.end(`Done ${new Date()}\n`);
  });
  server.listen(3000, () => {
    console.log(`listening on port ${PORT}`);
  });
} else {
    // Worker thread handles CPU-intensive tasks...
    let count = 0;  
    for (let i = 0; i < 2000000000; i++) {
      count++;
    }
    // ...and sends result whenver completed
    parentPort.postMessage({count});
}
