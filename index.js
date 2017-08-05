"use strict";
exports.__esModule = true;
var express = require("express");
// === Controller ===
var UsersController_1 = require("./server/users/UsersController");
/**
 * Express アプリケーション
 */
var app = express();
var Server = (function () {
    /**
     * @constructor
     */
    function Server() {
        this.controller = {};
        this.settingMiddleware();
        this.settingController();
        this.settingRouting();
        this.run();
    }
    /**
     * ミドルウェアの設定
     */
    Server.prototype.settingMiddleware = function () {
        // 静的ファイルの設定
        app.use(express.static(__dirname + '/dist/'));
    };
    Server.prototype.settingController = function () {
        this.controller['users'] = new UsersController_1.UsersController();
    };
    /**
     * ルーティングの設定
     */
    Server.prototype.settingRouting = function () {
        var _this = this;
        app.get('/', function (req, res) { res.sendFile('index'); }); // index.html
        // === Users ===
        app.get(this.controller['users']['url'], function (req, res) { _this.controller['users']['get'](req, res); });
    };
    /**
     * アプリケーションの実行
     * @method run
     */
    Server.prototype.run = function () {
        app.set('port', process.env.PORT || 5000);
        app.listen(app.get('port'));
    };
    return Server;
}());
var server = new Server();
