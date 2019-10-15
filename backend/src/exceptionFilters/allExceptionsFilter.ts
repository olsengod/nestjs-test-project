import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';

import { ExceptionResponse } from './types';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    // const request = ctx.getRequest();
    const exceptionInfo: ExceptionResponse = {
      statusCode: 400,
      data: [],
    };

    if (exception instanceof HttpException) {
      exceptionInfo.statusCode = exception.message.statusCode;

      // DTO constraints exception
      if (exception.message instanceof Array) {
        exceptionInfo.data = exception.message.map((error: any) => {
          return Object.values(error.constraints);
        });
      } else {
        exceptionInfo.data = [exception.message.error];
      }

    } else {
      exceptionInfo.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      exceptionInfo.data = ['Internal server error'];
    }

    response.status(exceptionInfo.statusCode).json({
      statusCode: exceptionInfo.statusCode,
      // error: exceptionInfo.error,
      // timestamp: new Date().toISOString(),
      // path: request.url,
      data: exceptionInfo.data,
    });
  }
}
