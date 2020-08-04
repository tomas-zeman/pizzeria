import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IKind } from './interfaces/kind.interface';
import { selectCategorisedOffers } from './store/offer.selectors';
import { LoadOffers } from './store/offer.actions';
import { IOffer } from './interfaces/offer.interface';
import { AddToCart } from '../cart/store/cart.actions';
import { ICartItem } from '../cart/interfaces/cart.interface';
import { selectCart } from '../cart/store/cart.selectors';
import { BaseObject } from 'src/app/baseobject';
import { takeUntil } from 'rxjs/operators';
import { CartMessagingService } from 'src/app/shared/cart-overview/services/cart-messaging.service';


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent extends BaseObject implements OnInit, AfterViewInit {
  public items: IKind[];
  private cart: { [key: string]: ICartItem };
  constructor(
    private readonly store: Store,
    cartMessagingService: CartMessagingService,
  ) {
    super(cartMessagingService);
  }

  ngOnInit(): void {
    this.dispatchActions();

    this.store.select(selectCategorisedOffers)
      .pipe(
        takeUntil(this.componentDestroy),
      )
      .subscribe((data: IKind[]) => {
        this.items = data;
      });

    this.selectCart();
  }

  ngAfterViewInit(): void {
    this.setupCartOverviewState('right', true, true);
  }

  public getCartDataForItem(id: string): ICartItem | undefined {
    return this.cart && this.cart[id];
  }

  private dispatchActions(): void {
    this.store.dispatch(new LoadOffers());
  }

  public bindAddToCart() {
    return this.addToCart.bind(this);
  }

  public addToCart(offer: IOffer): void {
    const newCartItem: ICartItem = { id: offer.id, quantity: 1 };
    this.store.dispatch(new AddToCart(newCartItem));
  }

  private selectCart() {
    this.store.select(selectCart)
      .pipe(
        takeUntil(this.componentDestroy),
      )
      .subscribe((data) => {
      console.log('entities change', data)
      this.cart = data.entities;
    });
  }
}
