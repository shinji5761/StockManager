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
var PortfolioService = (function (_super) {
    __extends(PortfolioService, _super);
    /**
     * @constructor
     */
    function PortfolioService() {
        return _super.call(this) || this;
    }
    /**
     * @param param { any } 検索パラメータ
     * @param onSuccess { Function } コールバック関数(Success)
     * @param onFail { Fucntion } コールバック関数(Fail)
     */
    PortfolioService.prototype.get = function (param, onSuccess, onFail) {
        console.log('Portfolio.get');
        _super.prototype.get.call(this, 'SELECT * FROM portfolio_view', onSuccess, onFail);
    };
    return PortfolioService;
}(Service_1.Service));
exports.PortfolioService = PortfolioService;
