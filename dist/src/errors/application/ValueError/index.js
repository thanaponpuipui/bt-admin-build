"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploadRequired = exports.ValueError = exports.NoDocFound = void 0;
var NoDocFound_1 = __importDefault(require("./NoDocFound"));
exports.NoDocFound = NoDocFound_1.default;
var ValueError_1 = __importDefault(require("./ValueError"));
exports.ValueError = ValueError_1.default;
var ImageUploadRequired_1 = require("./ImageUploadRequired");
Object.defineProperty(exports, "ImageUploadRequired", { enumerable: true, get: function () { return __importDefault(ImageUploadRequired_1).default; } });
