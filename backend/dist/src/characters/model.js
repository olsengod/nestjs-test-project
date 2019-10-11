"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const CharacterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    resourceURI: { type: String, required: true },
});
exports.CharacterModel = (connection) => connection.model('Character', CharacterSchema);
//# sourceMappingURL=model.js.map