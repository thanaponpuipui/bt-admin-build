"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var middlewares_1 = require("../middlewares");
var controllers_1 = require("./controllers");
var router = express_1.Router();
// page mapping
router.get('/', controllers_1.viewPageController.toHome);
router.get('/product-add', controllers_1.viewPageController.toProductInput);
router.get('/type-category', controllers_1.viewPageController.toTypeCategory);
router.get('/view', controllers_1.viewPageController.toProductView);
router.get('/brand-edit', controllers_1.viewPageController.toBrandView);
router.get('/pages-setting', controllers_1.viewPageController.toPagesSetting);
// data mapping
router.post('/product', middlewares_1.urlencodeParser, controllers_1.productController.postProduct);
router.put('/product', middlewares_1.jsonParser, controllers_1.productController.putProduct);
router.patch('/product-image', middlewares_1.urlencodeParser, controllers_1.productController.patchProductImage);
router.delete('/product/:id', controllers_1.productController.deleteProduct);
router.post('/shoe-type', middlewares_1.jsonParser, controllers_1.shoeTypeController.postShoeType);
router.put('/shoe-type', middlewares_1.jsonParser, controllers_1.shoeTypeController.putShoeType);
router.delete('/shoe-type/:id', controllers_1.shoeTypeController.deleteShoeType);
router.post('/category', middlewares_1.jsonParser, controllers_1.categoryController.postCategory);
router.put('/category', middlewares_1.jsonParser, controllers_1.categoryController.putCategory);
router.delete('/category/:id', controllers_1.categoryController.deleteCategory);
router.post('/brand', middlewares_1.urlencodeParser, controllers_1.brandController.postBrand);
router.put('/brand', middlewares_1.jsonParser, controllers_1.brandController.putBrand);
router.patch('/brand-image', middlewares_1.urlencodeParser, controllers_1.brandController.patchBrandLogo);
router.delete('/brand/:id', controllers_1.brandController.deleteBrand);
//router.put('/banner', urlencodeParser, putBanner)
exports.default = router;
