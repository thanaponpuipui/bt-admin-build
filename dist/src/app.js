"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var env_config_1 = require("./config/env-config");
// middlewares
var middlewares_1 = require("./middlewares");
// database connection object.
var DBConnection_1 = __importDefault(require("./models/DBConnection"));
// connect mongo client to start using database client in models.
var mongoConnect = DBConnection_1.default.connect({ url: env_config_1.dbUrl });
// import app router here.
var admin_app_1 = __importDefault(require("./admin-app"));
var web_api_1 = __importDefault(require("./web-api"));
// init express application.
var app = express_1.default();
// set view engine.
app.set('view engine', 'pug');
// set static files path.
app.use(express_1.default.static('static'));
// app entry page.
app.get('/', function (req, res) {
    res.render('index.pug');
});
// assign app route.
app.use('/admin', admin_app_1.default);
app.use('/ser', web_api_1.default);
// error handling route.
app.use(middlewares_1.errorPageRender);
Promise.all([mongoConnect]).then(function (result) {
    // starting server.
    app.listen(env_config_1.port, function () {
        console.log("server running on port: " + env_config_1.port);
    });
}).catch(function (error) {
    if (error.note) {
        console.log('error note', error.note);
    }
    console.log(error.name, error.message);
    process.exit();
});
