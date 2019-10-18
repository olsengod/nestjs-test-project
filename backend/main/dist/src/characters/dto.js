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
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
let GetPaginatedListArgs = class GetPaginatedListArgs {
};
__decorate([
    type_graphql_1.Field(),
    class_validator_1.IsString({
        message: 'Parameter $property should be a string',
    }),
    __metadata("design:type", String)
], GetPaginatedListArgs.prototype, "nameStartsWith", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    class_validator_1.IsInt({
        message: 'Parameter $property should be an integer',
    }),
    __metadata("design:type", Number)
], GetPaginatedListArgs.prototype, "offset", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    class_validator_1.IsInt({
        message: 'Parameter $property should be an integer',
    }),
    class_validator_1.Min(1, {
        message: 'Minimal $property is $constraint1 character, but actual is $value',
    }),
    class_validator_1.Max(100, {
        message: 'Maximum $property is $constraint1 characters, but actual is $value',
    }),
    __metadata("design:type", Number)
], GetPaginatedListArgs.prototype, "limit", void 0);
GetPaginatedListArgs = __decorate([
    type_graphql_1.ArgsType()
], GetPaginatedListArgs);
exports.GetPaginatedListArgs = GetPaginatedListArgs;
//# sourceMappingURL=dto.js.map