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
var Controller_1 = require("../common/Controller");
var PortfolioService_1 = require("./PortfolioService");
/**
 * @class UsersController
 */
var PortfolioController = (function (_super) {
    __extends(PortfolioController, _super);
    /**
     * @constructor
     */
    function PortfolioController() {
        return _super.call(this, '/app/portfolio', PortfolioService_1.PortfolioService) || this;
    }
    return PortfolioController;
}(Controller_1.Controller));
exports.PortfolioController = PortfolioController;
