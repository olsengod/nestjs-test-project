"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const service_1 = require("./service");
const types_1 = require("./types");
const dto_1 = require("./dto");
let CharactersResolver = class CharactersResolver {
    constructor(charactersService) {
        this.charactersService = charactersService;
    }
    async getPaginatedList(getPaginatedListArgs) {
        return await this.charactersService.getCharacters(getPaginatedListArgs);
    }
};
__decorate([
    graphql_1.Query(() => types_1.PaginatedListGQL),
    graphql_1.ResolveProperty('characters', () => [types_1.CharacterGQL]),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetPaginatedListArgs]),
    __metadata("design:returntype", Promise)
], CharactersResolver.prototype, "getPaginatedList", null);
CharactersResolver = __decorate([
    graphql_1.Resolver(() => types_1.CharacterGQL),
    __metadata("design:paramtypes", [service_1.CharactersService])
], CharactersResolver);
exports.CharactersResolver = CharactersResolver;
//# sourceMappingURL=resolver.js.map