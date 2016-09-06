var http = require('http')
var url = require('url');
var parser = require('./timeservicemodule');

var server = http.createServer(function(request, response) {
	var u = url.parse(request.url, true).pathname;
	var res = parser.parseData(u);
	
	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(res));
});

server.listen(8080);
