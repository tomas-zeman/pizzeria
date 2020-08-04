import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OfferService {
  constructor(private http: HttpClient) {
  }

  public getOffers() {
    return this.http.get('/api/offer');
  }
}
