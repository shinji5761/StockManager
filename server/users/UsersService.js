"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Service_1 = require("../common/Service");
var UsersService = (function (_super) {
    __extends(UsersService, _super);
    /**
     * @constructor
     */
    function UsersService() {
        return _super.call(this) || this;
    }
    /**
     * @param param { any } 検索パラメータ
     * @param onSuccess { Function } コールバック関数(Success)
     * @param onFail { Fucntion } コールバック関数(Fail)
     */
    UsersService.prototype.get = function (param, onSuccess, onFail) {
        console.log('UsersService.get');
        _super.prototype.get.call(this, 'SELECT * FROM users', onSuccess, onFail);
    };
    return UsersService;
}(Service_1.Service));
exports.UsersService = UsersService;
