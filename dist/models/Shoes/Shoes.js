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
var Category_1 = __importDefault(require("./Category"));
var ShoeType_1 = __importDefault(require("./ShoeType"));
var Brands_1 = __importDefault(require("../Brands/Brands"));
var Shoes = /** @class */ (function (_super) {
    __extends(Shoes, _super);
    function Shoes() {
        var _this = _super.call(this, 'bt', ['shoes', 'category', 'shoe_types', 'brands']) || this;
        _this._categoryModel = new Category_1.default();
        _this._shoeTypeModel = new ShoeType_1.default();
        _this._brandModel = new Brands_1.default();
        _this._categoryNameList = [];
        _this._shoeTypeList = [];
        _this._brandList = [];
        _this._col = _this.collections[0];
        _this._cateCol = _this.collections[1];
        _this._shoeTypeCol = _this.collections[2];
        _this._brandCol = _this.collections[3];
        // full return projection object
        _this._returnProjection = {
            _id: true,
            name: true,
            price: true,
            url: true,
            imageUrl: true,
            discountType: true,
            discount: true,
            category: true,
            shoeType: true
        };
        return _this;
    }
    Shoes.prototype.write = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var name_1, price, url, imageUrl, category, shoeType, brand, p, cate, arg, result, ret, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        name_1 = info.name, price = info.price, url = info.url, imageUrl = info.imageUrl, category = info.category, shoeType = info.shoeType, brand = info.brand;
                        p = typeof price === 'string' ? parseFloat(price) : price;
                        cate = Array.isArray(category) ? category : [category];
                        arg = {
                            name: name_1,
                            price: p,
                            url: url,
                            category: cate,
                            shoeType: shoeType,
                            imageUrl: imageUrl,
                            brand: brand
                        };
                        return [4 /*yield*/, this._col.insertOne(arg)];
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
    Shoes.prototype.read = function (finder) {
        return __awaiter(this, void 0, void 0, function () {
            var result, shoes, shoeFull, _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this._col.find(finder, {
                                projection: this._returnProjection
                            })];
                    case 1:
                        result = _b.sent();
                        return [4 /*yield*/, result.toArray()];
                    case 2:
                        shoes = _b.sent();
                        _a = this.populateCategory;
                        return [4 /*yield*/, this.populateShoeType(shoes)];
                    case 3: return [4 /*yield*/, _a.apply(this, [_b.sent()])];
                    case 4:
                        shoeFull = _b.sent();
                        return [2 /*return*/, shoeFull];
                    case 5:
                        error_2 = _b.sent();
                        throw error_2;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Shoes.prototype.readByCategory = function (cid) {
        return __awaiter(this, void 0, void 0, function () {
            var shoes, shoesFull, _a, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (typeof cid === 'string') {
                            cid = this.toObjectId(cid);
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this._col.find({ category: cid }).toArray()];
                    case 2:
                        shoes = _b.sent();
                        _a = this.populateCategory;
                        return [4 /*yield*/, this.populateShoeType(shoes)];
                    case 3: return [4 /*yield*/, _a.apply(this, [_b.sent()])];
                    case 4:
                        shoesFull = _b.sent();
                        return [2 /*return*/, shoesFull];
                    case 5:
                        error_3 = _b.sent();
                        throw error_3;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Shoes.prototype.readByType = function (tid) {
        return __awaiter(this, void 0, void 0, function () {
            var shoes, shoesWType, shoesFull, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof tid === 'string') {
                            tid = this.toObjectId(tid);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this._col.find({ shoeType: tid }).toArray()];
                    case 2:
                        shoes = _a.sent();
                        return [4 /*yield*/, this.populateShoeType(shoes)];
                    case 3:
                        shoesWType = _a.sent();
                        return [4 /*yield*/, this.populateCategory(shoesWType)];
                    case 4:
                        shoesFull = _a.sent();
                        return [2 /*return*/, shoesFull];
                    case 5:
                        error_4 = _a.sent();
                        throw new error_4;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Shoes.prototype.updateImage = function (pId, image) {
        return __awaiter(this, void 0, void 0, function () {
            var id, updateDoc, option, result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof pId === 'string') {
                            pId = this.toObjectId(pId);
                        }
                        id = { _id: pId };
                        updateDoc = {
                            $set: { imageUrl: image }
                        };
                        option = { returnOriginal: false };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._col.findOneAndUpdate(id, updateDoc, option)];
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
    Shoes.prototype.update = function (finder, updateDoc) {
        return __awaiter(this, void 0, void 0, function () {
            var name, price, url, shoeType, category, brand, findDoc, cutImageDoc, result, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof finder === 'string') {
                            finder = this.toObjectId(finder);
                        }
                        name = updateDoc.name, price = updateDoc.price, url = updateDoc.url, shoeType = updateDoc.shoeType, category = updateDoc.category, brand = updateDoc.brand;
                        findDoc = {
                            _id: finder
                        };
                        cutImageDoc = {
                            $set: {
                                name: name,
                                price: price,
                                url: url,
                                shoeType: shoeType,
                                category: category,
                                brand: brand
                            }
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._col.findOneAndUpdate(findDoc, updateDoc, {
                                returnOriginal: false,
                                projection: this._returnProjection
                            })];
                    case 2:
                        result = _a.sent();
                        if (result.ok) {
                            throw new Error('error update shoe data');
                        }
                        return [2 /*return*/, result.value];
                    case 3:
                        error_6 = _a.sent();
                        throw error_6;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Shoes.prototype.delete = function (sId) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof sId === 'string') {
                            sId = this.toObjectId(sId);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._col.deleteOne({ _id: sId })];
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
    Shoes.prototype.updateDiscount = function (sId, disData) {
        return __awaiter(this, void 0, void 0, function () {
            var findDoc, updateDoc, option, result, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof sId === 'string') {
                            sId = this.toObjectId(sId);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        if (disData.discountType === 'no') {
                            throw new Error('Cannot set discount to no in updateDiscount function. Use discountOff instead.');
                        }
                        findDoc = { _id: sId };
                        updateDoc = {
                            $set: disData
                        };
                        option = { returnOriginal: false };
                        return [4 /*yield*/, this._col.findOneAndUpdate(findDoc, updateDoc, option)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result.value];
                    case 3:
                        error_8 = _a.sent();
                        throw error_8;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Shoes.prototype.discountOff = function (sId) {
        return __awaiter(this, void 0, void 0, function () {
            var findDoc, updateDoc, option, result, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof sId === 'string') {
                            sId = this.toObjectId(sId);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        findDoc = { _id: sId };
                        updateDoc = {
                            $set: {
                                discountType: 'no',
                                discount: 0
                            }
                        };
                        option = { returnOriginal: false };
                        return [4 /*yield*/, this._col.findOneAndUpdate(findDoc, updateDoc, option)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result.value];
                    case 3:
                        error_9 = _a.sent();
                        throw error_9;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // private methods
    Shoes.prototype.populateCategory = function (shoes) {
        return __awaiter(this, void 0, void 0, function () {
            var cateMap_1, popShoes, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!(!this._categoryNameList || this._categoryNameList.length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getCateList()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        cateMap_1 = {};
                        this._categoryNameList.forEach(function (cate) {
                            var stringId = cate._id.toString();
                            cateMap_1[stringId] = cate;
                        });
                        popShoes = shoes.map(function (shoe) {
                            // return original when category undefined
                            if (shoe.category === undefined) {
                                return shoe;
                            }
                            // add each category it's info
                            var popCategory = shoe.category.map(function (cate) {
                                var strId = cate.toString();
                                if (!cateMap_1[strId]) {
                                    throw new Error('no match category.');
                                }
                                return cateMap_1[strId];
                            });
                            shoe.category = popCategory;
                            // can also do this.
                            // shoe.category = await this._cateCol.find({_id: {$in: shoe.category}}).toArray()
                            // finally return shoe with full category[] info
                            return shoe;
                        });
                        return [2 /*return*/, popShoes];
                    case 3:
                        error_10 = _a.sent();
                        throw error_10;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Shoes.prototype.populateShoeType = function (shoes) {
        return __awaiter(this, void 0, void 0, function () {
            var typeMap_1, fullTypeShoe, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!(!this._shoeTypeList || this._shoeTypeList.length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getTypeList()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        typeMap_1 = {};
                        this._shoeTypeList.forEach(function (ty) {
                            var stringId = ty._id.toString();
                            typeMap_1[stringId] = ty;
                        });
                        fullTypeShoe = shoes.map(function (shoe) {
                            // just return original when shoeType undefined
                            if (shoe.shoeType === undefined) {
                                return shoe;
                            }
                            // find match id by using map with string id
                            var strId = shoe.shoeType.toString();
                            if (shoe.shoeType === undefined) {
                                throw new Error('no match shoe type.');
                            }
                            // replace old id only data with full data
                            // not include category
                            var _a = typeMap_1[strId], _id = _a._id, shoeType = _a.shoeType, shoeType_thai = _a.shoeType_thai;
                            var fullType = { _id: _id, shoeType: shoeType, shoeType_thai: shoeType_thai };
                            shoe.shoeType = fullType;
                            // return shoe with full shoeType data
                            return shoe;
                        });
                        return [2 /*return*/, fullTypeShoe];
                    case 3:
                        error_11 = _a.sent();
                        throw error_11;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Shoes.prototype.populateBrand = function (shoes) {
        return __awaiter(this, void 0, void 0, function () {
            var shoesPromise;
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    shoesPromise = shoes.map(function (shoe) { return __awaiter(_this, void 0, void 0, function () {
                        var brand;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this._brandCol.findOne({ _id: shoe.brand })];
                                case 1:
                                    brand = _a.sent();
                                    if (!brand) {
                                        throw new Error('no match brand.');
                                    }
                                    shoe.brand = brand;
                                    return [2 /*return*/, shoe];
                            }
                        });
                    }); });
                    return [2 /*return*/, Promise.all(shoesPromise)];
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    Shoes.prototype.getCateList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_12;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this._categoryModel.readAll()];
                    case 1:
                        _a._categoryNameList = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_12 = _b.sent();
                        throw error_12;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Shoes.prototype.getTypeList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_13;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this._shoeTypeModel.readAll()];
                    case 1:
                        _a._shoeTypeList = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_13 = _b.sent();
                        throw error_13;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Shoes.prototype.getBrandList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_14;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this._brandModel.read()];
                    case 1:
                        _a._brandList = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_14 = _b.sent();
                        throw error_14;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Shoes;
}(DatabaseModel_1.default));
exports.default = Shoes;
