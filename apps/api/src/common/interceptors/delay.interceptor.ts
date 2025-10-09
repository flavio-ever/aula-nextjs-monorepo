import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class DelayInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context
      .switchToHttp()
      .getRequest<{ query?: { delayMs?: string } }>();
    const delayMs = req.query?.delayMs ? Number(req.query.delayMs) : 0;
    if (delayMs > 0) {
      return next.handle().pipe(delay(delayMs));
    }
    return next.handle();
  }
}
