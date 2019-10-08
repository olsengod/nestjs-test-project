"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverCfg = {
    production: {
        port: process.env.PORT || 3000,
    },
    development: {
        port: process.env.PORT || 3000,
    },
};
exports.default = serverCfg[process.env.NODE_ENV];
//# sourceMappingURL=server.js.map