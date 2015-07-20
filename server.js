var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/routes');
var configDB = require('./config/database.js');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use('/', routes);



app.listen(1234);
console.log("Running through the 6 in port 1234");