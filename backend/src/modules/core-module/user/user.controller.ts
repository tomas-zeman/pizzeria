import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  LoginUserDto,
  LogoutUserDto,
} from './user.dto';
import { UserService } from './user.service';
import { PassportGuard } from '../../shared/passport.guard';

// tslint:disable-next-line:no-var-requires
require('dotenv').config();

@Controller('api/core/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('login')
  @HttpCode(200)
  async login(@Body() payload: LoginUserDto, @Req() { res }) {
    const [_, token] = await this.userService.login(payload);
    res.cookie('cal_access_token', token, {
      httpOnly: true,
      secure: false,
      maxAge: 100000000000,
      signed: true,
      sameSite: 'Lax',
    });

    return 'ok';
  }

  @Delete('logout')
  @UseGuards(new PassportGuard())
  @HttpCode(200)
  async logout(@Body() payload: LogoutUserDto, @Req() { res }) {
    res.cookie('cal_access_token', '', {
      httpOnly: true,
      secure: false,
      maxAge: 0,
      signed: true,
      sameSite: 'Lax',
    });
    return { status: 'ok' };
  }
}
