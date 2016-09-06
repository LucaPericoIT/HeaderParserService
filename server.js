var http = require('http')
var parser = require('./headerparsermodule');

var server = http.createServer(function(request, response) {
	console.log(request.headers);
	var r = parser.parseHeaders(request.headers);
	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(r));
});

server.listen(8080);
