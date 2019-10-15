"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const resolver_1 = require("./resolver");
const service_1 = require("./service");
const providers_1 = require("./providers");
const module_1 = require("../database/module");
let CharactersModule = class CharactersModule {
};
CharactersModule = __decorate([
    common_1.Module({
        imports: [module_1.DatabaseModule],
        providers: [
            service_1.CharactersService,
            resolver_1.CharactersResolver,
            ...providers_1.CharactersProviders,
        ],
    })
], CharactersModule);
exports.CharactersModule = CharactersModule;
//# sourceMappingURL=module.js.map