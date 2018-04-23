var express = require('express');
var bodyParser = require('body-parser');
var api = module.exports = express();

api.use(bodyParser.json());

var serviceAPIs = [
   './service-example/api'
];

serviceAPIs.forEach(function (path) {
	require(path)(api);
});

module.exports = api;