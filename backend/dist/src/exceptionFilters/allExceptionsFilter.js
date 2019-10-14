"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const exceptionInfo = {
            statusCode: 400,
            data: [],
        };
        if (exception instanceof common_1.HttpException) {
            exceptionInfo.statusCode = exception.message.statusCode;
            if (exception.message instanceof Array) {
                exceptionInfo.data = exception.message.map((error) => {
                    return Object.values(error.constraints);
                });
            }
            else {
                exceptionInfo.data = [exception.message.error];
            }
        }
        else {
            exceptionInfo.statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            exceptionInfo.data = ['Internal server error'];
        }
        response.status(exceptionInfo.statusCode).json({
            statusCode: exceptionInfo.statusCode,
            data: exceptionInfo.data,
        });
    }
};
AllExceptionsFilter = __decorate([
    common_1.Catch()
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=allExceptionsFilter.js.map