"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var util_1 = __importDefault(require("util"));
var maxFileSize = 2 * 1024 * 1024;
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, process.cwd() + '/static/content-images/uploads');
    },
    filename: function (req, file, cb) {
        var originalname = file.originalname;
        var dotPosition = originalname.lastIndexOf('.');
        var fileName = originalname.substr(0, dotPosition).replace(' ', '');
        var extension = originalname.substr(dotPosition, originalname.length);
        var date = new Date();
        var fullDate = "y" + date.getFullYear() + "m" + (date.getMonth() + 1) + "d" + date.getDate() + "-h" + date.getHours() + "m" + date.getMinutes() + "s" + date.getSeconds();
        var newFileName = fileName + "-" + fullDate + extension;
        cb(null, newFileName);
    }
});
var uploadFile = multer_1.default({
    storage: storage,
    limits: { fileSize: maxFileSize }
}).single("image");
var uploader = util_1.default.promisify(uploadFile);
exports.default = uploader;
