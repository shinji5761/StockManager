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
            console.log('Controller.get.onSuccess');
            res.send(result);
        }, 
        // onFailCallback
        function (error) {
            console.log('Controller.get.onFail');
            res.send(error);
        });
    };
    return Controller;
}());
exports.Controller = Controller;
