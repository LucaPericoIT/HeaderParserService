/*****************************
 * Test timeservicemodule.js *
 *****************************/

var parse = require('./headerparsermodule');

// HANDLE EMPTY STRING
console.log(parse.parseHeaders(""));

// HANDLE MISSING MATCH (user agent)
console.log(parse.parseHeaders(JSON.parse('{"host":"freecodecampapi-lucaperico.c9users.io","user-agent":"Mozilla/5.035.0) Gecko/20100101 Firefox/35.0","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","accept-language":"fr,fr-fr;q=0.8,en-us;q=0.5,en;q=0.3","accept-encoding":"gzip, deflate","dnt":"1","referer":"https://ide.c9.io/lucaperico/freecodecampapi","cache-control":"max-age=0","x-forwarded-proto":"https","x-forwarded-port":"443","x-region":"usw","x-forwarded-for":"142.100.231.11","connection":"keep-alive"}')));

// HANDLE MISSING ELEMENTS (user agent)
console.log(parse.parseHeaders(JSON.parse('{"host":"freecodecampapi-lucaperico.c9users.io","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","accept-language":"fr,fr-fr;q=0.8,en-us;q=0.5,en;q=0.3","accept-encoding":"gzip, deflate","dnt":"1","referer":"https://ide.c9.io/lucaperico/freecodecampapi","cache-control":"max-age=0","x-forwarded-proto":"https","x-forwarded-port":"443","x-region":"usw","x-forwarded-for":"142.100.231.11","connection":"keep-alive"}')));

// HANDLE NO IP
console.log(parse.parseHeaders(JSON.parse('{"host":"freecodecampapi-lucaperico.c9users.io","user-agent":"Mozilla/5.035.0) Gecko/20100101 Firefox/35.0","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","accept-language":"fr,fr-fr;q=0.8,en-us;q=0.5,en;q=0.3","accept-encoding":"gzip, deflate","dnt":"1","referer":"https://ide.c9.io/lucaperico/freecodecampapi","cache-control":"max-age=0","x-forwarded-proto":"https","x-forwarded-port":"443","x-region":"usw",')));

// HANDLE CORRECT HEADER
console.log(parse.parseHeaders(JSON.parse('{"host":"freecodecampapi-lucaperico.c9users.io","user-agent":"Mozilla/5.0 (Windows NT 6.3; WOW64; rv:35.0) Gecko/20100101 Firefox/35.0","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","accept-language":"fr,fr-fr;q=0.8,en-us;q=0.5,en;q=0.3","accept-encoding":"gzip, deflate","dnt":"1","referer":"https://ide.c9.io/lucaperico/freecodecampapi","cache-control":"max-age=0","x-forwarded-proto":"https","x-forwarded-port":"443","x-region":"usw","x-forwarded-for":"142.100.231.11","connection":"keep-alive"}')));
