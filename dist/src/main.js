"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const server_1 = require("../config/server");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(server_1.default.port);
    console.log(`[SERVER] Listening on ${server_1.default.port} port`);
}
bootstrap();
//# sourceMappingURL=main.js.map