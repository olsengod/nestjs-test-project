"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const database_1 = require("../../config/database");
const user_1 = require("../../config/user");
exports.UserProviders = [
    {
        provide: user_1.default.model_provider,
        useFactory: model_1.UserModel,
        inject: [database_1.default.db_provider],
    },
];
//# sourceMappingURL=providers.js.map