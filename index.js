"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var Server = (function () {
    function Server() {
        app.use(express.static(__dirname + '/dist/'));
        app.get('/', function (req, res) { res.sendFile('index'); });
        app.set('port', process.env.PORT || 5000);
        app.listen(app.get('port'));
    }
    return Server;
}());
var server = new Server();
