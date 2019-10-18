"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CharacterSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    resourceURI: { type: String, required: false },
});
exports.CharacterModel = (connection) => connection.model('Character', CharacterSchema);
//# sourceMappingURL=model.js.map