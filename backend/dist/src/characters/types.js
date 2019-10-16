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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
let CharacterGQL = class CharacterGQL {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CharacterGQL.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CharacterGQL.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CharacterGQL.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], CharacterGQL.prototype, "resourceURI", void 0);
CharacterGQL = __decorate([
    type_graphql_1.ObjectType()
], CharacterGQL);
exports.CharacterGQL = CharacterGQL;
let PaginatedListGQL = class PaginatedListGQL {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], PaginatedListGQL.prototype, "total", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], PaginatedListGQL.prototype, "offset", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], PaginatedListGQL.prototype, "limit", void 0);
__decorate([
    type_graphql_1.Field(() => [CharacterGQL]),
    __metadata("design:type", Array)
], PaginatedListGQL.prototype, "characters", void 0);
PaginatedListGQL = __decorate([
    type_graphql_1.ObjectType()
], PaginatedListGQL);
exports.PaginatedListGQL = PaginatedListGQL;
//# sourceMappingURL=types.js.map