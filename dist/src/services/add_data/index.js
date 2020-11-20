"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addShoeTypeService = exports.addCategoryService = exports.addBrandService = exports.addShoeService = void 0;
var add_brand_1 = __importDefault(require("./add_brand"));
exports.addBrandService = add_brand_1.default;
var add_category_1 = __importDefault(require("./add_category"));
exports.addCategoryService = add_category_1.default;
var add_shoe_type_1 = __importDefault(require("./add_shoe_type"));
exports.addShoeTypeService = add_shoe_type_1.default;
var add_shoe_1 = __importDefault(require("./add_shoe"));
exports.addShoeService = add_shoe_1.default;
