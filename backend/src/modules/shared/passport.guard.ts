import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';

// tslint:disable-next-line:no-var-requires
require('dotenv').config();

@Injectable()
export class PassportGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const reqContext = context.switchToHttp().getRequest();
    const token = reqContext.signedCookies.cal_access_token;

    if (!token) {
      return false;
    }

    return true
  }
}
