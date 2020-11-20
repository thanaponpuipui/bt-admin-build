"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Controller_1 = __importDefault(require("./Controller"));
var ViewController = /** @class */ (function (_super) {
    __extends(ViewController, _super);
    function ViewController(req, res, next) {
        var _this = _super.call(this, req, res, next) || this;
        _this._root = "";
        _this._pageAttribute = "";
        return _this;
    }
    Object.defineProperty(ViewController.prototype, "root", {
        set: function (rootPath) {
            // validate param here
            //
            this._root = rootPath;
        },
        enumerable: false,
        configurable: true
    });
    return ViewController;
}(Controller_1.default));
exports.default = ViewController;
