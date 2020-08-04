import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public getOrder(id: string) {
    return this.http.get(`/api/order/${id}`)
  }
}
