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
const class_transformer_1 = require("class-transformer");
class GetCharactersDto {
}
__decorate([
    class_validator_1.IsString({
        message: 'Parameter nameStartsWith should be a string',
    }),
    __metadata("design:type", String)
], GetCharactersDto.prototype, "nameStartsWith", void 0);
__decorate([
    class_transformer_1.Transform(offset => parseInt(offset, 10)),
    class_validator_1.IsInt({
        message: 'Parameter offset should be an integer',
    }),
    __metadata("design:type", Number)
], GetCharactersDto.prototype, "offset", void 0);
__decorate([
    class_transformer_1.Transform(limit => parseInt(limit, 10)),
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
], GetCharactersDto.prototype, "limit", void 0);
exports.GetCharactersDto = GetCharactersDto;
//# sourceMappingURL=types.js.map