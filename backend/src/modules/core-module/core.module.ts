import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { OfferModule } from './offer/offer.module';

@Module({
  imports: [UserModule, OrderModule, OfferModule],
})
export class CoreModule {
}
