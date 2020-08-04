import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartService } from './services/cart.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CartComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CartRoutingModule,
    SharedModule,
  ],
  providers: [
    CartService,
  ]
})
export class CartModule { }
