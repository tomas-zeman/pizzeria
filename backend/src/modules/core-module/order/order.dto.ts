import { IsEmail, IsOptional, IsPositive, IsString, IsUUID, IsArray } from 'class-validator';

export class GetOrderDto {
    @IsString()
    id: string;
}

// tslint:disable-next-line:max-classes-per-file
export class PlaceOrderDto {
    @IsUUID()
    id: string;
    @IsArray()
    items: any[];
    @IsString()
    state: string;
    @IsString()
    name: string;
    @IsString()
    surname: string;
    @IsString()
    phone: string;
}

// tslint:disable-next-line:max-classes-per-file
export class UpdateOrderDto {
    @IsUUID()
    id: string;
    @IsString()
    state: string;
}
