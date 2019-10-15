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
const class_validator_1 = require("class-validator");
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
let GetCharactersArgs = class GetCharactersArgs {
};
__decorate([
    type_graphql_1.Field(),
    class_validator_1.IsString({
        message: 'Parameter nameStartsWith should be a string',
    }),
    __metadata("design:type", String)
], GetCharactersArgs.prototype, "nameStartsWith", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    class_validator_1.IsInt({
        message: 'Parameter offset should be an integer',
    }),
    __metadata("design:type", Number)
], GetCharactersArgs.prototype, "offset", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    class_validator_1.IsInt({
        message: 'Parameter limit should be an integer',
    }),
    class_validator_1.Min(1, {
        message: 'Minimal limit is $constraint1 characters, but actual is $value',
    }),
    class_validator_1.Max(100, {
        message: 'Maximum limit is $constraint1 characters, but actual is $value',
    }),
    __metadata("design:type", Number)
], GetCharactersArgs.prototype, "limit", void 0);
GetCharactersArgs = __decorate([
    type_graphql_1.ArgsType()
], GetCharactersArgs);
exports.GetCharactersArgs = GetCharactersArgs;
//# sourceMappingURL=types.js.map