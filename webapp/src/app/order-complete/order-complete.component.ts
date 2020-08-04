import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BaseObject } from 'src/app/baseobject';
import { CartMessagingService } from 'src/app/shared/cart-overview/services/cart-messaging.service';
import { Store } from '@ngrx/store';
import { selectOrderState } from 'src/app/order-complete/store/order.selectors';
import { takeUntil } from 'rxjs/operators';
import { OrderState } from 'src/app/order-complete/interfaces/order.interface';
import { LoadOrder } from 'src/app/order-complete/store/order.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.scss']
})
export class OrderCompleteComponent extends BaseObject implements OnInit, AfterViewInit {

  public order: OrderState;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store,
    cartMessagingService: CartMessagingService,
  ) {
    super(cartMessagingService);
  }

  ngOnInit(): void {
    this.selectOrder();
    this.dispatchOrder()
    console.log('??????', this.route.snapshot.paramMap.get('id'))
  }

  ngAfterViewInit(): void {
    this.setupCartOverviewState('left', false, false);
  }

  public selectOrder(): void {
    this.store.select(selectOrderState)
      .pipe(
        takeUntil(this.componentDestroy)
      )
      .subscribe((order: OrderState) => {
        console.log('received order', order);
        this.order = order;
      })
  }

  public dispatchOrder(): void {
    this.store.dispatch(new LoadOrder(this.route.snapshot.paramMap.get('id')));
  }
}
