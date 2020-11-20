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
var GenericController = /** @class */ (function (_super) {
    __extends(GenericController, _super);
    function GenericController(req, res, next) {
        return _super.call(this, req, res, next) || this;
    }
    Object.defineProperty(GenericController.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (md) {
            this._model = md;
        },
        enumerable: false,
        configurable: true
    });
    return GenericController;
}(Controller_1.default));
exports.default = GenericController;
