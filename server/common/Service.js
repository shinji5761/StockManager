"use strict";
exports.__esModule = true;
// Postgres 設定
var pg = require("pg");
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
        this.client = new pg.Client({
            'host': 'localhost',
            'port': 5432,
            'database': 'stock-manager-org',
            'user': 'admin',
            'password': 'admin'
        });
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
        this.p_connection();
        this.client.connect();
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
