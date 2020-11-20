"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeShoeTypeService = exports.removeProductService = exports.removeCategoryService = exports.removeBrandService = void 0;
var remove_brand_1 = require("./remove_brand");
Object.defineProperty(exports, "removeBrandService", { enumerable: true, get: function () { return __importDefault(remove_brand_1).default; } });
var remove_category_1 = require("./remove_category");
Object.defineProperty(exports, "removeCategoryService", { enumerable: true, get: function () { return __importDefault(remove_category_1).default; } });
var remove_product_1 = require("./remove_product");
Object.defineProperty(exports, "removeProductService", { enumerable: true, get: function () { return __importDefault(remove_product_1).default; } });
var remove_shoe_type_1 = require("./remove_shoe_type");
Object.defineProperty(exports, "removeShoeTypeService", { enumerable: true, get: function () { return __importDefault(remove_shoe_type_1).default; } });
