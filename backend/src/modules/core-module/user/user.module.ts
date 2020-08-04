import { HttpModule, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';
// tslint:disable-next-line:no-var-requires
require('dotenv').config();

@Module({
  imports: [
    JwtModule.register({
      secretOrPrivateKey: process.env.JWR_SECRET,
    }),
    HttpModule,
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
