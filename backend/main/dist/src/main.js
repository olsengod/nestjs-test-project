"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const helmet = require("helmet");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
const server_1 = require("../config/server");
const allExceptionsFilter_1 = require("./exceptionFilters/allExceptionsFilter");
const rabitmq_1 = require("../config/rabitmq");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(helmet());
    app.enableCors();
    app.useGlobalFilters(new allExceptionsFilter_1.AllExceptionsFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    app.connectMicroservice({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [`amqp://${rabitmq_1.default.host}:${rabitmq_1.default.port}`],
            queue: 'counter_queue',
            queueOptions: { durable: false },
        },
    });
    await app.startAllMicroservicesAsync();
    await app.listen(server_1.default.port);
    console.log(`[SERVER] Listening on ${server_1.default.port} port`);
}
bootstrap();
//# sourceMappingURL=main.js.map