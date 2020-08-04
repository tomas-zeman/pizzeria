import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderCompleteComponent } from './order-complete.component';

const routes: Routes = [
    {
      path: ':id',
      component: OrderCompleteComponent
    },
    {
      path: '**',
      redirectTo: '/'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderCompleteRoutingModule { }
