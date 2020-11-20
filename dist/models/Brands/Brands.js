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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DatabaseModel_1 = __importDefault(require("../DatabaseModel"));
var env_config_1 = require("../../config/env-config");
var Brands = /** @class */ (function (_super) {
    __extends(Brands, _super);
    function Brands() {
        var _this = _super.call(this, env_config_1.mainDb, ['brands']) || this;
        _this._col = _this.collections[0];
        return _this;
    }
    Brands.prototype.write = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var result, ret, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._col.insertOne(info)];
                    case 1:
                        result = _a.sent();
                        ret = {
                            _id: result.insertedId
                        };
                        return [2 /*return*/, ret];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Brands.prototype.read = function () {
        return __awaiter(this, void 0, void 0, function () {
            var brandsCursor, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this._col.find({})];
                    case 1:
                        brandsCursor = _a.sent();
                        return [4 /*yield*/, brandsCursor.toArray()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Brands.prototype.readNames = function () {
        return __awaiter(this, void 0, void 0, function () {
            var namesCursor, names, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this._col.find({}, { projection: { brandName: true } })];
                    case 1:
                        namesCursor = _a.sent();
                        return [4 /*yield*/, namesCursor.toArray()];
                    case 2:
                        names = _a.sent();
                        return [2 /*return*/, names];
                    case 3:
                        error_3 = _a.sent();
                        throw error_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Brands.prototype.readById = function (bid) {
        return __awaiter(this, void 0, void 0, function () {
            var brand, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof bid === 'string') {
                            bid = this.toObjectId(bid);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._col.findOne({ _id: bid })];
                    case 2:
                        brand = _a.sent();
                        return [2 /*return*/, brand];
                    case 3:
                        error_4 = _a.sent();
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Brands.prototype.updateLogo = function (bId, logoUri) {
        return __awaiter(this, void 0, void 0, function () {
            var findDoc, uploadDoc, option, result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof bId === 'string') {
                            bId = this.toObjectId(bId);
                        }
                        findDoc = { _id: bId };
                        uploadDoc = {
                            $set: { brandLogo: logoUri }
                        };
                        option = { returnOriginal: false };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._col.findOneAndUpdate(findDoc, uploadDoc, option)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result.value];
                    case 3:
                        error_5 = _a.sent();
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Brands.prototype.update = function (bId, updateDoc) {
        return __awaiter(this, void 0, void 0, function () {
            var findDoc, cutImage, option, result, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof bId === 'string') {
                            bId = this.toObjectId(bId);
                        }
                        findDoc = { _id: bId };
                        cutImage = {
                            $set: {
                                brandName: updateDoc.brandName,
                                brandInfo: updateDoc.brandInfo
                            }
                        };
                        option = {
                            returnOriginal: false
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._col.findOneAndUpdate(bId, cutImage, option)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result.value];
                    case 3:
                        error_6 = _a.sent();
                        throw error_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Brands.prototype.updateBrandInfo = function (bid, newInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof bid === 'string') {
                            bid = this.toObjectId(bid);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._col.findOneAndUpdate({ _id: bid }, { $set: { brandInfo: newInfo } }, { returnOriginal: false })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result.value];
                    case 3:
                        error_7 = _a.sent();
                        throw error_7;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Brands.prototype.delete = function (bId) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof bId === 'string') {
                            bId = this.toObjectId(bId);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._col.deleteOne({ _id: bId })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result.result.ok === 1 ? true : false];
                    case 3:
                        error_8 = _a.sent();
                        throw error_8;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Brands;
}(DatabaseModel_1.default));
exports.default = Brands;
