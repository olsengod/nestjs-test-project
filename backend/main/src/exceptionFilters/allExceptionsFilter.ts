import { Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { GqlExceptionFilter} from '@nestjs/graphql';

// import { ExceptionResponse } from './types';

@Catch()
export class AllExceptionsFilter implements GqlExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    if (exception instanceof HttpException) {

      // DTO constraints exception
      if (exception.message.message instanceof Array) {
        const constraints: unknown[] = [];
        exception.message.message.forEach(error => {
          constraints.push(...Object.values(error.constraints));
        });
        exception.message.message = constraints;
      } else {
        exception.message.message = [exception.message.error];
      }
    }

    return exception;
  }
}
