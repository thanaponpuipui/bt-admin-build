"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainDb = exports.dbUrl = exports.port = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var env = process.env;
// using dotenv for development
if (env.NODE_ENV !== 'production') {
    dotenv_1.default.config();
}
// server running port set default to 8000 if PORT not found
exports.port = env.PORT || 8000;
// database auth
// uri for mongodb
exports.dbUrl = env.DB_URI || 'mongodb://localhost:27017'; // default to local mongodb uri
// database name use in multiple models
exports.mainDb = env.MAIN_DB_NAME || 'bt'; // default "bt"
