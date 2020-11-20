"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("./controllers");
var router = express_1.Router();
// get shoes info
router.get('/shoe', controllers_1.getShoes);
//get brands info
router.get('/brand', controllers_1.getBrands);
// get category and type for navmenu
router.get('/shoemenu', controllers_1.getCategoryType);
exports.default = router;
