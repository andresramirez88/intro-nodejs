let http = require("http");
var url = require("url");
let querys = require("querystring");
let { countries } = require("countries-list");

let server = http.createServer(function(request, response) {
  var parsed = url.parse(request.url);
  var query = querys.parse(parsed.query);
  console.log("parsed: ", parsed);
  console.log("pais: ", query.code);

  var pathname = parsed.pathname;

  if (pathname === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("Casa");
    response.end();
  } else if (pathname === "/pais") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(countries[query.code]));
    response.end();
  } else {
    response.writeHead(400, { "Content-Type": "text/html" });
    response.write("No found");
    response.end();
  }
});

server.listen(4000);
console.log("runnig on 4000");
