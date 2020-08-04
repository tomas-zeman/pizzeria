import { HttpModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { OrderService } from './order.service';
import { OrderMock } from './order.mock';
import { OrderController } from './order.controller';
// tslint:disable-next-line:no-var-requires
require('dotenv').config();

@Module({
    imports: [
        JwtModule.register({
            secretOrPrivateKey: process.env.JWR_SECRET,
        }),
        HttpModule,
    ],
    providers: [OrderService, OrderMock],
    controllers: [OrderController],
})
export class OrderModule {}
