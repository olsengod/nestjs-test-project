"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const charactersCfg = {
    production: {
        model_provider: process.env.USER_MODEL_PROVIDER || 'CHARACTERS_MODEL',
        model_document_limit: 1000,
    },
    development: {
        model_provider: process.env.USER_MODEL_PROVIDER || 'CHARACTERS_MODEL',
        model_document_limit: 1000,
    },
};
exports.default = charactersCfg[process.env.NODE_ENV];
//# sourceMappingURL=characters.js.map