// Load the http module and store the returned HTTP instance into an http variable

var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': "text/plain"});
   
   // Send the response body message
   response.end("Hello World, my name is Robert Siniscalchi\n");
}).listen(8001);

// Console will print the message
console.log('Server running at http://127.0.0.1:8001/');