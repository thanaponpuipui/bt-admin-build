"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = __importDefault(require("mongodb"));
var env_config_1 = require("../config/env-config");
var uri = env_config_1.dbUri;
var option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
var client = new mongodb_1.default.MongoClient(uri, option);
exports.default = client;
