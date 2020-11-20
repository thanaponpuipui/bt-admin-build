"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res) {
    res.status(404);
    if (req.accepts('html')) {
        return res.render('error/404page', { url: req.url });
    }
    if (req.accepts('json')) {
        return res.json({ error: 'Not Found' });
    }
    return res.type('txt').send('Not Found');
}
exports.default = default_1;
