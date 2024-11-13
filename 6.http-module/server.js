const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req", req);
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello from node js");
});

const port = 3000;

server.listen(port, () => {
  console.log("Server listening in port-->", port);
});
