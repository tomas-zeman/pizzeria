import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BaseUrlInterceptor } from './shared/interceptors/base-url.interceptor';
import { reducers } from './store';
import { OfferEffects } from './offer/store/offer.effects';
import { KindService } from './offer/services/kind.service';
import { OfferService } from './offer/services/offer.service';
import { CartMessagingService } from './shared/cart-overview/services/cart-messaging.service';
import { OrderEffects } from 'src/app/order-complete/store/order.effects';
import { OrderService } from 'src/app/order-complete/services/order.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([OfferEffects, OrderEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    KindService,
    OfferService,
    CartMessagingService,
    OrderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
