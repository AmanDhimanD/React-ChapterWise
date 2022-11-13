# Server Creation using NodeJS
#### Step 1:
* Write this code ( save file as the server.js, create new index.js file that is open in server)
```
var http = require("http");
var fs = require("fs");

const PORT = 8080;

fs.readFile("./index.html", function (err, html) {
  if (err) throw err;

  http
    .createServer(function (request, response) {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    })
    .listen(PORT);
});
```
#### Step 2:
* run this command
```
node server.js
```
#### Step 3:
* using this link 
```
 http://localhost:8080/
```

