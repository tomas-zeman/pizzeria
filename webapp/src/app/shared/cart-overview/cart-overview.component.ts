import { Component, Input, OnInit } from '@angular/core';
import { ICartItem, ICartWithPriceItem } from 'src/app/cart/interfaces/cart.interface';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';

import { selectCart } from '../../cart/store/cart.selectors';
import { selectOffers } from '../../offer/store/offer.selectors';
import { CartState } from 'src/app/cart/store/cart.reducer';
import { IOffer } from 'src/app/offer/interfaces/offer.interface';
import { AddToCart, DeleteAllInCart, RemoveInCart } from 'src/app/cart/store/cart.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-overview',
  templateUrl: './cart-overview.component.html',
  styleUrls: ['./cart-overview.component.scss']
})
export class CartOverviewComponent implements OnInit {

  @Input()
  showActions = true;

  public cartItems: ICartWithPriceItem[];

  constructor(
    private readonly store: Store,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.selectCart();
  }

  public onOrder() {
    this.router.navigate(['cart']);
  }

  public addToCart(cartItem: ICartItem): void {
    const newCartItem: ICartItem = { id: cartItem.id, quantity: 1 };
    this.store.dispatch(new AddToCart(newCartItem));
  }

  public removeFromCart(cartItem: ICartItem): void {
    const cartItemToRemove: ICartItem = { id: cartItem.id, quantity: 0 };
    this.store.dispatch(new RemoveInCart(cartItemToRemove));
  }

  public deleteCart(): void {
    this.store.dispatch(new DeleteAllInCart());
  }

  public countCartTotal(): number {
    return this.cartItems.reduce((acc, cur) => (acc + (cur.price * cur.quantity)), 0)
  }

  private selectCart() {
    combineLatest([
        this.store.select(selectCart),
        this.store.select(selectOffers),
      ]
    ).pipe(
      map(([cart, offers]: [CartState, { [ key: string]: IOffer }]): ICartWithPriceItem[] => {
        return Object.values(cart.entities)
            .map((cartItem): ICartWithPriceItem =>
              ({
                ...cartItem,
                price: offers[cartItem.id].price,
                name: offers[cartItem.id].name,
              })
            );
      }),
    ).subscribe((data: ICartWithPriceItem[]) => {
      this.cartItems = data;
    })
  }

}
