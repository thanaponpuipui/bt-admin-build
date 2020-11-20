"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandController = exports.categoryController = exports.shoeTypeController = exports.productController = exports.viewPageController = void 0;
var view_page_1 = __importDefault(require("./view_page"));
exports.viewPageController = view_page_1.default;
var product_1 = __importDefault(require("./product"));
exports.productController = product_1.default;
var shoe_type_1 = __importDefault(require("./shoe_type"));
exports.shoeTypeController = shoe_type_1.default;
var category_1 = __importDefault(require("./category"));
exports.categoryController = category_1.default;
var brand_1 = __importDefault(require("./brand"));
exports.brandController = brand_1.default;
