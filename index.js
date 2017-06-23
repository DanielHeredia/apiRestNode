

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.port || 9000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/nfcDB', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('LA conexion ala base de datos esta corriendo correctamnte');
        app.listen(port, function () {
            console.log('servidor del API Rest Validacion NFC' + port);
        })
    }
});
