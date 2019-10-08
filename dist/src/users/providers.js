"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
exports.UserProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: model_1.UserModel,
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=providers.js.map