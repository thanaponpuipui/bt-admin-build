"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controller = /** @class */ (function () {
    function Controller(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }
    return Controller;
}());
exports.default = Controller;
