'use strict'

var express = require('express');
var NfcController = require('./controllers/nfc');
var api = express.Router();

api.get('/valid/:id', NfcController.getNfc);
api.post('/new', NfcController.addNfc);

module.exports = api;