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
class FindById {
}
__decorate([
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], FindById.prototype, "id", void 0);
exports.FindById = FindById;
class CreateUserDto {
}
__decorate([
    class_validator_1.IsString({
        message: 'User name should be a string',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.Min(18, {
        message: 'User is too young. Minimal age is $constraint1 characters, but actual is $value',
    }),
    class_validator_1.Max(100, {
        message: 'User is too old. Maximum age is $constraint1 characters, but actual is $value',
    }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "age", void 0);
exports.CreateUserDto = CreateUserDto;
class UpdateUserDto {
}
__decorate([
    class_validator_1.IsString({
        message: 'User name should be a string',
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.Min(18, {
        message: 'User is too young. Minimal age is $constraint1 characters, but actual is $value',
    }),
    class_validator_1.Max(100, {
        message: 'User is too old. Maximum age is $constraint1 characters, but actual is $value',
    }),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "age", void 0);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=types.js.map