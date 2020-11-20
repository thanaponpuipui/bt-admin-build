"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var DBConnection_1 = __importDefault(require("./DBConnection"));
//interface databaseBasicCrud {
//  write?:(info: Writable) => Promise<boolean | Readable | never>
//  read?:(finder: SearchData) => Promise<Readable[] | never>
//  update?:(finder:SearchData, update:DTO) => Promise<boolean | Readable[] | never>
//  delete?:(finder:SearchData) => Promise<boolean | never>
//}
var DatabaseModel = /** @class */ (function () {
    function DatabaseModel(database, collections) {
        var _this = this;
        this._database = database;
        this._collections = collections;
        this._client = DBConnection_1.default.client;
        this.db = this._client.db(this._database);
        this.collections = this._collections.map(function (col) { return _this.db.collection(col); });
    }
    DatabaseModel.prototype.isObjectId = function (id) {
        return mongodb_1.ObjectID.isValid(id);
    };
    DatabaseModel.prototype.toObjectId = function (id) {
        if (!this.isObjectId(id)) {
            throw new Error(id + ' is not an ObjectId');
        }
        return new mongodb_1.ObjectID(id);
    };
    return DatabaseModel;
}());
exports.default = DatabaseModel;
