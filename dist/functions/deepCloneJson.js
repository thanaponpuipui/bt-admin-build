"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(obj) {
    if (!Array.isArray(obj) || typeof obj !== typeof {}) {
        throw new Error('deep clone function pass wrong argument type.');
    }
    return JSON.parse(JSON.stringify(obj));
}
exports.default = default_1;
