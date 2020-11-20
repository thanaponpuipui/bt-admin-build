"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudUploadImage = void 0;
var cloudinary_1 = require("cloudinary");
var env_config_1 = require("../config/env-config");
cloudinary_1.v2.config({
    cloud_name: 'drsriqezf',
    api_key: '291585948619379',
    api_secret: env_config_1.cloudinary_secret
});
function cloudUploadImage(file) {
    return new Promise(function (resolve, reject) {
        cloudinary_1.v2.uploader.upload(file, function (error, result) {
            if (error)
                return reject(error);
            if (result)
                return resolve(result.secure_url);
        });
    });
}
exports.cloudUploadImage = cloudUploadImage;
