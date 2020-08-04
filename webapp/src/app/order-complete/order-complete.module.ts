import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderCompleteRoutingModule } from './order-complete-routing.module';
import { OrderCompleteComponent } from './order-complete.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OrderCompleteComponent],
  imports: [
    CommonModule,
    OrderCompleteRoutingModule,
    SharedModule,
  ],
})
export class OrderCompleteModule { }
