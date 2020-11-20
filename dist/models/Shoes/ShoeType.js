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
var mongodb_1 = require("mongodb");
// import deepCloneFunc from '../../functions/deepCloneJson'
var ShoeType = /** @class */ (function (_super) {
    __extends(ShoeType, _super);
    function ShoeType() {
        var _this = _super.call(this, 'bt', ['shoe_type', 'category']) || this;
        _this._col = _this.collections[0];
        _this._cateCol = _this.collections[1];
        return _this;
    }
    // when adding a new type of shoe
    ShoeType.prototype.write = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var result, ret, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this._col.insertOne(info)];
                    case 1:
                        result = _a.sent();
                        if (result.insertedCount !== 1) {
                            throw new Error('insert result not equal to 1');
                        }
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
    ShoeType.prototype.readAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, resultArray, _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this._col.find()];
                    case 1:
                        result = _b.sent();
                        _a = this.populateCategory;
                        return [4 /*yield*/, result.toArray()];
                    case 2:
                        resultArray = _a.apply(this, [_b.sent()]);
                        return [2 /*return*/, resultArray];
                    case 3:
                        error_2 = _b.sent();
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // get only shoes type to client
    ShoeType.prototype.readByCategory = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var category_id, result, resultArray, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this._cateCol.findOne({ category: category }, { projection: { _id: 1 } })];
                    case 1:
                        category_id = _a.sent();
                        if (!category_id._id) {
                            throw new Error('no category found');
                        }
                        return [4 /*yield*/, this._col.find({ category: category_id })];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, result.toArray()];
                    case 3:
                        resultArray = _a.sent();
                        return [2 /*return*/, resultArray];
                    case 4:
                        error_3 = _a.sent();
                        throw error_3;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ShoeType.prototype.update = function (tId, updateDoc) {
        return __awaiter(this, void 0, void 0, function () {
            var option, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof tId === 'string') {
                            tId = this.toObjectId(tId);
                        }
                        option = {
                            returnOriginal: false
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._col.findOneAndUpdate(tId, updateDoc, option)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result.value];
                    case 3:
                        error_4 = _a.sent();
                        throw error_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ShoeType.prototype.updateCategory = function (tid, category) {
        return __awaiter(this, void 0, void 0, function () {
            var shoeType, shoeTypeValue, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof tid === 'string') {
                            tid = this.toObjectId(tid);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._col.findOneAndUpdate(
                            // filter
                            { _id: tid }, 
                            // update operation
                            {
                                $set: {
                                    category: category
                                }
                            }, 
                            // option
                            { returnOriginal: false })];
                    case 2:
                        shoeType = _a.sent();
                        shoeTypeValue = shoeType.value;
                        return [2 /*return*/, {
                                _id: shoeTypeValue._id,
                                shoeType: shoeTypeValue.shoe_type,
                                category: shoeTypeValue.category
                            }];
                    case 3:
                        error_5 = _a.sent();
                        throw error_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ShoeType.prototype.updateTypeName = function (tid, newName) {
        return __awaiter(this, void 0, void 0, function () {
            var result, resultValue, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof tid === 'string') {
                            tid = this.toObjectId(tid);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._col.findOneAndUpdate({ _id: tid }, { $set: { shoeType: newName } }, { returnOriginal: false })];
                    case 2:
                        result = _a.sent();
                        resultValue = result.value;
                        return [2 /*return*/, {
                                _id: resultValue._id,
                                shoeType: resultValue.shoeType,
                                category: resultValue.category
                            }];
                    case 3:
                        error_6 = _a.sent();
                        throw error_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ShoeType.prototype.delete = function (stId) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof stId === 'string') {
                            stId = this.toObjectId(stId);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._col.deleteOne({ _id: stId })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result.result.ok === 1 ? true : false];
                    case 3:
                        error_7 = _a.sent();
                        throw error_7;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ShoeType.prototype.populateCategory = function (st) {
        return __awaiter(this, void 0, void 0, function () {
            var error_8;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.all(st.map(function (ty) { return __awaiter(_this, void 0, void 0, function () {
                                var cateIds, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (Array.isArray(ty.category)) {
                                                cateIds = ty.category.map(function (cateid) { return new mongodb_1.ObjectId(cateid); });
                                            }
                                            _a = ty;
                                            return [4 /*yield*/, this._cateCol.find({ _id: { $in: cateIds } }).toArray()];
                                        case 1:
                                            _a.category = _b.sent();
                                            return [2 /*return*/, ty];
                                    }
                                });
                            }); }))];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_8 = _a.sent();
                        throw error_8;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ShoeType;
}(DatabaseModel_1.default));
exports.default = ShoeType;
