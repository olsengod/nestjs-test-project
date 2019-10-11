"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const database_1 = require("../../config/database");
const characters_1 = require("../../config/characters");
exports.CharactersProviders = [
    {
        provide: characters_1.default.model_provider,
        useFactory: model_1.CharacterModel,
        inject: [database_1.default.db_provider],
    },
];
//# sourceMappingURL=providers.js.map