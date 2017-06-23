'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var NFcSchema = Schema({
    nfc: String
}, { collection: 'nfc' });

module.exports = mongoose.model('nfc', NFcSchema);