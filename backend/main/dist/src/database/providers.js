"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const database_1 = require("../../config/database");
async function setDBConnection() {
    try {
        const connection = await mongoose.connect(`mongodb://${database_1.default.host}:${database_1.default.port}/${database_1.default.db_name}`, {
            useNewUrlParser: true,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 10,
            bufferMaxEntries: 0,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        });
        console.log(`[MONGODB] Connection with '${database_1.default.db_name}' database was established`);
        return connection;
    }
    catch (err) {
        console.log(`[MONGODB] ${err}`);
    }
}
exports.databaseProviders = [
    {
        provide: database_1.default.db_provider,
        useFactory: setDBConnection,
    },
];
//# sourceMappingURL=providers.js.map