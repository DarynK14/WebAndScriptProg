// server.mjs
// Open VS in Adm
// Node is installed
//changes om 5 & 6
var http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('test World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => { //()anon method
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`

