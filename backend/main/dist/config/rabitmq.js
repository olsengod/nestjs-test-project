"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rabbitmqCfg = {
    production: {
        host: process.env.RABBIT_HOST || 'localhost',
        port: process.env.RABBIT_PORT || 5672,
    },
    development: {
        host: process.env.RABBIT_HOST || 'localhost',
        port: process.env.RABBIT_PORT || 5672,
    },
};
exports.default = rabbitmqCfg[process.env.NODE_ENV];
//# sourceMappingURL=rabitmq.js.map