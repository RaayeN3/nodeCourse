const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello world!");
  res.write("i'm rayen");
  res.end();
});

server.listen(5000, () => {
  console.log("Server is running (port 5000)..");
});
