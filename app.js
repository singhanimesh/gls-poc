var http = require('http');
var app = require('./config.app');

var server = http.createServer(app);
var port = '3000';

server.listen(port, function () {
   console.log('Express server listening on port: %s', server.address().port);
});
