"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    age: Number,
    created_date: {
        type: Date,
        default: Date.now,
    },
});
//# sourceMappingURL=user.schema.js.map