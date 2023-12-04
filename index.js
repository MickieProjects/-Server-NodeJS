const http = require("http");
const server = http.createServer((request, response) => {
  console.log(request.url);
  response.end("Hello NodeJS");
});

server.listen(3000);
