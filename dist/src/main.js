"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const server_1 = require("../config/server");
const allExceptionsFilter_1 = require("./exceptionFilters/allExceptionsFilter");
const fillDB_1 = require("./helpers/fillDB");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new allExceptionsFilter_1.AllExceptionsFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    await app.listen(server_1.default.port);
    console.log(`[SERVER] Listening on ${server_1.default.port} port`);
    await fillDB_1.default();
}
bootstrap();
//# sourceMappingURL=main.js.map