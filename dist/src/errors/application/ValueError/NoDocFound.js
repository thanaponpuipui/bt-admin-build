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
var ValueError_1 = __importDefault(require("./ValueError"));
var NoDocFound = /** @class */ (function (_super) {
    __extends(NoDocFound, _super);
    function NoDocFound(message, statusCode) {
        var _this = _super.call(this, message, statusCode) || this;
        _this.message = message;
        _this.name = 'NoDocFound';
        Object.setPrototypeOf(_this, NoDocFound.prototype);
        return _this;
    }
    return NoDocFound;
}(ValueError_1.default));
exports.default = NoDocFound;
