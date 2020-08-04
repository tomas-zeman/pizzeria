import { IsEmail, IsOptional, IsString } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  userEmail: string;
  @IsString()
  userPassword: string;
  @IsOptional()
  jwtPayload?: any;
}

// tslint:disable-next-line:max-classes-per-file
export class LogoutUserDto {
  @IsOptional()
  jwtPayload?: any;
}
