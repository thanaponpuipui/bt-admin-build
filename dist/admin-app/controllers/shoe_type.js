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
var NoDocFound_1 = __importDefault(require("../../errors/application/ValueError/NoDocFound"));
function postShoeType(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, shoeType, shoeType_thai, category, result, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, shoeType = _a.shoeType, shoeType_thai = _a.shoeType_thai, category = _a.category;
                    return [4 /*yield*/, add_data_1.addShoeTypeService({ shoeType: shoeType, shoeType_thai: shoeType_thai, category: category })];
                case 1:
                    result = _b.sent();
                    res.status(200).json({ result: 'success', message: 'add new shoe type success.', data: result });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    next(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function putShoeType(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, shoeType, shoeType_thai, category, _id, result, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, shoeType = _a.shoeType, shoeType_thai = _a.shoeType_thai, category = _a.category, _id = _a._id;
                    return [4 /*yield*/, set_data_1.setShoeTypeService(_id, { shoeType: shoeType, shoeType_thai: shoeType_thai, category: category })];
                case 1:
                    result = _b.sent();
                    res.status(200).json({ result: 'success', message: 'update shoe type.', data: result });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    next(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function deleteShoeType(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _id, result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    _id = req.params.id;
                    return [4 /*yield*/, remove_data_1.removeShoeTypeService(_id)];
                case 1:
                    result = _a.sent();
                    if (!result) {
                        throw new NoDocFound_1.default('cannot delete shoe type. no data found.', 400);
                    }
                    res.status(200).json({ result: 'success', message: 'delete shoe type' });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    next(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.default = {
    postShoeType: postShoeType,
    putShoeType: putShoeType,
    deleteShoeType: deleteShoeType
};
