"use strict";

var http = require("http");

http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.end("Hello World\n");
}).listen(1337, "127.0.0.1");

console.log("Server running at http://127.0.0.1:1337/");

//http.get('http://www.google.com/', function(res) {
//	console.log("Got response: " + res.statusCode);
//	res.on("data", function(chunk) {
//		console.debug("Got data!");
//	});
//	res.on("end", function() {
//		console.debug("Got all!");
//	});
//}).on("error", function(e) {
//	console.log("Got error: " + e.message);
//});
