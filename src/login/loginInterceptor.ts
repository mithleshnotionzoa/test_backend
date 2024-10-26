import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LoginInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // console.log('context', context, 'next', next);
    console.log('Before request...');

    return next.handle().pipe(
      tap((data) => {
        // Check if 'BadRequestException' or 'Invalid email format' is in the response data
        if (
          typeof data === 'string' &&
          (data.includes('BadRequestException') ||
            data.includes('Invalid email format'))
        ) {
          console.log('Invalid email format detected.');
          // Optionally modify the response data
          data = 'invalid email format';
          return data;
        }
      }),
    );
  }
}
