const http = require('http');

// Example of a server with a blocking CPU-intensive task
const server = http.createServer((req, res) => {
  count = 0;
  for (let i = 0; i < 1500000000; i += 1) {
    count += 1;
  }
  res.write('Hey There\n');
  res.end();
});

server.listen(3000);