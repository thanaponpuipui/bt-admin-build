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
var DatabaseError_1 = __importDefault(require("./DatabaseError"));
var DatabaseNotConnectedError = /** @class */ (function (_super) {
    __extends(DatabaseNotConnectedError, _super);
    function DatabaseNotConnectedError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = 'DatabaseNotConnectedError';
        return _this;
    }
    return DatabaseNotConnectedError;
}(DatabaseError_1.default));
exports.default = DatabaseNotConnectedError;
