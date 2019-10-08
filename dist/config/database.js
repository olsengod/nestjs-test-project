"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodbCfg = {
    production: {
        host: process.env.MONGO_HOST || 'localhost',
        port: process.env.MONGO_PORT || 27017,
        db_name: process.env.MONGO_DB_NAME || 'users',
    },
    development: {
        host: process.env.MONGO_HOST || 'localhost',
        port: process.env.MONGO_PORT || 27017,
        db_name: process.env.MONGO_DB_NAME || 'users_dev',
    },
};
exports.default = mongodbCfg[process.env.NODE_ENV];
//# sourceMappingURL=database.js.map