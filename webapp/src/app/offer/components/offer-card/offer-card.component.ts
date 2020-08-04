import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOffer } from '../../interfaces/offer.interface';
import { ICartItem } from 'src/app/cart/interfaces/cart.interface';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent {

  constructor() {}

  @Input()
  public addToCartFn;

  @Input()
  public offer: IOffer;

  @Input()
  public cartData: ICartItem;

  public addToCart(offer: IOffer): void {
    this.addToCartFn(offer);
  }
}
