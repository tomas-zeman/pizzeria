import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CartService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public placeOrder(payload) {
    return this.http.post('/api/order', { id: uuid(), ...payload });
  }
}
