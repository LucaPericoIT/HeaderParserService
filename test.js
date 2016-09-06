/*****************************
 * Test timeservicemodule.js *
 *****************************/

var parse = require('./timeservicemodule')


console.log(parse.parseData(""));
console.log(parse.parseData("asdasd"));
console.log(parse.parseData("/1450137600"));
console.log(parse.parseData("/1990 30 02"));
