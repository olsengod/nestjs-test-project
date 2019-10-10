"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userCfg = {
    production: {
        model_provider: process.env.USER_MODEL_PROVIDER || 'USER_MODEL',
    },
    development: {
        model_provider: process.env.USER_MODEL_PROVIDER || 'USER_MODEL',
    },
};
exports.default = userCfg[process.env.NODE_ENV];
//# sourceMappingURL=user.js.map