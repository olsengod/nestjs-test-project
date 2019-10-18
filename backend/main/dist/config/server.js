"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverCfg = {
    production: {
        port: process.env.PORT || 8080,
    },
    development: {
        port: process.env.PORT || 8080,
    },
};
exports.default = serverCfg[process.env.NODE_ENV];
//# sourceMappingURL=server.js.map