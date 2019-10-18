"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 18, max: 100 },
});
exports.UserModel = mongoose.model('User', UserSchema);
//# sourceMappingURL=model.js.map