const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  var os = require("os");
  var hostname = os.hostname();
  var msg = 'Hello Node! '
  var res = msg.concat(hostname, 'hi');
  res.end(res);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
