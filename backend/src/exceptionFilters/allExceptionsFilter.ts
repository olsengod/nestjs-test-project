import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const exceptionInfo = exception instanceof HttpException
        ? {
            statusCode: exception.message.statusCode,
            error: exception.message.error,
            data: exception.message.message.length
              ? exception.message.message
              : null,
          }
        : {
            statusCode: 500,
            error: 'Internal server error',
            data: null,
          };

    response.status(exceptionInfo.statusCode).json({
      statusCode: exceptionInfo.statusCode,
      error: exceptionInfo.error,
      timestamp: new Date().toISOString(),
      path: request.url,
      data: exceptionInfo.data,
    });
  }
}
