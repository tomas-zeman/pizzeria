import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';
import { SharedModule } from '../shared/shared.module';
import { OfferCardComponent } from './components/offer-card/offer-card.component';

@NgModule({
  declarations: [
    OfferComponent,
    OfferCardComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    OfferRoutingModule,
  ],
})
export class OfferModule { }
