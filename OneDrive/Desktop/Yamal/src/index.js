 const http = require("http");
 const { greet } = require("./app");
 const PORT = process.env.PORT || 3000;
 const server = http.createServer((req, res) => {
 const message = greet("CI/CD");
 res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
 res.end('Server is running. Message: ${message}\n');
 });
 server.listen(PORT, () => {
 console.log('Server listening on port ${PORT}');
 });