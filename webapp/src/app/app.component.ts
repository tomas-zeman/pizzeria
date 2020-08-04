import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { BaseObject } from './baseobject';
import { CartMessagingService } from './shared/cart-overview/services/cart-messaging.service';
import { ICartOverviewState } from './shared/cart-overview/interfaces/cart-overwiev.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent extends BaseObject implements AfterViewInit {
  public cartOverviewSettings: ICartOverviewState = {
    display: false,
    actions: true,
    position: 'right',
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    cartMessagingService: CartMessagingService,
  ) {
    super(cartMessagingService);
  }

  ngAfterViewInit(): void {
    this.subscribeListeners();
  }

  private subscribeListeners(): void {
    this.cartMessagingService.getMessage()
      .pipe(
        takeUntil(this.componentDestroy)
      )
      .subscribe((message: ICartOverviewState) => {
        console.log('cartMessagingService', message);
        this.cartOverviewSettings = message;
        this.changeDetectorRef.detectChanges();
      })
  }
}
