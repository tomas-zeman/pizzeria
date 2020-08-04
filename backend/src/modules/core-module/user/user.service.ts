import {
  Injectable,
} from '@nestjs/common';
import {
  LoginUserDto,
} from './user.dto';
import * as jwt from 'jsonwebtoken';
// tslint:disable-next-line:no-var-requires
require('dotenv').config();

@Injectable()
export class UserService {
  async login({ userEmail, userPassword }: LoginUserDto) {
    const user = {id: '', email: '', sessions: []};
    const jwtToken = jwt.sign(
      { user: user.id},
      process.env.JWR_SECRET,
    );
    user.sessions = [...(user.sessions ? user.sessions : []), jwtToken];

    return ['', jwtToken];
  }
}
