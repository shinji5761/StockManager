"use strict";
exports.__esModule = true;
/**
 * @class Controller
 * @abstract
 */
var Controller = (function () {
    /**
     * @constructor
     */
    function Controller(url, service) {
        this.url = url;
        this.service = new service();
    }
    /**
     * @method get
     * @param req {any} リクエスト
     * @param res {any} レスポンス
     */
    Controller.prototype.get = function (req, res) {
        console.log('Controller.get');
        // パラメータ
        var param;
        this.service.get(param, 
        // onSuccessCallback
        function (result) {
            res.status(200).send(result);
        }, 
        // onFailCallback
        function (error) {
            res.status(404).send(error);
        });
    };
    return Controller;
}());
exports.Controller = Controller;
