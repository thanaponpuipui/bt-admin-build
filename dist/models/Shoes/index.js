"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoeType = exports.Category = void 0;
var Shoes_1 = __importDefault(require("./Shoes"));
exports.default = Shoes_1.default;
var Category_1 = require("./Category");
Object.defineProperty(exports, "Category", { enumerable: true, get: function () { return __importDefault(Category_1).default; } });
var ShoeType_1 = require("./ShoeType");
Object.defineProperty(exports, "ShoeType", { enumerable: true, get: function () { return __importDefault(ShoeType_1).default; } });
