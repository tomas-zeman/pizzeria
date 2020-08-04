import { IsPositive, IsString, IsUUID } from 'class-validator';

export class PostItemDto {
  @IsUUID()
  id: string;
  @IsString()
  kindId: string;
  @IsString()
  name: string;
  @IsPositive()
  price: number;
  @IsString()
  description: string;
}

export class RemoveItemDto {
  @IsUUID()
  id: string;
}
