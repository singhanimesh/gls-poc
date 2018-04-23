
var express = require('express');
var path = require('path');
var http = require('http');
var favicon = require('serve-favicon');

var api = require('./api/fixtures/index');

var DIST_DIR = path.join(__dirname, "dist"); 
var app = express();

app.use(favicon(__dirname + '/src/assets/favicon.ico'))
//Serving the files on the dist folder
app.use(express.static(DIST_DIR));
app.use(api);
module.exports = app;