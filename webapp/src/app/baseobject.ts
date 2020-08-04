import { Component, Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { CartMessagingService } from './shared/cart-overview/services/cart-messaging.service';

@Directive({
  selector: 'app-base',
})
export class BaseObject implements OnDestroy {
  public componentDestroy: Subject<any> = new Subject();

  constructor(
    protected cartMessagingService: CartMessagingService,
  ) {
  }

  public ngOnDestroy() {
    this.componentDestroy.next();
    this.componentDestroy.complete();
  }

  protected setupCartOverviewState(position: 'left' | 'right', display: boolean, actions: boolean): void {
    this.cartMessagingService.sendMessage({ position, display, actions });
  }
}
