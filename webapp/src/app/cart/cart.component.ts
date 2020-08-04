import { AfterViewInit, Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, take, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import { selectCart } from './store/cart.selectors'
import { CartState } from 'src/app/cart/store/cart.reducer';
import { ICartItem } from 'src/app/cart/interfaces/cart.interface';
import { CartService } from 'src/app/cart/services/cart.service';
import { BaseObject } from 'src/app/baseobject';
import { CartMessagingService } from 'src/app/shared/cart-overview/services/cart-messaging.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends BaseObject implements OnInit, AfterViewInit {

  constructor(
    private readonly cartService: CartService,
    private readonly router: Router,
    private readonly store: Store,
    private readonly fromBuilder: FormBuilder,
    cartMessagingService: CartMessagingService,
  ) {
    super(cartMessagingService);
  }

  public cartItems: ICartItem[];
  public orderForm: FormGroup

  ngOnInit(): void {
    this.selectCart();
    this.initForm();
  }

  ngAfterViewInit(): void {
    this.setupCartOverviewState('left', true, false);
  }

  private initForm(): void {
    this.orderForm = this.fromBuilder.group({
      name: '',
      surname: '',
      phone: '',
    })

  }

  public placeOrder(): void {
    const name = this.orderForm.get('name').value;
    const surname = this.orderForm.get('surname').value;
    const phone = this.orderForm.get('phone').value;

    const payload = {
      name,
      surname,
      phone,
      state: 'pending',
      items: this.cartItems,
    };

    console.log('pl orde', payload, name, surname, phone);
    this.cartService.placeOrder(payload)
      .pipe(
        take(1),
        catchError((err) => {
          console.error('err')
          return of(err);
        })
      )
      .subscribe(({ id }) => {
        console.log('res', id);
        this.router.navigate([`/order-complete/${id}`]);
      })
  }

  private selectCart(): void {
    this.store.select(selectCart)
    .pipe(
      map((cart: CartState) => {
        return Object.values(cart.entities)
      }),
      takeUntil(this.componentDestroy),
    )
    .subscribe((data: ICartItem[]) => {
      console.log('DATA', data);
      if (data.length === 0) {
        console.log('navigate home')
        this.router.navigate(['']);
      }

      this.cartItems = data;
    })
  }


}
