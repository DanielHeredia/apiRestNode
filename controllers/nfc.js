'use strict'

var Nfc = require('../models/nfc');

function getStart(req,res){
    res.status(200).send({message:"Api Rest Iniciada"});
}

function getNfc(req, res) {
    var nfcId = req.params.id;

    Nfc.findOne({ nfc: nfcId }, (err, nfc) => {
        if (err) {
            res.status(500).send({ message: 'error' });
        } else {
            if (!nfc) {
                res.status(404).send({ message: '0' });
            } else {
                res.status(200).send({ message: '1' });
            }
        }
    });
}

function addNfc(req, res) {
    var nfc = new Nfc();

    var params = req.body;
    nfc.nfc = params.nfc;

    nfc.save((err, nfcStored) => {
        if (err) {
            res.status(500).send({ message: "Error al guardar" });
        } else {
            if (!nfcStored) {
                res.status(200).send({ message: "No se pudo guardar el id nfc" });
            } else {
                res.status(200).send({ message: "Guardado correctamente" });
            }
        }
    });
}

module.exports = {
    getNfc,
    addNfc,
    getStart
}