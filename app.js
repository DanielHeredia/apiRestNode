'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var routes = require('./routes');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/nfc', routes);

module.exports = app;


