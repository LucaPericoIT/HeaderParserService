var http = require('http')
var parser = require('./headerparsermodule');

var server = http.createServer(function(request, response) {

	// Parse headers
	var res = parser.parseHeaders(request.headers);
	
	// Send response
	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(res));
});

server.listen(8080);
