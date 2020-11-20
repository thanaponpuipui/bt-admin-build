"use strict";
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
var add_data_1 = require("../../services/add_data");
var set_data_1 = require("../../services/set_data");
var remove_data_1 = require("../../services/remove_data");
var middlewares_1 = require("../../middlewares");
var multer_1 = __importDefault(require("multer"));
var ImageUploadError_1 = __importDefault(require("../../errors/system/FileError/ImageUploadError"));
var ImageUploadRequired_1 = __importDefault(require("../../errors/application/ValueError/ImageUploadRequired"));
var NoDocFound_1 = __importDefault(require("../../errors/application/ValueError/NoDocFound"));
// post method product add
function postProduct(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1, _a, pname, price, url, category, shoeType, brand, cate, imageUrl, useUri, id, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, middlewares_1.uploader(req, res)];
                case 1:
                    _b.sent();
                    if (req.file === undefined) {
                        return [2 /*return*/, next(new ImageUploadRequired_1.default('no image upload found.', 400))
                            //return res.status(400).json({result: 'fail', message: 'no image upload found'})
                        ];
                        //return res.status(400).json({result: 'fail', message: 'no image upload found'})
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    if (error_1 instanceof multer_1.default.MulterError) {
                        return [2 /*return*/, next(new ImageUploadError_1.default('cannot upload image.', 500))];
                    }
                    return [3 /*break*/, 3];
                case 3:
                    _a = req.body, pname = _a.pname, price = _a.price, url = _a.url, category = _a.category, shoeType = _a.shoeType, brand = _a.brand;
                    if (!Array.isArray(category)) {
                        cate = [category];
                    }
                    else {
                        cate = category;
                    }
                    imageUrl = req.file.path;
                    useUri = imageUrl.replace(process.cwd() + '/static', '');
                    _b.label = 4;
                case 4:
                    _b.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, add_data_1.addShoeService({
                            name: pname,
                            price: parseFloat(price),
                            url: url,
                            category: cate,
                            shoeType: shoeType,
                            imageUrl: useUri,
                            brand: brand
                        })];
                case 5:
                    id = _b.sent();
                    res.status(200).json({ result: 'success', message: pname + " has been added.", data: { _id: id } });
                    return [3 /*break*/, 7];
                case 6:
                    error_2 = _b.sent();
                    console.trace(error_2);
                    next(error_2);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function putProduct(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _id, name, url, price, brand, discount, discountType, shoeType, category, productInfo, result, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, _id = _a._id, name = _a.name, url = _a.url, price = _a.price, brand = _a.brand, discount = _a.discount, discountType = _a.discountType, shoeType = _a.shoeType, category = _a.category;
                    productInfo = {
                        name: name,
                        url: url,
                        price: price,
                        brand: brand,
                        discount: discount,
                        discountType: discountType,
                        shoeType: shoeType,
                        category: category,
                    };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, set_data_1.setProductService(_id, productInfo)];
                case 2:
                    result = _b.sent();
                    res.status(200).json({ result: 'success', message: 'shoe update.', data: result });
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _b.sent();
                    next(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function patchProductDiscount(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _id, discount, discountType, discountData, message, percent, shoe, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, _id = _a._id, discount = _a.discount, discountType = _a.discountType;
                    discountData = { discount: discount, discountType: discountType };
                    message = '';
                    if (discountType === 'no') {
                        message = 'end discount';
                    }
                    else {
                        percent = discountType === 'percent' ? '%' : '';
                        message = "set discount to " + discount + percent;
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, set_data_1.setProductDiscountService(_id, discountData)];
                case 2:
                    shoe = _b.sent();
                    res.status(200).json({ result: 'success', message: message, date: shoe });
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _b.sent();
                    next(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function deleteProduct(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _id, result, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, remove_data_1.removeProductService(_id)];
                case 2:
                    result = _a.sent();
                    if (result === false) {
                        next(new NoDocFound_1.default('cannot delete shoe.', 400));
                    }
                    res.status(200).json({ result: 'success', message: "shoe deleted" });
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    next(error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function patchProductImage(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _id, imageUrl, result, error_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, _id = _a._id, imageUrl = _a.imageUrl;
                    return [4 /*yield*/, set_data_1.setProductImageService(_id, imageUrl)];
                case 1:
                    result = _b.sent();
                    res.status(200).json({ result: 'success', message: 'update shoe image.', data: result });
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _b.sent();
                    next(error_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.default = {
    postProduct: postProduct,
    putProduct: putProduct,
    patchProductImage: patchProductImage,
    deleteProduct: deleteProduct
};
