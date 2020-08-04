import { HttpModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { KindMock, OfferMock } from './offer.mock';
// tslint:disable-next-line:no-var-requires
require('dotenv').config();

@Module({
  imports: [
    JwtModule.register({
      secretOrPrivateKey: process.env.JWR_SECRET,
    }),
    HttpModule,
  ],
  providers: [OfferService, OfferMock, KindMock],
  controllers: [OfferController],
})
export class OfferModule {}
