"use strict";
exports.__esModule = true;
// Postgres 設定
var pg = require("pg");
var fs = require("fs");
/**
 * Postgresのコンフィグ設定
 */
// var p_config = JSON.parse(fs.readFileSync('./server/config/PostgresConfig.json', 'utf-8'));
var p_config = JSON.parse(fs.readFileSync('./server/config/PostgresConfigHeroku.json', 'utf-8'));
/**
 * @class Service
 * @abstract
 */
var Service = (function () {
    /**
     * @constructor
     */
    function Service() {
    }
    Service.prototype.p_connection = function () {
        // PostgresClientの生成
        this.client = new pg.Client(p_config);
    };
    /**
     * @method get
     * @abstract
     * @param sql { string } SQL文
     * @param onSuccess { Function } コールバック関数(Success)
     * @param onFail { Fucntion } コールバック関数(Fail)
     */
    Service.prototype.get = function (sql, onSuccess, onFail) {
        var _this = this;
        // Postgresに接続
        try {
            this.p_connection();
            this.client.connect();
        }
        catch (error) {
            console.log('Service.get connection error');
            onFail(error);
        }
        // SQLの実行
        this.client.query(sql)
            .then(function (result) {
            onSuccess(result);
        })["catch"](function (error) {
            onFail(error);
        })
            .then(function () {
            _this.client.end();
        });
    };
    ;
    return Service;
}());
exports.Service = Service;
