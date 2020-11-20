"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(staticUrl) {
    // url look like "/admin/content_images/uploads/filename"
    // add fullpath + static befor url
    var rootPath = process.cwd();
    var fullPathToFile = rootPath + "/static/" + staticUrl;
    return fullPathToFile;
}
exports.default = default_1;
